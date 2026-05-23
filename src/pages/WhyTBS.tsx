import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Award,
  Handshake,
  Target
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "U.S. Operated & Managed",
    description: "We're headquartered in the United States with full operational oversight. Your account managers, quality assurance, and strategic leadership are all U.S.-based."
  },
  {
    icon: Users,
    title: "Industry-Leading 2% Turnover",
    description: "Our careful vetting and employee-first culture means you get stable, long-term team members who grow with your business."
  },
  {
    icon: TrendingUp,
    title: "Up to 70% Cost Savings",
    description: "Access top-tier talent at a fraction of the cost without sacrificing quality. Our flat-fee model means no hidden costs."
  },
  {
    icon: Clock,
    title: "Same Time Zone Alignment",
    description: "South American talent works during U.S. business hours, ensuring real-time collaboration and instant communication."
  },
  {
    icon: Handshake,
    title: "All-Inclusive Partnership",
    description: "We handle payroll, compliance, benefits, office space, and equipment. You focus on growing your business."
  },
  {
    icon: Target,
    title: "Custom Talent Matching",
    description: "Our multi-step vetting process ensures you get candidates who match your technical requirements and company culture."
  }
];

const differentiators = [
  "Background checks and verified credentials",
  "English fluency assessments",
  "Technical skill evaluations",
  "Cultural fit interviews",
  "Ongoing performance management",
  "Dedicated account management"
];

const WhyTBS = () => {
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
              Why Tandem Bridge Talent?
            </h1>
            <p className="text-base sm:text-xl text-primary-foreground/80">
              U.S. operated. Nearshore teams that perform. We deliver the talent, 
              infrastructure, and support you need to scale efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
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
              The Tandem Bridge Talent Advantage
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine the cost efficiency of nearshore staffing with the reliability 
              and accountability of a U.S.-based operation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-5 sm:p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                A Rigorous Vetting Process
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Every candidate goes through our thorough screening process to make sure
                they meet the highest standards of skill, professionalism, and cultural fit.
              </p>

              <ul className="space-y-4">
                {differentiators.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 sm:p-10 border border-border shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Quality Guaranteed
                  </h3>
                  <p className="text-muted-foreground">
                    Risk-free talent placement
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8">
                We stand behind every placement. If a team member isn't the right fit, 
                we'll find you a replacement at no additional cost. Your success is our priority.
              </p>

              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/book">Book a Strategy Call</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-hero rounded-3xl p-6 sm:p-12 md:p-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-base sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how Tandem Bridge Talent can help you scale with top-tier 
              nearshore talent.
            </p>
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 border-white"
              asChild
            >
              <Link to="/book">See If We're a Fit</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyTBS;
