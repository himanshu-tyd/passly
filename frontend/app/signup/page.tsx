import type { Metadata } from "next";
import {
  AuthBackLink,
  AuthFooter,
  AuthPageShell,
  SignupForm,
  SignupHero,
} from "../components/auth";

export const metadata: Metadata = {
  title: "Create Account | Passly",
  description: "Create your Passly account and secure your digital life.",
};

export default function SignupPage() {
  return (
    <AuthPageShell>
      <AuthBackLink />
      <div className="rounded-2xl border border-[#222] bg-[#0d0d0d]/80 backdrop-blur-sm p-6 sm:p-8 shadow-xl shadow-black/20">
        <SignupHero />
        <SignupForm />
      </div>
      <AuthFooter
        prompt="Already have an account?"
        linkLabel="Log in"  
        linkHref="/signin"
      />
    </AuthPageShell>
  );
}
