"use client";

import { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const destinations = ["Danakil Depression", "Omo Valley", "Lalibela", "Simien Mountains", "Bale Mountains", "Historical North"];
const tripTypes = ["Adventure", "Cultural", "Photography", "Trekking", "Family"];

export default function PlanTripPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    travelers: "1",
    selectedDestinations: [] as string[],
    selectedType: "",
    message: "",
  });

  const toggleDestination = (dest: string) => {
    setFormState(prev => ({
      ...prev,
      selectedDestinations: prev.selectedDestinations.includes(dest)
        ? prev.selectedDestinations.filter(d => d !== dest)
        : [...prev.selectedDestinations, dest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Trip Plan submitted:", formState);
    alert("Your trip request has been sent! Our experts will contact you shortly.");
    setFormState({ 
      name: "", 
      email: "", 
      travelers: "1", 
      selectedDestinations: [], 
      selectedType: "", 
      message: "" 
    });
  };

  return (
    <>
      <TopNavBar />
      <main className="min-h-screen pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column */}
          <AnimateOnScroll animation="fade-right">
            <div>
              <span className="text-primary font-label uppercase tracking-[0.4em] mb-6 block text-xs">
                Customized Travel
              </span>
              <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight mb-8 font-bold">
                Plan Your <br />
                <span className="italic font-normal text-primary text-4xl md:text-6xl">Abyssinian Story.</span>
              </h1>
              <p className="text-on-surface-variant font-body text-xl leading-relaxed mb-12 max-w-md">
                Tell us your vision, and we&apos;ll craft a seamless, authentic journey tailored exactly to your preferences.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50/80 dark:bg-white/5 border border-outline dark:border-white/5">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <p className="text-sm">Expertly curated by local specialists</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50/80 dark:bg-white/5 border border-outline dark:border-white/5">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <p className="text-sm">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Column: Form */}
          <AnimateOnScroll animation="fade-left" delay={0.2}>
            <div className="bg-white dark:bg-[#1a1a1a] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-outline dark:border-white/10 transition-colors">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface/40">Name</label>
                    <input
                      type="text" required value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-stone-50/80 dark:bg-white/5 border border-outline dark:border-white/10 rounded-xl px-5 py-4 text-on-surface focus:border-primary outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface/40">Email</label>
                    <input
                      type="email" required value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-stone-50/80 dark:bg-white/5 border border-outline dark:border-white/10 rounded-xl px-5 py-4 text-on-surface focus:border-primary outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface/40">Travelers</label>
                    <select
                      value={formState.travelers}
                      onChange={(e) => setFormState({...formState, travelers: e.target.value})}
                      className="w-full bg-stone-50/80 dark:bg-white/5 border border-outline dark:border-white/10 rounded-xl px-5 py-4 text-on-surface focus:border-primary outline-none appearance-none"
                    >
                      {[1,2,3,4,5,6,7,8,9, "10+"].map(n => (
                        <option key={n} value={n} className="bg-white dark:bg-stone-900 text-stone-900 dark:text-white">{n} {n === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface/40">Trip Style</label>
                    <div className="flex flex-wrap gap-2">
                      {tripTypes.map(type => (
                        <button
                          key={type} type="button"
                          onClick={() => setFormState({...formState, selectedType: type})}
                          className={`px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest border transition-all ${
                            formState.selectedType === type
                              ? "bg-primary border-primary text-on-primary font-bold"
                              : "bg-stone-50/80 dark:bg-white/5 border-outline dark:border-white/10 text-on-surface/60 hover:bg-stone-100 dark:hover:bg-white/10"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface/40">Destinations</label>
                  <div className="flex flex-wrap gap-2">
                    {destinations.map(dest => (
                      <button
                        key={dest} type="button"
                        onClick={() => toggleDestination(dest)}
                        className={`px-4 py-2 rounded-xl text-[10px] border transition-all ${
                          formState.selectedDestinations.includes(dest)
                            ? "bg-primary/20 border-primary text-primary"
                            : "bg-stone-50/80 dark:bg-white/5 border-outline dark:border-white/10 text-on-surface/70"
                        }`}
                      >
                        {dest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface/40">Additional Notes</label>
                  <textarea
                    rows={3} value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-stone-50/80 dark:bg-white/5 border border-outline dark:border-white/10 rounded-xl px-5 py-4 text-on-surface focus:border-primary outline-none resize-none"
                    placeholder="Tell us about your preferences..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  Request Itinerary
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </main>
      <Footer />
    </>
  );
}
