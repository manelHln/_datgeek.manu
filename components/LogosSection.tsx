export default function LogosSection() {
  return (
    <section className="bg-cream px-10 pt-5 pb-7 text-center">
      <p className="text-xs text-[#888] mb-4">
        Trusted by the World&apos;s Best Businesses and Companies
      </p>
      <div className="flex items-center justify-center gap-9 flex-wrap">
        {/* Wolters Kluwer */}
        <div className="flex items-center gap-1.5 font-bold text-base text-[#333]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#006ab0">
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span className="text-[15px]">Wolters Kluwer</span>
        </div>

        {/* Science Exchange */}
        <div className="flex items-center gap-1.5 font-bold text-base text-[#333]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#00529b">
            <polygon points="12,2 22,20 2,20" />
          </svg>
          <span>Science Exchange</span>
        </div>

        {/* GrubHub */}
        <div className="flex items-center gap-1.5 text-[#e05c00] text-[22px] font-black">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#e05c00">
            <path d="M12 2C6 2 2 7 2 12s4 10 10 10 10-5 10-10S18 2 12 2z" />
          </svg>
          GrubHub
        </div>

        {/* Wonder */}
        <div className="text-text-dark text-2xl font-black tracking-tight">
          wonder
        </div>

        {/* AWS Rightsource */}
        <div className="flex items-center gap-1.5 text-[#e05c00]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#e05c00">
            <rect x="2" y="2" width="20" height="20" rx="4" />
          </svg>
          <span className="text-[13px] font-bold">AWS RIGHTSOURCE</span>
        </div>
      </div>
    </section>
  );
}
