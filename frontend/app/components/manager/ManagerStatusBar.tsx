"use client";

export default function ManagerStatusBar() {
  return (
    <div className="h-12 w-full bg-surface-light/70 dark:bg-background-dark/70 sticky top-0 z-30 flex items-end justify-center pb-2 border-b border-border-light dark:border-border-dark lg:hidden backdrop-blur-md">
      <div className="text-xs font-mono opacity-50">09:41</div>
    </div>
  );
}