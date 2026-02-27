import Link from "next/link";

type AuthFooterProps = {
  prompt: string;
  linkLabel: string;
  linkHref: string;
};

export default function AuthFooter({
  prompt,
  linkLabel,
  linkHref,
}: AuthFooterProps) {
  return (
    <p className="text-sm text-gray-500 text-center mt-6 sm:mt-8">
      {prompt}{" "}
      <Link
        href={linkHref}
        className="font-medium text-white hover:underline transition-colors"
      >
        {linkLabel}
      </Link>
    </p>
  );
}
