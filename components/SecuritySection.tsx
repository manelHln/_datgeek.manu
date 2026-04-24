export default function SecuritySection() {
  return (
    <section className="bg-cream px-10 pt-15 pb-20">
      <div className="mx-auto max-w-[800px]">
        <span className="inline-block text-[11px] font-semibold tracking-[1px] text-primary-dark border border-[#ccc] rounded-full px-3 py-1 mb-4">
          Engineering Principles
        </span>
        <h2 className="font-serif text-4xl mb-2">
          Quality <span className="text-teal">by default</span>
        </h2>
        <p className="text-[20px] text-[#666] max-w-[420px] mb-7">
          Every project is built with security, performance, and maintainability
          as core priorities from day one.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[700px]">
          {/* Testing */}
          <div className="flex items-center gap-5 rounded-xl bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="w-15 h-15 bg-[#1a3a6b] rounded-full flex items-center justify-center text-white text-[9px] font-bold text-center leading-tight shrink-0">
              TEST
              <br />
              DRIVEN
            </div>
            <p className="text-xs text-[#555] leading-relaxed">
              Comprehensive unit, integration, and end-to-end testing for reliability.
            </p>
          </div>

          {/* Performance */}
          <div className="flex flex-col items-start gap-2 rounded-xl bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="flex gap-4 items-center">
              <span className="font-extrabold text-sm">⬡ Performance</span>
            </div>
            <p className="text-[11px] text-[#555] leading-relaxed">
              Optimized for speed and efficiency with monitoring and profiling.
            </p>
          </div>

          {/* Security */}
          <div className="flex items-center gap-5 rounded-xl bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="min-w-[80px] text-center">
              <span className="text-[28px] font-black text-[#ff9900]">🔒</span>
            </div>
            <p className="text-[11px] text-[#555] leading-relaxed">
              Security best practices including input validation, authentication,
              and encrypted data handling.
            </p>
          </div>

          {/* Documentation */}
          <div className="flex items-center gap-5 rounded-xl bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="w-15 h-15 border-3 border-[#1a3a6b] rounded-full flex items-center justify-center text-[#1a3a6b] text-[10px] font-extrabold text-center leading-[1.3] shrink-0">
              DOCS
            </div>
            <p className="text-[11px] text-[#555] leading-relaxed">
              Clear documentation and clean code for easy maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
