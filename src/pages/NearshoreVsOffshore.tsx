import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { motion } from "framer-motion";
import { Check, X, Clock, Globe, DollarSign, Users, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const comparisonData = [
  {
    category: "Time Zone Alignment",
    nearshore: { value: "1-3 hours difference", positive: true },
    offshore: { value: "8-12 hours difference", positive: false },
    domestic: { value: "Same time zone", positive: true },
  },
  {
    category: "Real-Time Collaboration",
    nearshore: { value: "Full overlap during business hours", positive: true },
    offshore: { value: "Limited overlap, async work required", positive: false },
    domestic: { value: "Full overlap", positive: true },
  },
  {
    category: "Cost Savings",
    nearshore: { value: "50-70% savings", positive: true },
    offshore: { value: "60-70% savings", positive: true },
    domestic: { value: "No savings (baseline)", positive: false },
  },
  {
    category: "English Proficiency",
    nearshore: { value: "Excellent (B2-C1 level)", positive: true },
    offshore: { value: "Variable quality", positive: false },
    domestic: { value: "Native", positive: true },
  },
  {
    category: "Cultural Alignment",
    nearshore: { value: "Strong Western business culture", positive: true },
    offshore: { value: "Significant cultural differences", positive: false },
    domestic: { value: "Same culture", positive: true },
  },
  {
    category: "Travel for Meetings",
    nearshore: { value: "2-5 hour flights", positive: true },
    offshore: { value: "15-24 hour flights", positive: false },
    domestic: { value: "Variable", positive: true },
  },
  {
    category: "Quality of Talent",
    nearshore: { value: "Top 1% vetted professionals", positive: true },
    offshore: { value: "Variable, high turnover", positive: false },
    domestic: { value: "High quality, competitive market", positive: true },
  },
  {
    category: "Communication Speed",
    nearshore: { value: "Same-day responses", positive: true },
    offshore: { value: "24-48 hour turnaround", positive: false },
    domestic: { value: "Immediate", positive: true },
  },
];

const nearshoreAdvantages = [
  {
    icon: Clock,
    title: "Real-Time Collaboration",
    description: "Work together during your normal business hours. No midnight calls or delayed responses.",
  },
  {
    icon: DollarSign,
    title: "Significant Cost Savings",
    description: "Save 50-70% compared to domestic hiring while maintaining exceptional quality.",
  },
  {
    icon: Globe,
    title: "Cultural Compatibility",
    description: "South American professionals share Western business practices and work ethics.",
  },
  {
    icon: Users,
    title: "Easy Team Integration",
    description: "Seamlessly integrate remote team members who feel like part of your local team.",
  },
  {
    icon: Zap,
    title: "Faster Turnaround",
    description: "Real-time communication means faster iterations and quicker project completion.",
  },
  {
    icon: Shield,
    title: "Lower Risk",
    description: "Easier oversight, better communication, and stronger legal protections than offshore.",
  },
];

const offshoreRisks = [
  "Communication delays due to 8-12 hour time differences",
  "Cultural misunderstandings affecting work quality",
  "Difficulty scheduling real-time meetings",
  "Higher turnover rates due to market conditions",
  "Complex legal and IP protection challenges",
  "Reduced visibility into day-to-day operations",
];

const NearshoreVsOffshore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-20 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Staffing Comparison
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 sm:mb-6">
              Nearshore vs Offshore: <span className="text-accent">The Clear Winner</span>
            </h1>
            <p className="text-base sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Understanding the real differences between nearshore and offshore staffing 
              helps you make the right choice for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-10 sm:py-16 bg-accent/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Nearshore</h3>
                <p className="text-xl sm:text-3xl font-bold text-accent mb-2">South America</p>
                <p className="text-sm text-muted-foreground">1-3 hours from U.S. time zones</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Offshore</h3>
                <p className="text-xl sm:text-3xl font-bold text-muted-foreground mb-2">Asia/India</p>
                <p className="text-sm text-muted-foreground">8-12 hours from U.S. time zones</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Domestic</h3>
                <p className="text-xl sm:text-3xl font-bold text-muted-foreground mb-2">United States</p>
                <p className="text-sm text-muted-foreground">Same time zone, highest cost</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-14 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Side-by-Side Comparison
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              See how nearshore stacks up against offshore and domestic options across key factors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-2 sm:p-4 text-xs sm:text-sm font-semibold text-foreground border-b border-border">Category</th>
                  <th className="text-center p-2 sm:p-4 text-xs sm:text-sm font-semibold text-accent border-b border-border">Nearshore</th>
                  <th className="text-center p-2 sm:p-4 text-xs sm:text-sm font-semibold text-muted-foreground border-b border-border">Offshore</th>
                  <th className="text-center p-2 sm:p-4 text-xs sm:text-sm font-semibold text-muted-foreground border-b border-border">Domestic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.category} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="p-2 sm:p-4 text-xs sm:text-sm font-medium text-foreground border-b border-border">{row.category}</td>
                    <td className="p-2 sm:p-4 text-center border-b border-border">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                        {row.nearshore.positive ? (
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                        )}
                        <span className={`text-xs sm:text-sm ${row.nearshore.positive ? "text-foreground" : "text-muted-foreground"}`}>
                          {row.nearshore.value}
                        </span>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 text-center border-b border-border">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                        {row.offshore.positive ? (
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                        )}
                        <span className={`text-xs sm:text-sm ${row.offshore.positive ? "text-foreground" : "text-muted-foreground"}`}>
                          {row.offshore.value}
                        </span>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 text-center border-b border-border">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                        {row.domestic.positive ? (
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                        )}
                        <span className={`text-xs sm:text-sm ${row.domestic.positive ? "text-foreground" : "text-muted-foreground"}`}>
                          {row.domestic.value}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Nearshore Advantages */}
      <section className="py-14 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Why Nearshore Wins
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Get the cost benefits of outsourcing with the collaboration advantages of local teams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {nearshoreAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-4 sm:p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offshore Risks */}
      <section className="py-14 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                The Hidden Costs of Offshore
              </h2>
              <p className="text-muted-foreground mt-4">
                While offshore may seem cheaper upfront, these challenges often erode any savings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5 sm:p-8"
            >
              <ul className="grid md:grid-cols-2 gap-4">
                {offshoreRisks.map((risk, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{risk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 sm:py-20 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              The Bottom Line
            </h2>
            <p className="text-base sm:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              Nearshore staffing with Tandem Bridge Talent gives you the best of both worlds: 
              <strong className="text-accent"> 50-70% cost savings</strong> with the 
              <strong className="text-accent"> real-time collaboration</strong> your business needs to thrive.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book">See How Much You Can Save</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default NearshoreVsOffshore;
