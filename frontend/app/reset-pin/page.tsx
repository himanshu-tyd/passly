"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { API_BASE } from "@/lib/config";
import { VerifyHeader } from "../components/verify";

export default function ResetPinPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [newPin, setNewPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_BASE}/pin/status`, { withCredentials: true })
      .catch(() => router.replace("/signin"));
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!password || newPin.length !== 4) {
      setError("Enter your password and a 4-digit PIN");
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        `${API_BASE}/pin/reset`,
        { password, newPin },
        { withCredentials: true }
      );
      setSuccess(true);
      setTimeout(() => router.push("/verify"), 1500);
    } catch (err: unknown) {
      let message = "Failed to reset PIN";
      if (axios.isAxiosError(err) && err.response?.data) {
        const data = err.response.data as { message?: string };
        message = data.message || message;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] px-4">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-green-400" style={{ fontSize: 40 }}>
            check_circle
          </span>
        </div>
        <p className="text-white font-medium">PIN reset successfully</p>
        <p className="text-gray-500 text-sm mt-1">Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] px-4">
      <VerifyHeader />
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
            Master Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl bg-[#1E1E1E] border border-[#27272A] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
            autoComplete="current-password"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
            New PIN (4 digits)
          </label>
          <input
            type="password"
            inputMode="numeric"
            pattern="\d{4}"
            maxLength={4}
            value={newPin}
            onChange={(e) => setNewPin(e.target.value.replace(/\D/g, ""))}
            placeholder="••••"
            className="w-full px-4 py-3 rounded-xl bg-[#1E1E1E] border border-[#27272A] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 disabled:opacity-50 transition-all"
        >
          {loading ? "Resetting..." : "Reset PIN"}
        </button>
      </form>
      <Link
        href="/verify"
        className="mt-6 text-sm text-gray-400 hover:text-white transition-colors"
      >
        Back to PIN entry
      </Link>
    </div>
  );
}
