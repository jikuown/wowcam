import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ProductOverview from "@/components/ProductOverview";
import FeatureSections from "@/components/FeatureSections";
import VideoComparison from "@/components/VideoComparison";
import UseCases from "@/components/UseCases";
import Gallery from "@/components/Gallery";
import Specs from "@/components/Specs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero />
      <ScrollReveal />
      <ProductOverview />
      <FeatureSections />
      <VideoComparison />
      <UseCases />
      <Gallery />
      <Specs />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
