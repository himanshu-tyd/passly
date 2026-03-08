"use client";

import { useState, useCallback } from "react";
import axios from "axios";
import { API_BASE } from "@/lib/config";

const VERIFIED_AT_KEY = "passly_verified_at";
const SESSION_DURATION_MS = 10 * 60 * 1000; // 10 minutes

export function setVerified() {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(VERIFIED_AT_KEY, String(Date.now()));
  }
}

export function clearVerified() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(VERIFIED_AT_KEY);
  }
}

export function isVerified(): boolean {
  if (typeof window === "undefined") return false;
  const verifiedAt = sessionStorage.getItem(VERIFIED_AT_KEY);
  if (!verifiedAt) return false;
  const elapsed = Date.now() - parseInt(verifiedAt, 10);
  if (elapsed >= SESSION_DURATION_MS) {
    sessionStorage.removeItem(VERIFIED_AT_KEY);
    return false;
  }
  return true;
}

export default function usePinVerification() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasPin, setHasPin] = useState<boolean | null>(null);

  const addDigit = useCallback((digit: string) => {
    setPin((p) => {
      if (p.length >= 4) return p;
      return p + digit;
    });
    setError("");
  }, []);

  const removeDigit = useCallback(() => {
    setPin((p) => p.slice(0, -1));
    setError("");
  }, []);

  const clearPin = useCallback(() => setPin(""), []);

  const checkHasPin = useCallback(async (): Promise<"has" | "none" | "unauthorized"> => {
    try {
      const res = await axios.get(`${API_BASE}/pin/status`, {
        withCredentials: true,
      });
      setHasPin(res.data.hasPin);
      return res.data.hasPin ? "has" : "none";
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        return "unauthorized";
      }
      setHasPin(false);
      return "none";
    }
  }, []);

  const setUserPin = useCallback(async (newPin: string) => {
    setLoading(true);
    setError("");
    try {
      await axios.post(
        `${API_BASE}/pin/set`,
        { pin: newPin },
        { withCredentials: true }
      );
      setPin("");
      return true;
    } catch (err: unknown) {
      let message = "Failed to set PIN";
      if (axios.isAxiosError(err) && err.response?.data) {
        const data = err.response.data as { message?: string };
        message = data.message || message;
      }
      setError(message);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const verifyPin = useCallback(async (enteredPin: string) => {
    setLoading(true);
    setError("");
    try {
      await axios.post(
        `${API_BASE}/pin/verify`,
        { pin: enteredPin },
        { withCredentials: true }
      );
      setVerified();
      return true;
    } catch (err: unknown) {
      let message = "Invalid PIN";
      if (axios.isAxiosError(err) && err.response?.data) {
        const data = err.response.data as { message?: string };
        message = data.message || message;
      }
      setError(message);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    pin,
    addDigit,
    removeDigit,
    clearPin,
    error,
    loading,
    hasPin,
    checkHasPin,
    setUserPin,
    verifyPin,
  };
}
