export default function VerifyHeader() {
  return (
    <div className="flex flex-col items-center gap-4 mb-12">
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-black/50">
        <span
          className="material-symbols-outlined text-black"
          style={{ fontSize: 32 }}
          aria-hidden
        >
          lock
        </span>
      </div>
      <h1 className="text-2xl font-semibold tracking-tight text-white">
        Passly
      </h1>
    </div>
  );
}
