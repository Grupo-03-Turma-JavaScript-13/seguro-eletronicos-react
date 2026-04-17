import ContactFormSection from "./ContactFormSection";
import CtaSection from "./CtaSection";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import ProblemSection from "./ProblemSection";
import RoadmapSection from "./RoadmapSection";
import SolutionSection from "./SolutionSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <RoadmapSection />
        <CtaSection />
        <ContactFormSection />
     </>
   );
}
