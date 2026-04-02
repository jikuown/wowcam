import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ShapeVariants from "@/components/ShapeVariants";
import BentoFeatures from "@/components/BentoFeatures";
import ColorToggle from "@/components/ColorToggle";
import VideoComparison from "@/components/VideoComparison";
import Specs from "@/components/Specs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-white text-black">
        <Navbar />
        <Hero />
        <ScrollReveal />
        <ShapeVariants />
        <BentoFeatures />
        <ColorToggle />
        <VideoComparison />
        <Specs />
        <Testimonials />
        <Gallery />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
