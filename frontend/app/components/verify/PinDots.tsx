type PinDotsProps = {
  length: number;
  maxLength?: number;
  error?: boolean;
};

export default function PinDots({
  length,
  maxLength = 4,
  error = false,
}: PinDotsProps) {
  return (
    <div className="flex gap-6">
      {Array.from({ length: maxLength }).map((_, i) => (
        <div
          key={i}
          className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 ${
            error
              ? "border-red-500 bg-red-500/20"
              : i < length
                ? "border-white bg-white"
                : "border-gray-600 bg-transparent"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}
