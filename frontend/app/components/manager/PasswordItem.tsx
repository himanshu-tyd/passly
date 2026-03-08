"use client";

import { decryptPass } from "@/lib/help";
import { useState } from "react";

interface PasswordItemProps {
  id: string;
  title: string;
  username: string;
  password: string;
  email?: string;
  logoUrl?: string;
  bgColor?: string;
  passKey: string;
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export default function PasswordItem({
  title,
  username,
  password,
  email,
  logoUrl,
  bgColor = "bg-black",
  passKey,
}: PasswordItemProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [decryptedPass, setDecryptedPass] = useState<string | null>(null);

  const handleShowPassword = () => {
    if (!showPassword && !decryptedPass) {
      try {
        const decrypted = decryptPass(passKey as string, password);
        setDecryptedPass(decrypted);
      } catch {
        // Decryption failed
      }
    }
    setShowPassword(!showPassword);
  };

  const handleCopyPassword = () => {
    try {
      const text = decryptedPass ?? decryptPass(passKey as string, password);
      copyToClipboard(text);
    } catch {
      // Decryption failed
    }
  };

  return (
    <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div
          className={`w-10 h-10 rounded-lg shrink-0 ${bgColor} flex items-center justify-center text-white`}
        >
          {logoUrl ? (
            <img alt={`${title} Logo`} className="w-5 h-5" src={logoUrl} />
          ) : (
            <span className="font-bold text-lg">
              {title.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="mt-1.5 space-y-1">
            <div className="text-xs text-gray-500 font-mono flex items-center justify-between gap-2">
              <span className="truncate">{username}</span>
              <button
                onClick={() => copyToClipboard(username)}
                className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors shrink-0"
                title="Copy username"
              >
                <span className="material-symbols-outlined text-sm">content_copy</span>
              </button>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 font-mono flex items-center justify-between gap-2">
              <span className="truncate">
                {showPassword && decryptedPass ? decryptedPass : "••••••••"}
              </span>
              <span className="flex items-center gap-0.5 shrink-0">
                <button
                  onClick={handleShowPassword}
                  className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  <span className="material-symbols-outlined text-sm">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
                <button
                  onClick={handleCopyPassword}
                  className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
                  title="Copy password"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                </button>
              </span>
            </div>
            {email && (
              <div className="text-xs text-gray-500 font-mono flex items-center justify-between gap-2">
                <span className="truncate">{email}</span>
                <button
                  onClick={() => copyToClipboard(email)}
                  className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors shrink-0"
                  title="Copy email"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
