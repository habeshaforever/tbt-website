import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Clock, 
  DollarSign, 
  GraduationCap, 
  Languages,
  Building2,
  TrendingUp,
  Users
} from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "Real-Time Collaboration",
    description: "When you send a message at 9 AM, you get an answer by 9:15. No overnight waits. No asynchronous chaos. Your nearshore team works on your schedule."
  },
  {
    icon: DollarSign,
    title: "Significant Cost Savings",
    description: "The same caliber of professional you'd hire in the U.S. at $70K costs $20K–$30K through a nearshore model. That's not a rounding error. That's a second team member."
  },
  {
    icon: Languages,
    title: "Bilingual Professionals",
    description: "Strong English proficiency is a baseline requirement in our vetting process. Our candidates write reports, run calls, and communicate with your clients without a translator."
  },
  {
    icon: GraduationCap,
    title: "Highly Educated Workforce",
    description: "South America produces hundreds of thousands of university graduates per year in engineering, finance, and technology. The talent pool is large. Our job is to find the best of it."
  },
  {
    icon: Globe,
    title: "Cultural Alignment",
    description: "Nearshore professionals grew up with the same media, work in the same software, and compete in the same global economy. They integrate without friction."
  },
  {
    icon: Building2,
    title: "World-Class Tech Hubs",
    description: "Latin American cities are home to some of the fastest-growing tech ecosystems in the world. Google, Microsoft, and Amazon have offices throughout the region. The talent is world-class."
  }
];

const comparisonData = [
  { factor: "Time Zone Overlap", nearshore: "Full overlap with U.S.", offshore: "Little to no overlap", domestic: "Full overlap" },
  { factor: "Cost Savings", nearshore: "50-70% savings", offshore: "60-70% savings", domestic: "Baseline cost" },
  { factor: "Communication", nearshore: "Real-time, fluent English", offshore: "Delayed, variable English", domestic: "Real-time" },
  { factor: "Cultural Fit", nearshore: "Strong alignment", offshore: "Significant differences", domestic: "Native understanding" },
  { factor: "Travel for Meetings", nearshore: "Same day possible", offshore: "20+ hours", domestic: "Varies" },
];

const WhyNearshore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-10 sm:pt-32 sm:pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
              Why Nearshore?
            </h1>
            <p className="text-base sm:text-xl text-primary-foreground/80">
              Offshore looks cheaper until you add up the time zone hell, the communication breakdowns, and the 18% annual churn. Domestic is great until you see the $80K salary. Nearshore is what you actually want.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Nearshore Advantage
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Most business owners discover nearshore after the offshore experiment fails. They learn the same lesson: the cost savings of outsourcing, the collaboration quality of an in-house team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-5 sm:p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <advantage.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Side-by-Side That Ends the Debate
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Every factor that actually matters when you're managing a real team — not just evaluating on paper.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold">Factor</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold">Nearshore</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold">Offshore</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold">Domestic</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr 
                      key={row.factor} 
                      className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}
                    >
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-foreground">{row.factor}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-primary font-medium">{row.nearshore}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-muted-foreground">{row.offshore}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-muted-foreground">{row.domestic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-5 sm:p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold text-primary mb-2">500K+</div>
              <p className="text-muted-foreground">
                University graduates annually across South America
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-5 sm:p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold text-primary mb-2">0-2 hrs</div>
              <p className="text-muted-foreground">
                Max time difference from U.S. time zones
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-5 sm:p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold text-primary mb-2">70%</div>
              <p className="text-muted-foreground">
                Cost savings vs. equivalent U.S. hire
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-hero rounded-3xl p-6 sm:p-12 md:p-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              The Skeptics Are Always the Ones Who Haven't Tried It Yet.
            </h2>
            <p className="text-base sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              One call. We'll show you the role cost, what the talent looks like, and how fast we can get started. No pitch deck. Just the numbers.
            </p>
            <Button
              variant="outline"
              size="xl"
              className="bg-white text-primary hover:bg-white/90 border-white"
              asChild
            >
              <Link to="/book">Book a Strategy Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyNearshore;
