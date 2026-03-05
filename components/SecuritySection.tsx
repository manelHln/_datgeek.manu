export default function SecuritySection() {
  return (
    <section className="bg-cream px-10 pt-15 pb-20">
      <div className="mx-auto max-w-[800px]">
        <span className="inline-block text-[11px] font-semibold tracking-[1px] text-[#888] border border-[#ccc] rounded-full px-3 py-1 mb-4">
          Security
        </span>
        <h2 className="font-serif text-4xl mb-2">
          Secure <span className="text-teal">by design</span>
        </h2>
        <p className="text-[13px] text-[#666] max-w-[420px] mb-7">
          Proprietary client data is hosted in AWS and kept completely separate
          from other clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[700px]">
          {/* AICPA SOC */}
          <div className="flex items-center gap-5 rounded-xl bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="w-15 h-15 bg-[#1a3a6b] rounded-full flex items-center justify-center text-white text-[9px] font-bold text-center leading-tight shrink-0">
              AICPA
              <br />
              SOC
              <br />
              <span className="text-[7px]">TYPE 2</span>
            </div>
            <p className="text-xs text-[#555] leading-relaxed">
              Markups.ai is SOC 2 Type 2 certified.
            </p>
          </div>

          {/* OpenAI + Google */}
          <div className="flex flex-col items-start gap-2 rounded-xl bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="flex gap-4 items-center">
              <span className="font-extrabold text-sm">⬡ OpenAI</span>
              <span className="font-bold text-sm text-[#4285F4]">Google</span>
            </div>
            <p className="text-[11px] text-[#555] leading-relaxed">
              Markups.ai runs on Google&apos;s Gemini and OpenAI&apos;s GPT
              models. Gemini does not use your data to train the model.
            </p>
          </div>

          {/* AWS */}
          <div className="flex items-center gap-5 rounded-xl bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="min-w-[80px] text-center">
              <span className="text-[28px] font-black text-[#ff9900]">aws</span>
            </div>
            <p className="text-[11px] text-[#555] leading-relaxed">
              Proprietary client data is hosted in AWS and kept separate from
              other clients&apos; data.
            </p>
          </div>

          {/* TLS */}
          <div className="flex items-center gap-5 rounded-xl bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="w-15 h-15 border-3 border-[#1a3a6b] rounded-full flex items-center justify-center text-[#1a3a6b] text-[10px] font-extrabold text-center leading-[1.3] shrink-0">
              TLS
            </div>
            <p className="text-[11px] text-[#555] leading-relaxed">
              All email is TLS encrypted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
