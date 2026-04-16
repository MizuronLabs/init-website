import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ProblemBar from "@/components/sections/ProblemBar";
import Services from "@/components/sections/Services";
import CostOfFailure from "@/components/sections/CostOfFailure";
import HowItWorks from "@/components/sections/HowItWorks";
import Proof from "@/components/sections/Proof";
import Categories from "@/components/sections/Categories";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <ProblemBar />
        <Services />
        <CostOfFailure />
        <HowItWorks />
        <Proof />
        <Categories />
        <About />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
