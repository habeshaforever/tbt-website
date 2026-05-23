import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const insights = [
  {
    stat: "70%",
    headline: "The Average Cost Savings of a Nearshore Hire vs a US Hire",
    description:
      "A breakdown of where the savings come from and how to calculate your own.",
  },
  {
    stat: "2%",
    headline: "Why TBT's Turnover Rate Is 20x Better Than the Industry Average",
    description:
      "What we do differently and why it produces dramatically better retention.",
  },
  {
    stat: "72hrs",
    headline: "How We Present Qualified Candidates in 72 Hours or Less",
    description:
      "A look at the sourcing and vetting process that makes fast placement possible.",
  },
  {
    stat: "Top 1%",
    headline: "What It Actually Takes to Make the Top 1% of Latin American Remote Professionals",
    description:
      "The standards, the process, and what separates top performers from everyone else.",
  },
];

const Insights = () => {
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
              <span className="text-primary">Insights</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Data, trends, and analysis on Latin American talent and the future of nearshore
              staffing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insight Cards */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.headline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="text-4xl font-bold text-primary mb-4">{insight.stat}</div>
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                  {insight.headline}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{insight.description}</p>
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

export default Insights;
