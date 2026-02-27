"use client";

export default function ManagerHeader() {
  return (
    <header className="sticky top-0 z-30 bg-surface-light/70 dark:bg-background-dark/70 backdrop-blur-md border-b border-border-light dark:border-border-dark px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
          <span
            className="material-symbols-outlined text-white dark:text-black"
            style={{ fontSize: 18 }}
          >
            lock
          </span>
        </div>
        <h1 className="text-xl font-semibold tracking-tight">Passly</h1>
      </div>
      <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <span className="material-symbols-outlined">notifications</span>
      </button>
    </header>
  );
}
