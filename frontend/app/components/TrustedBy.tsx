const COMPANIES = [
  { name: "ACME", icon: "all_inclusive" },
  { name: "Vercel", icon: "api" },
  { name: "Zapier", icon: "bolt" },
  { name: "Github", icon: "code" },
  { name: "Sketch", icon: "diamond" },
  { name: "Linear", icon: "flutter_dash" },
];

export default function TrustedBy() {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-t border-[#2a2a2a]">
      <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <div className="font-mono text-[10px] text-gray-500 mb-2 tracking-widest">
            [ 03 / 05 ]
          </div>
          <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
            Trusted By
          </h3>
          <p className="text-sm text-gray-400 mt-1">More than 100+ Companies</p>
        </div>
        <span className="font-mono text-[10px] text-gray-500 shrink-0">
          TRUST FACTOR
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#2a2a2a] border border-[#2a2a2a] rounded overflow-hidden">
        {COMPANIES.map((company) => (
          <div
            key={company.name}
            className="bg-[#121212] p-5 sm:p-6 md:p-8 flex items-center justify-center min-h-[72px] sm:min-h-[88px] md:min-h-[96px] group"
          >
            <span className="text-base sm:text-lg md:text-xl font-bold text-gray-500 group-hover:text-white transition-colors flex items-center gap-2">
              <span className="material-icons text-base sm:text-lg">{company.icon}</span>
              {company.name}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed">
        Across industries—from tech and healthcare to finance and
        education—companies trust Passly with their most sensitive data.
      </p>
    </section>
  );
}
