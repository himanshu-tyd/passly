"use client";

type PinKeypadProps = {
  onDigit: (digit: string) => void;
  onBackspace: () => void;
  disabled?: boolean;
};

const DIGITS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

export default function PinKeypad({
  onDigit,
  onBackspace,
  disabled = false,
}: PinKeypadProps) {
  return (
    <div className="grid grid-cols-3 gap-y-6 gap-x-8 mx-auto w-full max-w-[280px]">
      {DIGITS.slice(0, 9).map((d) => (
        <button
          key={d}
          type="button"
          disabled={disabled}
          onClick={() => onDigit(d)}
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-light text-white hover:bg-white/10 transition-colors active:bg-white/20 active:scale-95 outline-none focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50 disabled:pointer-events-none select-none"
        >
          {d}
        </button>
      ))}
      <div className="w-16 h-16 flex items-center justify-center opacity-0 pointer-events-none" />
      <button
        type="button"
        disabled={disabled}
        onClick={() => onDigit("0")}
        className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-light text-white hover:bg-white/10 transition-colors active:bg-white/20 active:scale-95 outline-none focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50 disabled:pointer-events-none select-none"
      >
        0
      </button>
      <button
        type="button"
        disabled={disabled}
        onClick={onBackspace}
        className="w-16 h-16 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors active:bg-white/20 active:scale-95 outline-none focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50 disabled:pointer-events-none select-none"
      >
        <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
          backspace
        </span>
      </button>
    </div>
  );
}
