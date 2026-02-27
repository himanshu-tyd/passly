import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 text-center border-t border-[#2a2a2a] overflow-hidden bg-[#151515]">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="relative z-10 w-full max-w-[min(100%,72rem)] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 sm:mb-8 shadow-lg shadow-white/5">
          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-black transform rotate-45" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight text-white">
          START PROTECTING YOUR
          <br />
          <span className="font-light text-gray-400">DIGITAL LIFE TODAY</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-10 max-w-md mx-auto">
          Join thousands of users who have secured their digital footprint with
          military-grade encryption.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center sm:items-stretch max-w-sm sm:max-w-none mx-auto">
          <Link
            href="/signup"
            className="bg-white text-black py-4 px-6 text-sm font-bold rounded-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-xl"
          >
            GET STARTED NOW
            <span className="material-icons text-sm">north_east</span>
          </Link>
          <Link
            href="#pricing"
            className="border border-[#333] text-gray-300 py-4 px-6 text-xs font-mono rounded-sm hover:bg-[#1a1a1a] transition-colors flex items-center justify-center"
          >
            VIEW PRICING PLANS
          </Link>
        </div>
      </div>
    </section>
  );
}
