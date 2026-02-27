"use client";

interface WebsiteInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function WebsiteInput({ value, onChange }: WebsiteInputProps) {
  return (
    <div className="bg-surface-dark rounded-xl p-4 border border-border-dark group focus-within:border-gray-600 transition-colors">
      <label className="block text-xs uppercase tracking-widest text-gray-500 font-mono mb-3">
        Website
      </label>
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-gray-500 flex-shrink-0">
          language
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. Netflix"
          className="flex-1 bg-transparent border-0 p-0 text-base text-white placeholder-gray-600 focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
}
