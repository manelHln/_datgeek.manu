import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Markups", href: "#" },
  { label: "Team", href: "#" },
  { label: "Company", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-black/8">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 h-[52px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 text-base font-extrabold text-text-dark"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#e8641a"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
          Markups.ai
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-7 text-[13px] font-medium text-[#333]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#"
          className="rounded-full bg-orange px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-orange/90 transition-colors"
        >
          Book a demo
        </Link>
      </div>
    </nav>
  );
}
