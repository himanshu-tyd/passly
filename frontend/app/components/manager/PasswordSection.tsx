"use client";

import PasswordItem from "./PasswordItem";

export interface PasswordEntry {
  id: string;
  title: string;
  username: string;
  logoUrl?: string;
  bgColor?: string;
}

interface PasswordSectionProps {
  title: string;
  items: PasswordEntry[];
  onCopy?: (itemId: string) => void;
}

export default function PasswordSection({
  title,
  items,
  onCopy,
}: PasswordSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3 px-1 mt-6">
        {title}
      </h2>
      <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden divide-y divide-border-light dark:divide-border-dark shadow-sm">
        {items.map((item) => (
          <PasswordItem
            key={item.id}
            id={item.id}
            title={item.title}
            username={item.username}
            logoUrl={item.logoUrl}
            bgColor={item.bgColor}
            onCopy={() => onCopy?.(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
