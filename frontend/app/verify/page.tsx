"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { VerifyHeader, PinDots, PinKeypad } from "../components/verify";
import usePinVerification, { setVerified, isVerified } from "@/hooks/usePinVerification";
import Link from "next/link";

export default function VerifyPage() {
  const router = useRouter();
  const {
    pin,
    addDigit,
    removeDigit,
    error,
    loading,
    hasPin,
    checkHasPin,
    setUserPin,
    verifyPin,
    clearPin,
  } = usePinVerification();

  useEffect(() => {
    if (isVerified()) {
      router.replace("/manager");
      return;
    }
    checkHasPin().then((status) => {
      if (status === "unauthorized") {
        router.replace("/signin");
      }
    });
  }, [checkHasPin, router]);

  const handleComplete = useCallback(async () => {
    if (pin.length !== 4) return;
    if (hasPin === null) return;

    if (hasPin) {
      const ok = await verifyPin(pin);
      if (ok) router.push("/manager");
      else clearPin();
    } else {
      const ok = await setUserPin(pin);
      if (ok) {
        setVerified(); // User just created PIN, grant access
        router.push("/manager");
      } else {
        clearPin();
      }
    }
  }, [pin, hasPin, verifyPin, setUserPin, router, clearPin]);

  useEffect(() => {
    if (pin.length === 4 && !loading) {
      handleComplete();
    }
  }, [pin, loading, handleComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= "0" && e.key <= "9") {
        addDigit(e.key);
      } else if (e.key === "Backspace") {
        e.preventDefault();
        removeDigit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [addDigit, removeDigit]);

  if (hasPin === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212]">
        <div className="animate-pulse text-gray-500 text-sm">Loading...</div>
      </div>
    );
  }

  const label = hasPin ? "Enter PIN" : "Create PIN";

  return (
    <div className="bg-[#121212] text-white font-sans antialiased min-h-screen flex flex-col items-center justify-between select-none">
      {/* Status bar (mobile) */}
      <div className="h-12 w-full flex items-end justify-center pb-2 absolute top-0 left-0 z-20">
        <div className="text-xs font-mono text-white opacity-60">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 w-full flex flex-col items-center justify-center mt-12 mb-8">
        <VerifyHeader />

        <div
          className={`flex flex-col items-center gap-6 ${error ? "animate-pin-shake" : ""}`}
        >
          <p className="text-sm font-medium text-[#A1A1AA] uppercase tracking-widest">
            {label}
          </p>
          <PinDots length={pin.length} error={!!error} />
          {error && (
            <p className="text-sm text-red-400 animate-pulse">{error}</p>
          )}
        </div>
      </div>

      {/* Keypad */}
      <div className="w-full max-w-sm px-8 pb-12 flex flex-col gap-10">
        <PinKeypad
          onDigit={addDigit}
          onBackspace={removeDigit}
          disabled={loading}
        />
        <div className="text-center">
          <Link
            href="/reset-pin"
            className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
          >
            Forgot PIN?
          </Link>
        </div>
        <div className="h-6 w-full pointer-events-none lg:hidden" />
      </div>
    </div>
  );
}
