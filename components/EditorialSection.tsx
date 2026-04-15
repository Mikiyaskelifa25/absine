import DestinationCard from "./DestinationCard";
import AnimateOnScroll from "./AnimateOnScroll";

const destinations = [
  {
    region: "Northern Ethiopia",
    title: "Simien Mountains",
    imageUrl: "/pic1.jpg",
    imageAlt: "The jagged peaks and deep valleys of the Simien Mountains National Park",
    href: "/groups/highlands-deserts-traditions",
    elevated: false,
  },
  {
    region: "Afar Region",
    title: "Danakil Depression",
    imageUrl: "/pic2.JPG",
    imageAlt: "The colorful hydrothermal fields of Dallol in the Danakil Depression",
    href: "/groups/salt-caravans-danakil",
    elevated: true,
  },
  {
    region: "Amhara Region",
    title: "Rock-Hewn Churches",
    imageUrl: "/pic3.JPG",
    imageAlt: "The historic monolithic churches of Lalibela carved from solid rock",
    href: "/groups/highlands-deserts-traditions",
    elevated: false,
  },
  {
    region: "Southern Ethiopia",
    title: "Omo Valley",
    imageUrl: "/pic4.jpg",
    imageAlt: "Cultural landscape and traditional villages in the Omo Valley",
    href: "/groups/omo-valley-southern-tribes",
    elevated: false,
  },
  {
    region: "Gonder",
    title: "Fasil Ghebbi",
    imageUrl: "/pic5.JPG",
    imageAlt: "The royal enclosure and castles of Emperor Fasilides in Gondar",
    href: "/groups/highlands-deserts-traditions",
    elevated: true,
  },
  {
    region: "Bale Mountains",
    title: "Sanetti Plateau",
    imageUrl: "/pic6.jpg",
    imageAlt: "The unique alpine flora and endemic wildlife of the Bale Mountains",
    href: "/groups",
    elevated: false,
  },
];

export default function EditorialSection() {
  return (
    <section id="destinations" className="py-32 px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <AnimateOnScroll animation="reveal-3d">
              <span className="text-primary font-label uppercase tracking-[0.4em] mb-6 block text-xs">
                Featured Destinations
              </span>
            </AnimateOnScroll>
          </div>
          <div className="md:col-span-5 pb-2">
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <AnimateOnScroll 
              key={dest.title} 
              animation="scale-reveal" 
              delay={index * 0.15}
            >
              <DestinationCard
                region={dest.region}
                title={dest.title}
                imageUrl={dest.imageUrl}
                imageAlt={dest.imageAlt}
                href={dest.href}
                elevated={dest.elevated}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
