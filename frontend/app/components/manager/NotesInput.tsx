"use client";

interface NotesInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function NotesInput({ value, onChange }: NotesInputProps) {
  return (
    <div className="space-y-3">
      <label className="block text-xs uppercase tracking-widest text-gray-500 font-mono">
        Notes
      </label>
      <div className="bg-surface-dark rounded-xl p-4 border border-border-dark group focus-within:border-gray-600 transition-colors">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Add any notes..."
          className="w-full bg-transparent border-0 p-0 text-base text-white placeholder-gray-600 focus:outline-none focus:ring-0 resize-none min-h-[80px] font-normal"
          rows={3}
        />
      </div>
    </div>
  );
}
