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
          className="w-full h-full object-cover"
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
          className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface mb-12 tracking-tight leading-tight font-bold transition-colors"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
        >
          Make every journey <br />
          <span className="italic font-normal">an adventure</span>
        </h1>

        {/* Search Bar (Glassmorphism) */}
        <div className="w-full max-w-3xl bg-white/80 dark:bg-white/10 backdrop-blur-2xl border border-outline dark:border-white/10 rounded-full p-2 mb-10 flex items-center shadow-glass dark:shadow-2xl transition-all hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-premium">
          <div className="pl-6 pr-4">
            <span className="material-symbols-outlined text-stone-400 dark:text-white/40">
              search
            </span>
          </div>
          <input
            className="bg-transparent border-none focus:ring-0 text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-white/40 w-full py-4 text-lg"
            placeholder="Search for your next adventure"
            type="text"
          />
          <button className="bg-primary text-on-primary font-bold px-8 py-4 rounded-full mr-1 hover:scale-95 transition-all duration-300 shadow-lg shadow-primary/30">
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
                className="px-6 py-2.5 rounded-full border border-outline dark:border-white/10 bg-white/60 dark:bg-white/10 backdrop-blur-md text-stone-700 dark:text-on-surface hover:bg-white dark:hover:bg-white/20 hover:border-primary/50 dark:hover:border-primary/30 shadow-sm dark:shadow-none hover:shadow-premium transition-all duration-500 font-label text-xs uppercase tracking-[0.2em] cursor-pointer"
              >
                {chip}
              </Link>
            ) : (
              <button
                key={chip}
                className="px-6 py-2.5 rounded-full border border-stone-200/60 dark:border-white/10 bg-white/40 dark:bg-white/10 backdrop-blur-md text-stone-700 dark:text-on-surface hover:bg-white dark:hover:bg-white/20 hover:border-primary/40 dark:hover:border-primary/30 shadow-sm dark:shadow-none hover:shadow-premium transition-all duration-500 font-label text-xs uppercase tracking-[0.2em]"
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
