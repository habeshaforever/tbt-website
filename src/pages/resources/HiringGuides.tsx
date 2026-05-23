import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const guides = [
  {
    category: "Getting Started",
    headline: "The Complete Guide to Hiring Your First Remote Latin American Professional",
    description: "Everything from writing the job description to making the offer.",
  },
  {
    category: "Onboarding",
    headline: "How to Onboard a Remote Team Member in 30 Days",
    description: "A step by step onboarding checklist for remote hires.",
  },
  {
    category: "Management",
    headline: "Managing a Remote Latin American Team: What Works and What Does Not",
    description: "Practical advice from companies who have done it successfully.",
  },
  {
    category: "Cost Planning",
    headline: "How to Budget for a Nearshore Hire: A Full Cost Breakdown",
    description: "Understand exactly what you will pay and what you will save.",
  },
];

const HiringGuides = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hiring <span className="text-primary">Guides</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about hiring, onboarding, and managing remote Latin
              American professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.headline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4 self-start">
                  {guide.category}
                </span>
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                  {guide.headline}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{guide.description}</p>
                <span className="text-sm font-semibold text-primary/50 cursor-default self-start">
                  Coming Soon
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HiringGuides;
