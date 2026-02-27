"use client";

import { useState } from "react";
import Link from "next/link";
import FormField from "./FormField";
import useSignup from "@/hooks/useSignup";

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { loading, errors: signupErrors, data, success, singup } = useSignup();

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullname = (formData.get("fullname") as string)?.trim();
    const username = (formData.get("username") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;

    const newErrors: Record<string, string> = {};
    if (!fullname) newErrors.fullname = "Full name is required.";
    if (!username) newErrors.username = "Username is required.";
    else if (username.length < 3) newErrors.username = "Use at least 3 characters.";
    else if (!/^[a-zA-Z0-9_-]+$/.test(username))
      newErrors.username = "Only letters, numbers, _ and - allowed.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email.";
    if (!password) newErrors.password = "Master password is required.";
    else if (password.length < 8)
      newErrors.password = "Use at least 8 characters.";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    const payload = {
      name: fullname,
      username,
      email,
      password,
    };
    await singup(payload);

    if (signupErrors) {
      setErrors(signupErrors);
    }

    setIsSubmitting(false);
  }

  if (success) {
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
          Signup successful
        </h2>
        <p className="text-gray-500 text-sm mb-6 max-w-[260px]">
          Your account has been created. Log in to access your vault.
        </p>
        <Link
          href="/signin"
          className="w-full flex justify-center items-center py-4 px-4 rounded-full text-sm font-semibold text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] focus:ring-white transition-all active:scale-[0.98]"
        >
          Go to Log in
          <span className="material-symbols-outlined ml-2" style={{ fontSize: 18 }}>
            arrow_forward
          </span>
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full">
      <FormField
        label="Full Name"
        id="fullname"
        name="fullname"
        type="text"
        placeholder="Enter your full name"
        icon="person"
        error={errors.fullname}
        autoComplete="name"
      />
      <FormField
        label="Username"
        id="username"
        name="username"
        type="text"
        placeholder="Choose a username"
        icon="badge"
        error={errors.username}
        autoComplete="username"
      />
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
        autoComplete="new-password"
      />
      <FormField
        label="Confirm Master Password"
        id="confirm-password"
        name="confirm-password"
        type="password"
        placeholder="••••••••••••"
        icon="check_circle"
        error={errors.confirmPassword}
        autoComplete="new-password"
      />
      <div className="pt-4 sm:pt-6">
        <button
          type="submit"
          disabled={isSubmitting || loading}
          className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-full shadow-lg text-sm font-semibold text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] focus:ring-white transition-all active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
        >
          {isSubmitting || loading ? (
            <span className="material-symbols-outlined animate-spin" style={{ fontSize: 20 }}>
              progress_activity
            </span>
          ) : (
            "Create Account"
          )}
        </button>
      </div>
    </form>
  );
}
