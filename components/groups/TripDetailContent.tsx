"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Trip } from "@/lib/tripsData";
import AnimateOnScroll from "../AnimateOnScroll";

const experienceIcons = [
  { icon: "landscape", label: "Landscapes" },
  { icon: "temple_buddhist", label: "Heritage" },
  { icon: "nature_people", label: "Culture" },
  { icon: "directions_walk", label: "Trekking" },
  { icon: "photo_camera", label: "Photography" },
  { icon: "restaurant", label: "Cuisine" },
];

const availabilityColors: Record<string, string> = {
  available: "text-emerald-400 bg-emerald-400/10",
  limited: "text-amber-400 bg-amber-400/10",
  "sold-out": "text-red-400/60 bg-red-400/10",
};
const availabilityLabels: Record<string, string> = {
  available: "Available",
  limited: "Limited places",
  "sold-out": "Sold out",
};

export default function TripDetailContent({ trip }: { trip: Trip }) {
  const [activeImage, setActiveImage] = useState(0);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[45vh] md:h-[55vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src={trip.heroImage}
          alt={trip.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-[#131313]" />

        {/* Breadcrumb */}
        <div className="absolute top-28 left-6 md:left-12 flex items-center gap-2 text-white/70 text-xs uppercase tracking-widest">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <Link href="/groups" className="hover:text-primary transition-colors">Groups</Link>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-primary">Ethiopia</span>
        </div>
      </section>

      {/* ─── Main Layout ─── */}
      <section className="bg-surface px-4 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

            {/* ── Left / Main Column ── */}
            <div className="lg:col-span-2 space-y-16">

              {/* Title block */}
              <div className="-mt-20 relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="bg-primary/20 text-primary font-label text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                    {trip.region}
                  </span>
                  <span className="text-on-surface-variant/60 text-xs">•</span>
                  <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest">{trip.duration}</span>
                  <span className="text-on-surface-variant/60 text-xs">•</span>
                  <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest">{trip.groupSize} people</span>
                  <span className="text-on-surface-variant/60 text-xs">•</span>
                  <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest">{trip.difficulty}</span>
                </div>

                <h1 className="font-headline text-3xl md:text-4xl xl:text-5xl text-on-surface leading-tight mb-6 max-w-3xl">
                  {trip.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`material-symbols-outlined text-sm ${i < Math.floor(trip.rating) ? "text-primary" : "text-on-surface-variant/20"}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                    <span className="text-on-surface font-bold text-sm ml-1">{trip.rating}</span>
                    <span className="text-on-surface-variant text-sm">({trip.reviews} reviews)</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all">
                      <span className="material-symbols-outlined text-lg">share</span>
                    </button>
                    <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all">
                      <span className="material-symbols-outlined text-lg">bookmark_border</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Image gallery */}
              <AnimateOnScroll animation="fade-up">
                <div className="grid grid-cols-4 grid-rows-2 gap-1.5 h-[240px] md:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden">
                  <div className="col-span-3 row-span-2 relative overflow-hidden cursor-pointer group">
                    <Image
                      src={trip.images[activeImage]}
                      alt={trip.title}
                      fill
                      sizes="(max-width: 1024px) 75vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {trip.images.slice(0, 2).map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative overflow-hidden cursor-pointer group ${i === 0 ? "rounded-tr-2xl" : "rounded-br-2xl"}`}
                    >
                      <Image
                        src={img}
                        alt={`photo ${i + 1}`}
                        fill
                        sizes="25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {i === 1 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-label text-xs uppercase tracking-widest">+More</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Expert block */}
              <AnimateOnScroll animation="fade-up">
                <div className="flex items-start gap-5 p-5 md:p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0 border-2 border-primary/40">
                    <Image src="/aboutus.jpg" alt="Guide" fill sizes="56px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-primary font-label text-[10px] uppercase tracking-widest mb-1">Your specialist</p>
                    <h4 className="font-headline text-lg text-on-surface mb-1">Teddy &amp; the Aventure Team</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed italic max-w-xl">
                      &quot;This circuit is one of my absolute favourites — every journey reveals something new. I will be with you every step of the way.&quot;
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Description */}
              <AnimateOnScroll animation="fade-up">
                <div>
                  <h2 className="font-headline text-2xl text-on-surface mb-5 border-b border-primary/20 pb-4">About this trip</h2>
                  <p className="text-on-surface-variant font-body text-base leading-loose">{trip.longDescription}</p>
                </div>
              </AnimateOnScroll>

              {/* Highlights */}
              <AnimateOnScroll animation="fade-up">
                <div>
                  <h2 className="font-headline text-2xl text-on-surface mb-6 border-b border-primary/20 pb-4">Trip highlights</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {trip.highlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">check_circle</span>
                        <span className="text-on-surface-variant text-sm leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* ─── Modern Timeline Itinerary ─── */}
              <AnimateOnScroll animation="fade-up">
                <div>
                  <h2 className="font-headline text-2xl text-on-surface mb-8 border-b border-primary/20 pb-4">
                    Day-by-day schedule
                  </h2>

                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

                    <div className="space-y-3">
                      {trip.itinerary.map((day, index) => {
                        const isOpen = expandedDay === day.day;
                        const isLast = index === trip.itinerary.length - 1;
                        return (
                          <div key={day.day} className="relative pl-14">
                            {/* Day circle */}
                            <button
                              onClick={() => setExpandedDay(isOpen ? null : day.day)}
                              className="absolute left-0 top-3 w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 z-10 border-2 focus:outline-none"
                              style={{
                                background: isOpen ? "var(--color-primary, #ecbe8d)" : "rgba(255,255,255,0.04)",
                                borderColor: isOpen ? "var(--color-primary, #ecbe8d)" : "rgba(255,255,255,0.12)",
                              }}
                            >
                              <span
                                className={`font-bold text-xs transition-colors ${isOpen ? "text-[#131313]" : "text-on-surface-variant"}`}
                              >
                                {day.day < 10 ? `0${day.day}` : day.day}
                              </span>
                            </button>

                            {/* Card */}
                            <div
                              className={`rounded-2xl border transition-all duration-400 overflow-hidden ${
                                isOpen
                                  ? "border-primary/30 bg-white/[0.06]"
                                  : "border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20"
                              }`}
                            >
                              {/* Header (always visible) */}
                              <button
                                onClick={() => setExpandedDay(isOpen ? null : day.day)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                              >
                                <div className="flex-1 min-w-0">
                                  <p className="text-primary font-label text-[10px] uppercase tracking-widest mb-0.5">
                                    Day {day.day}
                                  </p>
                                  <p className="font-headline text-on-surface text-base leading-snug truncate">
                                    {day.title}
                                  </p>
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                  <div className="hidden sm:flex items-center gap-1.5 text-on-surface-variant/50 text-xs">
                                    <span className="material-symbols-outlined text-sm">hotel</span>
                                    <span className="font-label">{day.overnight}</span>
                                  </div>
                                  <span
                                    className={`material-symbols-outlined text-on-surface-variant text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                  >
                                    expand_more
                                  </span>
                                </div>
                              </button>

                              {/* Expanded body */}
                              {isOpen && (
                                <div className="px-6 pb-6 border-t border-white/[0.06]">
                                  <p className="text-on-surface-variant text-sm leading-relaxed mt-4 mb-5">
                                    {day.description}
                                  </p>
                                  <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-label">
                                      <span className="material-symbols-outlined text-sm">hotel</span>
                                      {day.overnight}
                                    </div>
                                    {!isLast && (
                                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-on-surface-variant text-xs font-label">
                                        <span className="material-symbols-outlined text-sm">arrow_downward</span>
                                        Continues to Day {day.day + 1}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Departure dates (no prices) */}
              <AnimateOnScroll animation="fade-up">
                <div>
                  <h2 className="font-headline text-2xl text-on-surface mb-6 border-b border-primary/20 pb-4">Departure dates</h2>
                  <div className="space-y-3">
                    {trip.departureDates.map((date, i) => (
                      <div
                        key={i}
                        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl border transition-all ${
                          date.availability === "sold-out"
                            ? "border-white/5 bg-white/[0.02] opacity-40"
                            : "border-white/10 bg-white/5 hover:bg-white/[0.08] hover:border-primary/20"
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-6">
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/50 mb-0.5">Departure</p>
                            <p className="font-bold text-on-surface text-sm">{date.departure}</p>
                          </div>
                          <div className="hidden sm:block w-px h-7 bg-white/10" />
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/50 mb-0.5">Return</p>
                            <p className="font-bold text-on-surface text-sm">{date.arrival}</p>
                          </div>
                          <div className="hidden sm:block w-px h-7 bg-white/10" />
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/50 mb-0.5">Status</p>
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${availabilityColors[date.availability]}`}
                            >
                              {availabilityLabels[date.availability]}
                            </span>
                          </div>
                        </div>
                        <button
                          disabled={date.availability === "sold-out"}
                          className={`px-7 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shrink-0 ${
                            date.availability === "sold-out"
                              ? "bg-surface-container text-on-surface-variant cursor-not-allowed"
                              : "bg-primary text-on-primary hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                          }`}
                        >
                          {date.availability === "sold-out" ? "Full" : "Enquire"}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Included / Not included */}
              <AnimateOnScroll animation="fade-up">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-headline text-xl text-on-surface mb-5 border-b border-primary/20 pb-3">What&apos;s included</h3>
                    <ul className="space-y-3">
                      {trip.included.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-emerald-400 text-lg shrink-0">check</span>
                          <span className="text-on-surface-variant text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl text-on-surface mb-5 border-b border-white/10 pb-3">Not included</h3>
                    <ul className="space-y-3">
                      {trip.notIncluded.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-red-400/70 text-lg shrink-0">close</span>
                          <span className="text-on-surface-variant text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* CTA Banner */}
              <AnimateOnScroll animation="fade-up">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2a1f14] to-[#3d2c1a] p-10 border border-primary/20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                      <h3 className="font-headline text-2xl text-on-surface mb-2">Want a tailor-made version?</h3>
                      <p className="text-on-surface-variant text-sm max-w-md">
                        Our specialists can customise dates, pacing, accommodation and add optional extensions just for you.
                      </p>
                    </div>
                    <button className="shrink-0 bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                      Request a Custom Quote
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* ── Right / Sidebar — visible on mobile at top, sticky on desktop ── */}
            <div className="block lg:hidden order-first">
              {/* Mobile compact booking card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`material-symbols-outlined text-sm ${i < Math.floor(trip.rating) ? "text-primary" : "text-white/10"}`} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="text-on-surface font-bold text-sm ml-1">{trip.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-on-surface-variant">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-sm">calendar_month</span>{trip.duration}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-sm">group</span>{trip.groupSize}</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
                  Enquire about this trip
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-28 space-y-6">

                {/* Trip info card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`material-symbols-outlined text-sm ${i < Math.floor(trip.rating) ? "text-primary" : "text-white/10"}`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <span className="text-on-surface font-bold text-sm">{trip.rating}</span>
                    <span className="text-on-surface-variant text-xs">({trip.reviews})</span>
                  </div>

                  <div className="space-y-3 mb-7 text-sm">
                    {[
                      { icon: "calendar_month", label: "Duration", value: trip.duration },
                      { icon: "group", label: "Group size", value: `${trip.groupSize} people` },
                      { icon: "terrain", label: "Difficulty", value: trip.difficulty },
                      { icon: "location_on", label: "Region", value: trip.region },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                        <div className="flex items-center gap-2 text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-base">{row.icon}</span>
                          {row.label}
                        </div>
                        <span className="text-on-surface font-medium text-right max-w-[55%] text-sm">{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 mb-3">
                    Enquire about this trip
                  </button>
                  <button className="w-full bg-white/5 text-on-surface border border-white/10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
                    Ask a question
                  </button>
                </div>

                {/* Contact mini */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="font-headline text-on-surface text-lg mb-4">Need expert advice?</h4>
                  <div className="space-y-4">
                    <a href="tel:+251911603027" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors">
                      <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-sm">call</span>
                      </div>
                      <span className="text-sm font-label">+251 91 160 3027</span>
                    </a>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-sm">chat</span>
                      </div>
                      <span className="text-sm font-label">Live Chat available Mon–Sat</span>
                    </div>
                  </div>
                </div>

                {/* Journey facts */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="font-headline text-on-surface text-lg mb-4">Journey facts</h4>
                  <div className="space-y-4">
                    {[
                      { icon: "language", label: "Language", value: "Amharic / English" },
                      { icon: "wb_sunny", label: "Best time", value: "Oct–Mar" },
                      { icon: "thermostat", label: "Climate", value: "Varies by region" },
                      { icon: "vaccines", label: "Vaccines", value: "Yellow fever req." },
                    ].map((fact) => (
                      <div key={fact.label} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary text-sm">{fact.icon}</span>
                        </div>
                        <div>
                          <p className="text-on-surface text-xs font-bold">{fact.label}</p>
                          <p className="text-on-surface-variant text-xs">{fact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience icons strip */}
          <AnimateOnScroll animation="fade-up">
            <div className="mt-24 pt-16 border-t border-white/10">
              <h3 className="font-headline text-2xl text-on-surface mb-10 text-center">What you&apos;ll experience</h3>
              <div className="flex flex-wrap justify-center gap-10">
                {experienceIcons.map((h) => (
                  <div key={h.label} className="flex flex-col items-center gap-3 text-on-surface-variant hover:text-primary transition-colors cursor-default group">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                      <span className="material-symbols-outlined text-2xl">{h.icon}</span>
                    </div>
                    <span className="font-label text-[10px] uppercase tracking-widest">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* You may also like */}
          <AnimateOnScroll animation="fade-up">
            <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-white/10">
              <h3 className="font-headline text-xl md:text-2xl text-on-surface mb-8 md:mb-10">You may also like</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {["/pic1.jpg", "/pic4.jpg", "/pic6.jpg"].map((img, i) => (
                  <Link
                    href="/groups"
                    key={i}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden block"
                  >
                    <Image src={img} alt="Related trip" fill sizes="(max-width: 640px) 90vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-primary font-label text-[10px] uppercase tracking-widest mb-1">Ethiopia</p>
                      <p className="text-on-surface font-headline text-sm">Explore more trips</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
