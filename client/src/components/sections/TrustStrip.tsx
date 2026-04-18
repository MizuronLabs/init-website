const frameworks = [
  "FSSAI Verified",
  "APEDA Registered",
  "Spices Board India",
  "MHLW (Japan)",
  "MFDS (Korea)",
  "HSA / SFA (Singapore)",
  "ASEAN Regulatory",
];

export default function TrustStrip() {
  return (
    <section
      className="bg-paper2 border-y border-paper3 py-[14px] overflow-hidden"
      aria-label="Regulatory frameworks we navigate"
    >
      <div className="container">
        <div className="flex items-center gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Label */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="text-[10px] tracking-[0.14em] uppercase text-gold font-medium whitespace-nowrap">
              Frameworks We Navigate
            </span>
            <span className="w-px h-3.5 bg-paper3 shrink-0" aria-hidden="true" />
          </div>

          {/* Items */}
          {frameworks.map((f, i) => (
            <div key={f} className="flex items-center gap-5 shrink-0">
              <span className="text-[11.5px] text-ink3 whitespace-nowrap">{f}</span>
              {i < frameworks.length - 1 && (
                <span className="w-[3px] h-[3px] rounded-full bg-paper3 shrink-0" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
