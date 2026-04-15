"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function AboutSection() {
  return (
    <section id="about-us" className="py-32 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Image with floating elements */}
          <AnimateOnScroll animation="zoom-in">
            <div className="relative">
              <div className="relative aspect-[3/2] md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
                <Image
                  src="/aboutus.jpg"
                  alt="Aventure en Abyssinie Team and Context"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 md:p-8 rounded-2xl shadow-2xl hidden sm:block z-10">
                <div className="text-on-primary font-headline text-3xl md:text-4xl font-bold mb-1">10+</div>
                <div className="text-on-primary/80 font-label text-[10px] uppercase tracking-widest leading-tight">
                  Years of <br /> Experience
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Column: Text Content */}
          <AnimateOnScroll animation="reveal-3d" delay={0.2}>
            <div className="space-y-8">
              <div>
                <span className="text-primary font-label uppercase tracking-[0.4em] mb-6 block text-xs">
                  Our Story
                </span>
                <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight">
                  Authentic travels, <br />
                  <span className="italic font-normal">deeply rooted in Ethiopia.</span>
                </h2>
              </div>

              <div className="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed">
                <p>
                  Founded with a passion for the hidden wonders of the Abyssinian highlands,
                  Aventure en Abyssinie is more than a travel agency. We are a bridge
                  between curious travelers and the ancient, vibrant soul of Ethiopia.
                </p>
                <p>
                  Our mission is to provide transformative experiences that respect
                  local communities and preserve the natural beauty of our diverse regions.
                  From the rugged Simien Mountains to the spiritual depths of Lalibela,
                  we craft journeys that tell a story.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
