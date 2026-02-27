"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  icon: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: "lock", label: "Vault", href: "/manager" },
  { icon: "send", label: "Send", href: "/manager/send" },
  { icon: "key_visualizer", label: "Generator", href: "/manager/generator" },
  { icon: "settings", label: "Settings", href: "/manager/settings" },
];

export default function ManagerNav() {
  const pathname = usePathname();
  const activeRoute = navItems.find((i) => pathname?.startsWith(i.href))?.href || "/manager";

  return (
    <nav className="fixed bottom-0 w-full bg-surface-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-border-light dark:border-border-dark pb-[env(safe-area-inset-bottom)] z-20">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              activeRoute === item.href
                ? "text-black dark:text-white"
                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            }`}
          >
            <span
              className={`material-symbols-outlined ${activeRoute === item.href ? "filled" : ""}`}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-medium mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
