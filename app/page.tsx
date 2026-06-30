import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PaydaySection from "@/components/PaydaySection";
import CreatorsSection from "@/components/CreatorsSection";
import StorySection from "@/components/StorySection";
import FaqSection from "@/components/FaqSection";
import FooterCta from "@/components/FooterCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PaydaySection />
        <CreatorsSection />
        <StorySection />
        <FaqSection />
        <FooterCta />
      </main>
      <Footer />
    </>
  );
}
