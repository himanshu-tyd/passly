"use client";

interface PasswordItemProps {
  id: string;
  title: string;
  username: string;
  logoUrl?: string;
  bgColor?: string;
  onCopy?: () => void;
}

export default function PasswordItem({
  id,
  title,
  username,
  logoUrl,
  bgColor = "bg-black",
  onCopy,
}: PasswordItemProps) {
  return (
    <div className="p-4 flex items-center justify-between group hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
      <div className="flex items-center gap-4">
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
        <div>
          <h3 className="font-medium text-sm text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-xs text-gray-500 font-mono">{username}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onCopy}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition-colors"
        >
          <span className="material-symbols-outlined text-base">
            content_copy
          </span>
        </button>
      </div>
    </div>
  );
}
