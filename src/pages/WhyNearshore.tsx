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
    description: "South American professionals work during U.S. business hours, so you get real-time communication and quick feedback without the delays of offshore teams."
  },
  {
    icon: DollarSign,
    title: "Significant Cost Savings",
    description: "Access highly skilled talent at 50-70% lower costs compared to U.S.-based employees, without compromising on quality or expertise."
  },
  {
    icon: Languages,
    title: "Bilingual Professionals",
    description: "Strong English proficiency is standard. Many professionals are natively bilingual, making communication natural and effective."
  },
  {
    icon: GraduationCap,
    title: "Highly Educated Workforce",
    description: "South America produces hundreds of thousands of university graduates annually, with strong programs in engineering, finance, and technology."
  },
  {
    icon: Globe,
    title: "Cultural Alignment",
    description: "Shared Western business culture means South American teams integrate smoothly with U.S. operations and understand American market expectations."
  },
  {
    icon: Building2,
    title: "Growing Tech Ecosystems",
    description: "Countries like Colombia, Argentina, and Brazil have thriving tech hubs with world-class talent in software development, design, and digital marketing."
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
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Why Nearshore?
            </h1>
            <p className="text-xl text-primary-foreground/80">
              The strategic advantage of South American talent: cost savings, time zone 
              alignment, and world-class professionals who work when you work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Nearshore Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              South America offers a unique combination of talent, cost efficiency, and 
              operational alignment that offshore destinations simply can't match.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nearshore vs. Offshore vs. Domestic
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how nearshore staffing compares to other talent sourcing strategies.
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
                    <th className="px-6 py-4 text-left font-semibold">Factor</th>
                    <th className="px-6 py-4 text-left font-semibold">Nearshore (South America)</th>
                    <th className="px-6 py-4 text-left font-semibold">Offshore (Asia)</th>
                    <th className="px-6 py-4 text-left font-semibold">Domestic (U.S.)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr 
                      key={row.factor} 
                      className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}
                    >
                      <td className="px-6 py-4 font-medium text-foreground">{row.factor}</td>
                      <td className="px-6 py-4 text-primary font-medium">{row.nearshore}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.offshore}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.domestic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <p className="text-muted-foreground">
                Engineering graduates annually in South America
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">1-3 hrs</div>
              <p className="text-muted-foreground">
                Time difference from major U.S. cities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <p className="text-muted-foreground">
                Average cost savings vs. U.S. hiring
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Experience the Nearshore Difference
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Book a strategy call to learn how nearshore staffing can transform 
              your operations and accelerate your growth.
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
