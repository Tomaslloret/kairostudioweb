import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import KairosSection from "@/components/sections/KairosSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import DemosPreview from "@/components/sections/DemosPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import ResultsSection from "@/components/sections/ResultsSection";
import DemoFormSection from "@/components/sections/DemoFormSection";
import AboutPreview from "@/components/sections/AboutPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <KairosSection />
      <ProblemSolutionSection />
      <ServicesPreview />
      <DemosPreview />
      <ProcessSection />
      <ResultsSection />
      <DemoFormSection />
      <AboutPreview />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
