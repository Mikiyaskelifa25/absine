"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formState);
    alert("Thank you for your message! We will get back to you soon.");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-surface py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <AnimateOnScroll animation="fade-right">
          <div>
            <span className="text-primary font-label uppercase tracking-[0.4em] mb-6 block text-xs">
              Contact Us
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight mb-8">
              Have questions? <br />
              <span className="italic font-normal">We&apos;re here to help.</span>
            </h2>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed mb-12 max-w-md">
              Whether you need more details about a destination or have a specific question about our services, feel free to reach out.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl text-on-surface mb-1">Email Us</h4>
                  <p className="text-on-surface-variant font-body">hello@aventure-abyssinie.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl text-on-surface mb-1">Call Us</h4>
                  <p className="text-on-surface-variant font-body">+251 91 160 3027</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-left" delay={0.2}>
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-surface/50 ml-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-on-surface focus:border-primary/50 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-surface/50 ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-on-surface focus:border-primary/50 transition-all outline-none"
                  placeholder="hello@example.com"
                />
              </div>
              <div className="space-y-3">
                <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-surface/50 ml-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-on-surface focus:border-primary/50 transition-all outline-none resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-bold py-5 rounded-2xl transition-all active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
