import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 md:pb-20">
      <div className="font-mono text-[10px] text-gray-400 mb-4 tracking-widest">
        [ 01 / 05 ]
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-2 leading-[1.1] text-white">
        SECURE
        <br />
        <span className="font-bold">EVERY LOGIN</span>
      </h1>
      <div className="flex items-center mb-6 sm:mb-8">
        <div className="h-[2px] w-6 sm:w-8 bg-white mr-3 animate-pulse" />
        <h2 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-gray-300">
          IN SECONDS
        </h2>
      </div>
      <p className="text-sm sm:text-base text-gray-400 mb-8 max-w-md leading-relaxed border-l-2 border-[#333] pl-4 ml-0">
        // Military-grade security, zero effort. Your digital vault for a complex
        world.
      </p>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        <Link
          href="/signup"
          className="bg-white text-black px-5 py-3 text-xs font-bold rounded-sm hover:bg-gray-200 flex items-center transition-all"
        >
          GET STARTED
          <span className="material-icons text-sm ml-2">arrow_forward</span>
        </Link>
        <button
          type="button"
          className="border border-[#333] text-white px-5 py-3 text-xs font-mono rounded-sm hover:bg-[#1a1a1a] transition-all"
        >
          BOOK A DEMO
        </button>
      </div>
    </section>
  );
}
