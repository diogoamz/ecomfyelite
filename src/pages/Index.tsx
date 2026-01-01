import HeroSection from "@/components/landing/HeroSection";
import TargetAudienceSection from "@/components/landing/TargetAudienceSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import IncludedSection from "@/components/landing/IncludedSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import MentorSection from "@/components/landing/MentorSection";
import InvestmentSection from "@/components/landing/InvestmentSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ApplicationForm from "@/components/landing/ApplicationForm";
import Footer from "@/components/landing/Footer";
import StarDecoration from "@/components/landing/StarDecoration";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Star decorations */}
      <StarDecoration />
      
      <main>
        <HeroSection />
        <TargetAudienceSection />
        <ProblemSection />
        <SolutionSection />
        <IncludedSection />
        <DifferentialsSection />
        <MentorSection />
        <InvestmentSection />
        <ProcessSection />
        <ApplicationForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
