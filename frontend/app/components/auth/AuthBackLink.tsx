import Link from "next/link";

export default function AuthBackLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-white transition-colors mb-6"
    >
      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
        arrow_back
      </span>
      Back to home
    </Link>
  );
}
