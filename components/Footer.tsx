import Link from "next/link";

const quickLinks = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Groups", href: "/groups" },
  { label: "About Us", href: "/#about-us" },
  { label: "Contact", href: "/#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Press Kit", href: "#" },
];

const socialLinks = [
  { 
    label: "Facebook", 
    href: "#",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
    )
  },
  { 
    label: "Instagram", 
    href: "#",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    )
  },
  { 
    label: "X", 
    href: "#",
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    )
  },
  { 
    label: "YouTube", 
    href: "#",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    )
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-200 dark:border-white/5 bg-surface pt-24 pb-12 px-6 md:px-12 relative z-10 overflow-hidden transition-colors">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mb-48" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-headline text-2xl text-on-surface uppercase tracking-tighter mb-6 block hover:opacity-80 transition-opacity">
              Aventure en Abyssinie
            </Link>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8 max-w-xs">
              Specialists in curated, authentic journeys across the Ethiopian highlands. From the Danakil to the Omo Valley, we make every journey an adventure.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all"
                  aria-label={social.label}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline text-lg text-on-surface mb-6 font-bold">Explore</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm uppercase tracking-widest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-headline text-lg text-on-surface mb-6 font-bold">Office</h4>
            <div className="text-on-surface-variant font-body text-sm space-y-4 mb-8">
              <p>Addis Ababa, Bole Road<br/>Ethiopia</p>
              <p>Mon – Sat: 9am – 6pm</p>
            </div>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant/60 hover:text-primary transition-colors font-label text-[10px] uppercase tracking-widest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact mini */}
          <div>
            <h4 className="font-headline text-lg text-on-surface mb-6 font-bold">Need help?</h4>
            <p className="text-on-surface-variant font-body text-sm mb-6">
              Our specialists are ready to help you plan your next adventure.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+251911603027"
                className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">call</span>
                </div>
                <span className="font-label text-sm font-bold tracking-widest">+251 91 160 3027</span>
              </a>
              <a
                href="https://wa.me/251911603027"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-green-500" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-label text-sm font-bold tracking-widest">WhatsApp</span>
                  <div className="mt-2 p-1 bg-white rounded-lg w-20 h-20">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://wa.me/251911603027" 
                      alt="WhatsApp QR Code" 
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </a>
            </div>
            <p className="text-on-surface-variant font-body text-[10px] uppercase tracking-widest opacity-60 mt-4">
              International & Local Support
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-stone-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant/40 font-body text-[10px] uppercase tracking-[0.3em]">
            © 2024 Aventure en Abyssinie. Member of Ethiopia Tourism Board.
          </p>
          <div className="flex gap-8 text-on-surface-variant/40 font-body text-[10px] uppercase tracking-widest">
            <a 
              href="https://t.me/Mikiyaskelifa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Made by Mikiyas Kelifa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
