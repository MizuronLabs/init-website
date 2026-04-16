/*
 * Design: Archival Intelligence
 * Thin horizontal strip with trust signals — regulatory frameworks we understand
 */

export default function TrustStrip() {
  const frameworks = [
    "FSSAI Verified",
    "APEDA Registered",
    "Spices Board India",
    "MHLW (Japan)",
    "MFDS (Korea)",
    "HSA / SFA (Singapore)",
    "ASEAN Regulatory",
  ];

  return (
    <section className="bg-paper2 border-y border-paper3 py-4 overflow-hidden" aria-label="Regulatory frameworks">
      <div className="container">
        <div className="flex items-center gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <span className="text-[10px] tracking-[0.12em] uppercase text-gold font-medium whitespace-nowrap shrink-0">
            Regulatory Frameworks We Navigate
          </span>
          <div className="w-px h-4 bg-paper3 shrink-0" />
          {frameworks.map((f) => (
            <span
              key={f}
              className="text-[11.5px] text-ink3 whitespace-nowrap shrink-0"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
