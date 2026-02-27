import type { Metadata } from "next";
import './styles/globals.css';
import ThemeInitializer from "./components/ThemeInitializer";

export const metadata: Metadata = {
  title: "Passly - Secure Your Digital Life",
  description:
    "Military-grade security, zero effort. Your digital vault for a complex world. Protect your passwords and sensitive data with Passly.",
  keywords:
    "password manager, encryption, security, digital vault, AES-256",
  openGraph: {
    title: "Passly - Secure Your Digital Life",
    description:
      "Military-grade security for your passwords and sensitive data",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@24,400,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-sans antialiased selection:bg-white selection:text-black dollar-pattern transition-colors duration-200">
        <ThemeInitializer />
        {children}
      </body>
    </html>
  );
}
