import { lazy, Suspense } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ProblemBar from "@/components/sections/ProblemBar";
import Services from "@/components/sections/Services";

const CostOfFailure = lazy(() => import("@/components/sections/CostOfFailure"));
const HowItWorks = lazy(() => import("@/components/sections/HowItWorks"));
const Proof = lazy(() => import("@/components/sections/Proof"));
const Categories = lazy(() => import("@/components/sections/Categories"));
const About = lazy(() => import("@/components/sections/About"));
const FAQ = lazy(() => import("@/components/sections/FAQ"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const FinalCTA = lazy(() => import("@/components/sections/FinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));

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
        <Suspense fallback={null}>
          <CostOfFailure />
          <HowItWorks />
          <Proof />
          <Categories />
          <About />
          <FAQ />
          <Contact />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
