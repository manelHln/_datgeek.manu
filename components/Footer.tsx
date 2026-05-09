import Link from "next/link";

const linkColumns = [
  {
    title: "Menu",
    links: ["Home", "Services", "Projects", "Process", "About", "Contact"],
  },
  {
    title: "Services",
    links: ["Web Applications", "Backend Systems", "Data Engineering"],
  },
  {
    title: "Connect",
    links: ["LinkedIn", "X/Twitter", "GitHub"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-black/10 px-10 pt-10 pb-10">
      <div className="mx-auto grid max-w-[1000px] grid-cols-2 md:grid-cols-5 gap-6 mb-7"
        style={{ gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.5fr" }}
      >
        {/* Brand */}
        <div>
          <div className="flex items-center gap-1.5 text-lg font-extrabold text-text-dark mb-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#e8641a"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            datgeek.manu
          </div>
          <div className="flex gap-2.5 mt-3">
            <Link
              href="https://www.linkedin.com/in/manuholonou/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px] bg-[#e0e0d5] rounded-md flex items-center justify-center text-xs text-[#555] hover:bg-[#d0d0c5] transition-colors"
            >
              in
            </Link>
            <Link
              href="https://x.com/datgeek_manu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px] bg-[#e0e0d5] rounded-md flex items-center justify-center text-xs text-[#555] hover:bg-[#d0d0c5] transition-colors"
            >
              𝕏
            </Link>
          </div>
        </div>

        {/* Link Columns */}
        {linkColumns.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-bold uppercase tracking-[0.5px] text-text-dark mb-3">
              {col.title}
            </h4>
            {col.links.map((link) => (
              <Link
                key={link}
                href="#"
                className="block text-[20px] text-[#666] mb-1.5 hover:text-orange transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.5px] text-text-dark mb-3">
            Get in Touch
          </h4>
          <Link
            href="mailto:holonouemmanuel0@gmail.com"
            className="text-[20px] text-[#666] hover:text-orange transition-colors"
          >
            ✉ holonouemmanuel0@gmail.com
          </Link>
          <p className="text-xs text-primary-dark mt-2">
            Available for consulting and full-time opportunities.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto flex max-w-[1000px] items-center justify-between border-t border-black/7 pt-5 text-[11px] text-[#999]">
        <span>© Copyright 2026. datgeek.manu</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}
