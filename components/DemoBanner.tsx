import Link from "next/link";

export default function DemoBanner() {
  return (
    <div className="mx-auto max-w-[1100px] px-6 pb-15">
      <div className="flex items-center justify-between gap-7 rounded-2xl bg-dark-navy px-12 py-10">
        <div>
          <div className="text-[11px] text-white/50 mb-3">🐦</div>
          <h2 className="font-serif text-[28px] text-white leading-[1.3] mb-1.5">
            Don&apos;t take our word for it!
            <br />
            Book a demo to see the ease and
            <br />
            accuracy of <em className="not-italic text-gold">Agent Marko</em>{" "}
            live and
            <br />
            schedule a free, custom trial.
          </h2>
          <br />
          <Link
            href="#"
            className="inline-block rounded-full bg-orange px-7 py-3 text-[13px] font-semibold text-white hover:bg-orange/90 transition-colors"
          >
            Book a demo →
          </Link>
        </div>

        {/* Duck illustration */}
        <div className="shrink-0 opacity-80 text-center">
          <svg
            width="160"
            height="140"
            viewBox="0 0 160 140"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Large duck */}
            <ellipse cx="90" cy="90" rx="38" ry="26" fill="#e8641a" opacity="0.85" />
            <circle cx="78" cy="70" r="22" fill="#e8641a" opacity="0.85" />
            <ellipse cx="58" cy="74" rx="12" ry="7" fill="#f5a623" />
            <circle cx="70" cy="66" r="3" fill="#1a2744" />
            <ellipse
              cx="100"
              cy="108"
              rx="18"
              ry="6"
              fill="#f5a623"
              transform="rotate(-8 100 108)"
            />
            {/* Small duck */}
            <ellipse cx="32" cy="105" rx="18" ry="13" fill="#e8641a" opacity="0.6" />
            <circle cx="24" cy="94" r="11" fill="#e8641a" opacity="0.6" />
            <ellipse cx="14" cy="97" rx="7" ry="4" fill="#f5a623" opacity="0.7" />
            <circle cx="20" cy="91" r="2" fill="#1a2744" opacity="0.6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
