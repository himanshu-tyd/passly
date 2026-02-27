"use client";

interface CategorySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const categories = ["Logins", "Cards", "Notes", "Identity", "Payment"];

export default function CategorySelector({
  value,
  onChange,
}: CategorySelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-xs uppercase tracking-widest text-gray-500 font-mono">
        Category
      </label>
      <div className="grid grid-cols-2 gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
              value === cat
                ? "bg-white text-black shadow-lg"
                : "bg-surface-dark border border-border-dark text-gray-300 hover:border-gray-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
