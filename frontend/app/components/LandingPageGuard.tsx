"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_BASE } from "@/lib/config";
import { isVerified } from "@/hooks/usePinVerification";

type LandingPageGuardProps = {
  children: React.ReactNode;
};

export default function LandingPageGuard({ children }: LandingPageGuardProps) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_BASE}/pin/status`, { withCredentials: true })
      .then(() => {
        // Logged in - redirect based on verification
        if (isVerified()) {
          router.replace("/manager");
        } else {
          router.replace("/verify");
        }
      })
      .catch(() => {
        // Not logged in (401) - show landing page
        setReady(true);
      });
  }, [router]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212]">
        <div className="animate-pulse text-gray-500 text-sm">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}
