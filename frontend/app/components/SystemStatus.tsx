export default function SystemStatus() {
  return (
    <section className="py-8 sm:py-10 md:py-12 relative">
      <div className="relative z-10 bg-[#181818] border border-[#2a2a2a] p-5 sm:p-6 md:p-8 rounded-lg overflow-hidden min-w-0 max-w-2xl">
        <div className="ascii-overlay absolute inset-0 z-0 rounded-lg" aria-hidden />
        <div className="relative z-10">
          <div className="absolute top-0 right-0 p-2 opacity-50">
            <span className="material-icons text-gray-500 text-sm">lock</span>
          </div>
          <div className="flex items-center justify-between mb-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
            <span className="font-mono text-[10px] text-gray-500 uppercase">
              System Active
            </span>
          </div>
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center gap-4 border-b border-[#2a2a2a] pb-2">
              <span className="text-gray-500 shrink-0">Encryption</span>
              <span className="text-white">AES-256</span>
            </div>
            <div className="flex justify-between items-center gap-4 border-b border-[#2a2a2a] pb-2">
              <span className="text-gray-500 shrink-0">Master Pass</span>
              <span className="text-white">••••••••••••</span>
            </div>
            <div className="flex justify-between items-center gap-4">
              <span className="text-gray-500 shrink-0">Vault Status</span>
              <span className="text-green-400 shrink-0">LOCKED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
