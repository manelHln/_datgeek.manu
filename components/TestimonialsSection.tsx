const testimonials = [
  {
    text: "\u201CThe team has been easy to work with and integrates into our current workflows and platform.\u201D",
    name: "Elyse Daintrec Lower",
    role: "CTO/VP \u2013 strategic business",
    initials: "EL",
    gradient: "from-[#a0c4ff] to-[#7b94d8]",
  },
  {
    text: "\u201CFirst and foremost I make sure I\u2019m always at a good rate and getting the best outcome for my customers.\u201D",
    name: "Simon Ormond",
    role: "Sales manager & consulting (Inc.)",
    initials: "SO",
    gradient: "from-[#ffa07a] to-[#e05c00]",
  },
  {
    text: "\u201CThis is the first AI offering I\u2019ve seen that actually keeps customers centered.\u201D",
    name: "Tracey Renaud",
    role: "Sales manager & consulting (Inc.)",
    initials: "TR",
    gradient: "from-[#90ee90] to-[#3a8a3a]",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-cream px-5 pt-5 pb-10">
      <div className="mx-auto flex max-w-[1100px] gap-4 overflow-hidden items-stretch">
        {testimonials.map((t) => (
          <div
            key={t.initials}
            className="flex-1 min-w-0 rounded-xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          >
            <div className="text-gold text-[13px] mb-2.5">★★★★★</div>
            <p className="text-[13px] text-[#444] leading-[1.55] mb-3.5">
              {t.text}
            </p>
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs text-white font-bold shrink-0`}
              >
                {t.initials}
              </div>
              <div>
                <strong className="text-xs block">{t.name}</strong>
                <span className="text-[11px] text-[#888]">{t.role}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Metric Card */}
        <div className="flex-[0.7] min-w-[180px] rounded-xl bg-dark-navy p-5 flex flex-col justify-end shadow-[0_2px_12px_rgba(0,0,0,0.1)]">
          <div className="text-xs text-white/50 mb-2">Contracts marked</div>
          <div className="text-[42px] font-extrabold text-white leading-none">
            10k+
          </div>
          <div className="text-xs text-white/60 mt-1">and growing daily</div>
        </div>
      </div>
    </section>
  );
}
