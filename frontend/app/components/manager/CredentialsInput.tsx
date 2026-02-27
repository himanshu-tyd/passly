"use client";

import { useState } from "react";

interface CredentialsInputProps {
  username: string;
  password: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onGeneratePassword?: () => void;
}

export default function CredentialsInput({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onGeneratePassword,
}: CredentialsInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-4">
      {/* Username field */}
      <div className="bg-surface-dark rounded-xl p-4 border border-border-dark group focus-within:border-gray-600 transition-colors">
        <label className="block text-xs uppercase tracking-widest text-gray-500 font-mono mb-3">
          Username
        </label>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-gray-500 flex-shrink-0">
            person
          </span>
          <input
            type="text"
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
            placeholder="Email or username"
            className="flex-1 bg-transparent border-0 p-0 text-base text-white placeholder-gray-600 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      {/* Password field */}
      <div className="bg-surface-dark rounded-xl p-4 border border-border-dark group focus-within:border-gray-600 transition-colors">
        <label className="block text-xs uppercase tracking-widest text-gray-500 font-mono mb-3">
          Password
        </label>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-gray-500 flex-shrink-0">
            key
          </span>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            placeholder="••••••••••••"
            className="flex-1 bg-transparent border-0 p-0 text-base font-mono text-white placeholder-gray-600 focus:outline-none focus:ring-0 tracking-tight"
          />
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
            {onGeneratePassword && (
              <button
                type="button"
                onClick={onGeneratePassword}
                className="text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-2 py-1.5 rounded-md transition-colors"
              >
                GEN
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
