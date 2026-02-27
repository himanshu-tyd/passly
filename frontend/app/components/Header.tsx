import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-[#121212]/90 backdrop-blur-md border-b border-[#2a2a2a]">
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 h-14 sm:h-16 flex items-center justify-between gap-4 max-w-[min(100%,72rem)] mx-auto w-full min-w-0">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 border-2 border-black transform rotate-45" />
          </div>
          <span className="font-bold text-sm tracking-wide uppercase text-white">
            Passly
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-xs font-mono text-gray-400 shrink-0">
          <Link href="#features" className="hover:text-white transition-colors">
            FEATURES
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            PRICING
          </Link>
        </nav>
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link
            href="/signin"
            className="text-xs font-mono hover:underline text-gray-300 hidden sm:block whitespace-nowrap"
          >
            LOGIN 
          </Link>
          <Link
            href="/signup"
            className="text-xs bg-white text-black px-3 py-1.5 rounded-sm font-medium hover:bg-gray-200 transition-colors flex items-center whitespace-nowrap"
          >
            GET STARTED
            <span className="material-icons text-[10px] ml-1">north_east</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
