"use client";

interface AddFABProps {
  onClick?: () => void;
}

export default function AddFAB({ onClick }: AddFABProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-4 z-20 w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
    >
      <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
        add
      </span>
    </button>
  );
}
