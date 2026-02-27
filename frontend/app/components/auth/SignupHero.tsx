export default function SignupHero() {
  return (
    <div className="flex flex-col items-center mb-8 sm:mb-10">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center mb-5 sm:mb-6 shadow-xl shadow-white/10 ring-1 ring-white/10">
        <span
          className="material-symbols-outlined text-black"
          style={{ fontSize: 28 }}
          aria-hidden
        >
          lock
        </span>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-white text-center">
        Create Account
      </h1>
      <p className="text-gray-500 text-sm font-medium text-center max-w-[260px]">
        Secure your digital life with Passly.
      </p>
    </div>
  );
}
