import Link from "next/link";

type AuthPageShellProps = {
  children: React.ReactNode;
  /** Optional top bar (e.g. time on mobile) */
  topBar?: React.ReactNode;
};

export default function AuthPageShell({ children, topBar }: AuthPageShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      {topBar && (
        <div className="h-12 w-full bg-transparent sticky top-0 z-20 flex items-end justify-center pb-2 lg:hidden">
          {topBar}
        </div>
      )}
      <main className="flex-1 px-4 sm:px-6 pt-6 sm:pt-8 pb-10 bg-grid-pattern relative flex flex-col items-center justify-center">
        {/* Soft glow behind form */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-64 bg-white/[0.06] blur-[80px] rounded-full pointer-events-none z-0"
          aria-hidden
        />
        <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col min-h-0">
          {children}
        </div>
      </main>
      <div
        className="h-6 w-full bg-transparent pointer-events-none lg:hidden"
        aria-hidden
      />
    </div>
  );
}
