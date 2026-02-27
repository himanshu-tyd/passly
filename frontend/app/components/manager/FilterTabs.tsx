"use client";

import { useState } from "react";

interface FilterTabsProps {
  onFilterChange?: (filter: string) => void;
}

const tabs = ["All Items", "Logins", "Cards", "Notes"];

export default function FilterTabs({ onFilterChange }: FilterTabsProps) {
  const [activeTab, setActiveTab] = useState("All Items");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onFilterChange?.(tab);
  };

  return (
    <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium whitespace-nowrap transition-colors ${
            activeTab === tab
              ? "bg-black dark:bg-white text-white dark:text-black"
              : "border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-gray-600 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
