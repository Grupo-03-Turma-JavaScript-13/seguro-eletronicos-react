/* =============================================================
   RiverGuard — Home Page
   Design: Shield Protocol (Premium SaaS Dark + Military Tech)
   Background: #0F172A | Primary: #3B82F6 | Font: Outfit
   Sections: Navbar, Hero, Problem, Solution, HowItWorks,
             Plans, Roadmap, CTA + Footer
   ============================================================= */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <RoadmapSection />
      <TestimonialsSection />
      <ContactFormSection />
      <CtaSection />
    </div>
  );
}
