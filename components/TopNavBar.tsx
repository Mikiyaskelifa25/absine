"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function TopNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Destinations", href: "/#destinations" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "About Us", href: "/#about-us" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 px-5 md:px-12 py-4 md:py-5 flex justify-between items-center ${
          isScrolled || menuOpen
            ? "bg-stone-950/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg md:text-xl font-bold font-headline text-[#e5e2e1] tracking-tighter uppercase hover:opacity-80 transition-opacity shrink-0"
        >
          Aventure en Abyssinie
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 font-headline tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="text-[#e5e2e1] hover:text-[#ecbe8d] transition-colors text-sm"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-5 text-[#e5e2e1]">
          <a
            href="tel:+251911603027"
            className="hidden lg:flex items-center gap-2 font-label text-xs tracking-widest hover:text-[#ecbe8d] transition-all"
          >
            <span className="material-symbols-outlined text-sm text-primary">phone</span>
            +251 91 160 3027
          </a>
          <Link
            href="/plan-trip"
            className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:scale-95 duration-200 ease-in-out"
          >
            Plan Trip
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden text-[#e5e2e1] w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-stone-950/95 border-l border-white/10 pt-20 px-8 flex flex-col gap-2 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-[#e5e2e1] font-headline text-xl border-b border-white/10 hover:text-[#ecbe8d] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+251911603027"
            className="mt-6 flex items-center gap-3 text-[#e5e2e1] hover:text-[#ecbe8d] text-sm font-label"
          >
            <span className="material-symbols-outlined text-lg text-primary">phone</span>
            +251 91 160 3027
          </a>
          <Link
            href="/plan-trip"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm text-center hover:bg-primary/90 transition-colors"
          >
            Plan Trip
          </Link>
        </div>
      </div>
    </>
  );
}
