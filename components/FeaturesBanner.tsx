const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-white/80 fill-none" strokeWidth={2}>
        <path d="M9 12h6M9 16h6M9 8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    text: "Clean, maintainable code with comprehensive documentation",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-white/80 fill-none" strokeWidth={2}>
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    text: "Responsive design and seamless user experiences",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-white/80 fill-none" strokeWidth={2}>
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
    text: "Performance optimization and scalable architecture",
  },
];

export default function FeaturesBanner() {
  return (
    <section className="bg-dark-navy px-10 py-30 rounded-bl-[40px] rounded-br-[40px]">
      <div className="mx-auto max-w-4/5">
        <h2 className="font-serif text-[26px] text-white mb-6 border-b border-cream pb-6">
          <span className="text-gold">datgeek.manu</span> delivers:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <p className="text-[20px] text-white/75 leading-normal">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
