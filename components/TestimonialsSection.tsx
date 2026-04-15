"use client";

import { testimonials } from "@/lib/testimonialsData";
import TestimonialCard from "./TestimonialCard";
import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";

export default function TestimonialsSection() {
  // Show only the first 3 testimonials on the home page
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-stone-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <AnimateOnScroll animation="fade-right">
            <span className="text-primary font-label text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block">
              Traveler Stories
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-[#e5e2e1] tracking-tight">
              What they say <br /> <span className="text-primary">about us</span>
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-left" delay={0.2}>
            <Link 
              href="/testimonials"
              className="inline-flex items-center gap-2 text-[#e5e2e1] hover:text-primary transition-colors font-bold text-sm uppercase tracking-widest border-b border-primary/30 pb-1"
            >
              View all stories
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {featuredTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
