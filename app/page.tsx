import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import PinnedHero from "@/components/PinnedHero";
import ScrollReveal from "@/components/ScrollReveal";
import ShapeVariants from "@/components/ShapeVariants";
import BentoFeatures from "@/components/BentoFeatures";
import ColorToggle from "@/components/ColorToggle";
import VideoComparison from "@/components/VideoComparison";
import Specs from "@/components/Specs";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="bg-white text-black">
        <Navbar />
        <PinnedHero />
        <ScrollReveal />
        <ShapeVariants />
        <BentoFeatures />
        <ColorToggle />
        <VideoComparison />
        <Specs />
        <Gallery />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
