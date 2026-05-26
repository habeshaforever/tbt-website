import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CandidateShowcase } from "@/components/CandidateShowcase";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CandidateShowcase />
      <Services />
      <WhyUs />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
