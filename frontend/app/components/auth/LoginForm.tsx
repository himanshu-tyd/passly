"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FormField from "./FormField";
import useSignin from "@/hooks/useSignin";

export default function LoginForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { loading, errors: apiErrors,  signin ,data} = useSignin();

  useEffect(() => {
    if (data.success) {
      const timer = setTimeout(() => {
        router.push("/manager");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [data.success, router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") as string)?.trim();
    
    const password = formData.get("password") as string;

    const newErrors: Record<string, string> = {};
    if (!email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email.";
    if (!password) newErrors.password = "Master password is required.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    await signin({ email, password });
    setIsSubmitting(false);
  }

  if (data.success) {
    return (
      <div className="flex flex-col items-center text-center py-4">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-5">
          <span
            className="material-symbols-outlined text-green-400"
            style={{ fontSize: 40 }}
            aria-hidden
          >
            check_circle
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Login successful
        </h2>
        <p className="text-gray-500 text-sm mb-6 max-w-[280px]">
          You’re signed in. Continue to your dashboard.
        </p>
        <Link
          href="/"
          className="w-full flex justify-center items-center py-4 px-4 rounded-full text-sm font-semibold text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] focus:ring-white transition-all active:scale-[0.98]"
        >
          Continue
          <span
            className="material-symbols-outlined ml-2"
            style={{ fontSize: 18 }}
          >
            arrow_forward
          </span>
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full">
      <FormField
        label="Email Address"
        id="email"
        name="email"
        type="email"
        placeholder="name@example.com"
        icon="mail"
        error={errors.email}
        autoComplete="email"
      />
      <FormField
        label="Master Password"
        id="password"
        name="password"
        type="password"
        placeholder="••••••••••••"
        icon="key"
        error={errors.password}
        autoComplete="current-password"
      />
      {apiErrors?.error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {apiErrors.error}
        </div>
      )}
      <div className="pt-4 sm:pt-6">
        <button
          type="submit"
          disabled={isSubmitting || loading}
          className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-full shadow-lg text-sm font-semibold text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] focus:ring-white transition-all active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
        >
          {isSubmitting || loading ? (
            <span
              className="material-symbols-outlined animate-spin"
              style={{ fontSize: 20 }}
            >
              progress_activity
            </span>
          ) : (
            "Log in"
          )}
        </button>
      </div>
    </form>
  );
}
