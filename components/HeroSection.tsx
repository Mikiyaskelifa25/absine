import Image from "next/image";
import Link from "next/link";

const filterChips = [
  "Group",
  "Family",
  "Independent",
];

export default function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Silhouette of a person with a horn at sunset"
          className="w-full h-full object-cover blur-[3px] scale-105"
          fill
          priority
          src="/back.png"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content Canvas */}
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center">
        <h1
          className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface mb-12 tracking-tight leading-tight font-bold"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
        >
          Make every journey <br />
          <span className="italic font-normal">an adventure</span>
        </h1>

        {/* Search Bar (Glassmorphism) */}
        <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-2 mb-10 flex items-center shadow-2xl">
          <div className="pl-6 pr-4">
            <span className="material-symbols-outlined text-on-surface/60">
              search
            </span>
          </div>
          <input
            className="bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface/50 w-full py-4 text-lg"
            placeholder="Search for your next adventure"
            type="text"
          />
          <button className="bg-primary text-on-primary font-bold px-8 py-4 rounded-full mr-1 hover:scale-95 transition-transform duration-300">
            Explorer
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {filterChips.map((chip) =>
            chip === "Group" ? (
              <Link
                key={chip}
                href="/groups"
                className="px-6 py-2 rounded-full border border-outline-variant/30 bg-surface/20 backdrop-blur-sm text-on-surface hover:bg-surface-bright transition-all duration-300 font-label text-sm uppercase tracking-widest cursor-pointer"
              >
                {chip}
              </Link>
            ) : (
              <button
                key={chip}
                className="px-6 py-2 rounded-full border border-outline-variant/30 bg-surface/20 backdrop-blur-sm text-on-surface hover:bg-surface-bright transition-all duration-300 font-label text-sm uppercase tracking-widest"
              >
                {chip}
              </button>
            )
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-60">
        <span className="font-label text-[10px] uppercase tracking-[0.3em]">
          Discover
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
}
