"use client";

import { decryptPass } from "@/lib/help";
import { useState } from "react";

interface PasswordItemProps {
  id: string;
  title: string;
  username: string;
  password: string;
  logoUrl?: string;
  bgColor?: string;
  passKey:string
  onCopy?: () => void;
}

export default function PasswordItem({
  id,
  title,
  username,
  password,
  logoUrl,
  bgColor = "bg-black",
  onCopy,
  passKey
}: PasswordItemProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [pass,setPass]=useState<string |  null>(null)

  console.log('PASS KEY', passKey)


  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    if (onCopy) {
      onCopy();
    }
  };

  const handleShowPassword = (key:string, password:string) => {
    
    console.log('passs', key, password)
    
    const pass=decryptPass(key as string, password)
    setPass(pass)
    setShowPassword(!showPassword);

  };


 

  return (
    <div className="p-4 flex items-center justify-between group hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
      <div className="flex items-center gap-4 flex-1">
        <div
          className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center text-white`}
        >
          {logoUrl ? (
            <img alt={`${title} Logo`} className="w-5 h-5" src={logoUrl} />
          ) : (
            <span className="font-bold text-lg">
              {title.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-sm text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-xs text-gray-500 font-mono">{username}</p>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-mono flex items-center gap-2">
            {showPassword ? pass : "••••••••"}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
        <button
          onClick={()=>handleShowPassword(passKey, password)}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition-colors"
          title={showPassword ? "Hide password" : "Show password"}
        >
          <span className="material-symbols-outlined text-base">
            {showPassword ? "visibility_off" : "visibility"}
          </span>
        </button>
        <button
          onClick={handleCopyPassword}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition-colors"
          title="Copy password"
        >
          <span className="material-symbols-outlined text-base">
            content_copy
          </span>
        </button>
      </div>
    </div>
  );
}
