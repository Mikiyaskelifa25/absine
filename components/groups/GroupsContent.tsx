"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimateOnScroll from "../AnimateOnScroll";
import { trips } from "@/lib/tripsData";

const tripFilters = ["Group Trip", "Daily", "Private Trip", "Tailor-made"];

export default function GroupsContent() {
  const [activeFilter, setActiveFilter] = useState("Group Trip");

  return (
    <section className="bg-surface py-12 md:py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumbs & Title */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant/60 uppercase tracking-widest mb-5 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span>Destinations</span>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-primary">Ethiopia</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-2 font-bold">Groups Circuits</h2>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <span className="text-sm text-on-surface-variant font-label">4.8 (12 reviews) · 10 Destinations</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined text-lg">share</span>
              </button>
              <button className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined text-lg">bookmark_border</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filters — horizontally scrollable on mobile */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-outline-variant/30 mb-10 -mx-4 px-4 md:mx-0 md:px-0">
          {tripFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 px-6 py-4 text-sm font-label uppercase tracking-widest transition-all relative whitespace-nowrap ${
                activeFilter === filter ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Trip Listings */}
        <div className="space-y-6 mb-20">
          {trips.map((trip) => (
            <AnimateOnScroll key={trip.id} animation="fade-up">
              <Link
                href={`/groups/${trip.slug}`}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row group hover:bg-white/[0.08] hover:border-primary/20 transition-all duration-500 cursor-pointer block"
              >
                {/* Image collage */}
                <div className="md:w-[340px] md:shrink-0 h-[220px] md:h-auto relative grid grid-cols-3 grid-rows-2 gap-1 p-1 bg-surface-container">
                  <div className="col-span-2 row-span-2 relative overflow-hidden rounded-l-xl">
                    <Image
                      src={trip.images[0]}
                      alt={trip.title}
                      fill
                      sizes="(max-width: 768px) 60vw, 220px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-sm">
                    <Image src={trip.images[1]} alt={trip.title} fill sizes="110px" className="object-cover" />
                  </div>
                  <div className="relative overflow-hidden rounded-br-xl">
                    <Image src={trip.images[2]} alt={trip.title} fill sizes="110px" className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-label text-xs">+5</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-primary text-xs font-label uppercase tracking-widest">{trip.duration}</span>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="text-xs font-bold text-on-surface">{trip.rating}</span>
                          <span className="text-on-surface-variant text-xs">({trip.reviews})</span>
                        </div>
                      </div>
                      <span className="bg-primary/10 text-primary text-[10px] font-label uppercase tracking-widest px-2 py-1 rounded-full shrink-0">
                        {trip.groupSize}
                      </span>
                    </div>

                    <h3 className="font-headline text-xl md:text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                      {trip.title}
                    </h3>

                    <p className="text-on-surface-variant font-body text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                      {trip.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-5 mt-5 border-t border-white/10">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-7 h-7 rounded-full border-2 border-surface bg-surface-container relative overflow-hidden">
                          <Image
                            src={`/pic${(i % 6) + 1}.jpg`}
                            alt="traveller"
                            fill
                            sizes="28px"
                            className="object-cover"
                          />
                        </div>
                      ))}
                      <div className="w-7 h-7 rounded-full border-2 border-surface bg-primary flex items-center justify-center text-[9px] text-on-primary font-bold">+12</div>
                    </div>
                    <span className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-xs tracking-widest uppercase group-hover:scale-105 transition-transform shadow-lg shadow-primary/20 inline-block">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-2 space-y-14">

            {/* Experts */}
            <div>
              <h4 className="font-headline text-xl md:text-2xl text-on-surface mb-6 font-bold border-b border-primary/20 pb-4">Our Local Experts</h4>
              <div className="flex flex-col sm:flex-row items-start gap-5 bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border-4 border-surface-container">
                  <Image src="/aboutus.jpg" alt="Expert" fill sizes="80px" className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-lg text-on-surface mb-1">Teddy &amp; the Aventure Team</h5>
                  <p className="text-primary font-label text-xs uppercase tracking-widest mb-3">Ethiopia Specialists</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed italic">
                    &quot;We don&apos;t just guide you; we share our home and traditions with you. Every trail we walk has a story.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Info */}
            <div>
              <h4 className="font-headline text-xl md:text-2xl text-on-surface mb-6 font-bold border-b border-primary/20 pb-4">Practical Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: "language", title: "Language", text: "Amharic is official. English widely spoken in tourism." },
                  { icon: "payments", title: "Currency", text: "Ethiopian Birr (ETB). Cards accepted in major hotels." },
                  { icon: "wb_sunny", title: "Best Time", text: "October to March is dry and pleasant." },
                  { icon: "medical_services", title: "Health", text: "Yellow fever certificate recommended." },
                ].map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">{info.icon}</span>
                    </div>
                    <div>
                      <h6 className="text-on-surface font-bold text-sm mb-1">{info.title}</h6>
                      <p className="text-on-surface-variant/70 text-xs leading-relaxed">{info.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collections */}
            <div>
              <h4 className="font-headline text-xl md:text-2xl text-on-surface mb-6 font-bold border-b border-primary/20 pb-4">Our Collectors Ethiopia</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { image: "/pic1.jpg", title: "Historical Routes", tag: "Tradition" },
                  { image: "/pic2.JPG", title: "Lava & Deserts", tag: "Adventure" },
                  { image: "/pic4.jpg", title: "Tribal Cultures", tag: "Culture" },
                ].map((collection) => (
                  <div key={collection.title} className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      sizes="(max-width: 640px) 90vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 text-white">
                      <span className="text-[10px] uppercase tracking-widest text-primary block mb-1">{collection.tag}</span>
                      <h5 className="font-headline text-base font-bold">{collection.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 text-primary font-label text-xs uppercase tracking-widest flex items-center gap-2 group">
                View all collections
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white/[0.03] text-on-surface p-8 rounded-3xl relative overflow-hidden group border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
              <h4 className="font-headline text-xl mb-3 leading-tight text-on-surface">Tailor-made <br /><span className="italic font-normal">for you.</span></h4>
              <p className="text-on-surface-variant font-body text-sm mb-6 leading-relaxed">
                Don&apos;t find the perfect dates? Our specialists create a custom journey for you.
              </p>
              <button className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-bold text-sm tracking-widest uppercase hover:scale-[1.02] transition-all">
                Request a Quote
              </button>
            </div>

            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
              <h4 className="font-headline text-lg text-on-surface mb-5">Need help?</h4>
              <div className="space-y-5">
                <a href="tel:+251911603027" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors">
                  <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-sm text-primary">call</span>
                  </div>
                  <span className="text-sm font-label">+251 91 160 3027</span>
                </a>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-sm text-primary">chat</span>
                  </div>
                  <span className="text-sm font-label">Live Chat Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
