import type { Metadata } from "next";
import {
  AuthBackLink,
  AuthFooter,
  AuthPageShell,
  LoginForm,
  LoginHero,
} from "../components/auth";

export const metadata: Metadata = {
  title: "Log in | Passly",
  description: "Log in to your Passly account and access your vault.",
};

export default function LoginPage() {
  return (
    <AuthPageShell>
      <AuthBackLink />
      <div className="rounded-2xl border border-[#222] bg-[#0d0d0d]/80 backdrop-blur-sm p-6 sm:p-8 shadow-xl shadow-black/20">
        <LoginHero />
        <LoginForm />
      </div>
      <AuthFooter
        prompt="Don't have an account?"
        linkLabel="Sign up"
        linkHref="/signup"
      />
    </AuthPageShell>
  );
}
