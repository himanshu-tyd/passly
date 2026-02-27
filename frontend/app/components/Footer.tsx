import Link from "next/link";

const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Security", href: "#security" },
    { label: "Enterprise", href: "#enterprise" },
    { label: "Pricing", href: "#pricing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full py-12 sm:py-14 md:py-16 bg-[#0c0c0c] border-t border-[#2a2a2a]">
      <div className="w-full max-w-[min(100%,72rem)] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
        <div className="min-w-0">
          <h4 className="font-mono text-[10px] text-gray-500 uppercase mb-4 tracking-widest">
            / Product
          </h4>
          <ul className="space-y-2 text-xs text-gray-400">
            {FOOTER_LINKS.product.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h4 className="font-mono text-[10px] text-gray-500 uppercase mb-4 tracking-widest">
            / Company
          </h4>
          <ul className="space-y-2 text-xs text-gray-400">
            {FOOTER_LINKS.company.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-[#2a2a2a] gap-4">
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
          <div className="w-2 h-2 border-2 border-black transform rotate-45" />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-[10px] text-gray-500 font-mono">
          <Link href="/privacy" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-300 transition-colors">
            Terms of Service
          </Link>
          <span>© 2024 Passly Inc.</span>
        </div>
      </div>
      </div>
    </footer>
  );
}
