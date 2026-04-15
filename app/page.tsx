import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EditorialSection from "@/components/EditorialSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <EditorialSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
