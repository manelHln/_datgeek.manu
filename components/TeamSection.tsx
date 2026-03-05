import Link from "next/link";

const teamMembers = [
  { initials: "BP", name: "Brian Powers", role: "Chief Executive Officer", bg: "bg-gradient-to-br from-[#2c4a7c] to-[#1a2f55]" },
  { initials: "SS", name: "Sam Shelley", role: "Chief Strategy Officer", bg: "bg-gradient-to-br from-[#3d6b8c] to-[#2a4f6e]" },
  { initials: "DH", name: "Debbie Captain Henry", role: "Chief Revenue Officer", bg: "bg-gradient-to-br from-[#b5824a] to-[#8c6035]" },
  { initials: "GB", name: "Garry A. Berger", role: "Chief AI Advisor", bg: "bg-gradient-to-br from-[#e0c8b0] to-[#c8a87a]" },
  { initials: "CC", name: "Cassie Cam", role: "Development Engineer", bg: "bg-gradient-to-br from-[#607b9e] to-[#3a5580]" },
  { initials: "BB", name: "Ben Blachman", role: "Chief AI & ML Advisor", bg: "bg-gradient-to-br from-[#3d3535] to-[#241e1e]" },
];

export default function TeamSection() {
  return (
    <section className="bg-cream px-10 py-15">
      <div className="mx-auto max-w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Text – sticky on desktop */}
          <div className="md:sticky md:top-[52px] md:self-start pt-5">
            <span className="inline-block text-[11px] font-semibold tracking-[1px] text-orange border border-orange rounded-full px-3 py-1 mb-4 uppercase">
              Our Executive Team
            </span>
            <h2 className="font-serif text-[32px] max-w-[320px] leading-[1.25]">
              <em className="not-italic text-orange">
                Highly experienced executives,
              </em>{" "}
              leading a team of top AI engineers and lawyers
            </h2>
          </div>

          {/* Team Grid – scrolls naturally */}
          <div className="grid grid-cols-2 gap-5">
            {teamMembers.map((m) => (
              <div key={m.initials}>
                <div
                  className={`w-full aspect-square rounded-[10px] flex items-center justify-center text-4xl font-extrabold text-white/30 ${m.bg}`}
                >
                  {m.initials}
                </div>
                <Link
                  href="#"
                  className="text-[13px] text-orange font-semibold block mt-1.5 hover:underline"
                >
                  {m.name}
                </Link>
                <span className="text-[11px] text-[#888]">{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
