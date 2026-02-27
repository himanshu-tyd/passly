"use client";

export default function FilterChips() {
  return (
    <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
      <button className="px-4 py-1.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-mono font-medium whitespace-nowrap">
        All Items
      </button>
      <button className="px-4 py-1.5 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-gray-600 dark:text-gray-300 text-xs font-mono whitespace-nowrap hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
        Logins
      </button>
      <button className="px-4 py-1.5 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-gray-600 dark:text-gray-300 text-xs font-mono whitespace-nowrap hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
        Cards
      </button>
      <button className="px-4 py-1.5 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-gray-600 dark:text-gray-300 text-xs font-mono whitespace-nowrap hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
        Notes
      </button>
    </div>
  );
}
