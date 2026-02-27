"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <div className="mb-6">
      <div className="relative group">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-gray-400">search</span>
        </span>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search vault..."
          className="block w-full pl-10 pr-3 py-3 border border-border-light dark:border-border-dark rounded-lg leading-5 bg-surface-light dark:bg-surface-dark placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm font-mono transition-shadow shadow-sm"
        />
        <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
          <kbd className="inline-flex items-center border border-gray-200 dark:border-gray-700 rounded px-2 text-xs font-mono text-gray-400">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
}
