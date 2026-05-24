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
    description: "Your account manager is in the U.S. The person who picks up the phone when something goes wrong is in the U.S. You're not navigating a foreign company alone."
  },
  {
    icon: Users,
    title: "They Stay. That's the Whole Point.",
    description: "The average staffing company loses 18–20% of placements every year. Ours lose 2%. We pay more, treat people well, and put them in roles where they thrive. You hire once. They stay."
  },
  {
    icon: TrendingUp,
    title: "Up to 70% Cost Savings",
    description: "An accountant through TBT typically runs $2,200–$2,800/month all-inclusive. The same role in the U.S. starts at $60,000/year. The math isn't complicated."
  },
  {
    icon: Clock,
    title: "Same Time Zone Alignment",
    description: "No 12-hour delays. No scheduling around time differences. Your team is at their desk when you open your laptop — available for calls, messages, and meetings all day."
  },
  {
    icon: Handshake,
    title: "We Handle Everything. You Focus on Growth.",
    description: "Payroll, compliance, office space, equipment, HR, benefits, management support — all included in one flat fee. No surprises on the invoice."
  },
  {
    icon: Target,
    title: "No Warm Bodies. Only Right Fits.",
    description: "We learn your culture, your tools, your workflow, and your standards before we show you a single resume. Every candidate we present is pre-matched — not just qualified on paper."
  }
];

const differentiators = [
  "Background checks and verified credentials",
  "English fluency tested to professional standard",
  "Role-specific technical skills assessments",
  "Culture and work style interviews",
  "Active performance monitoring after hire",
  "U.S.-based dedicated account manager"
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
              Built by Americans who hired in Colombia and fixed every mistake themselves. This isn't a staffing agency. It's the model we wished had existed.
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
              Every Complaint About Staffing Agencies — We Built the Fix
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              High turnover. Bait-and-switch candidates. Offshore headaches. Hidden fees. We heard it all — then built TBT to solve every one.
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
                8 Steps Before You See a Single Resume
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Most agencies send you whoever applied. We send you whoever passed. Every candidate clears all 8 steps before we put their name in front of you.
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
                    90-Day Replacement Guarantee
                  </h3>
                  <p className="text-muted-foreground">
                    Doesn't work out? We replace them. No charge.
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8">
                If a placement isn't working within 90 days, we replace them at no cost. No arguments. No replacement fee. We've built our process around making sure you get the right person — and we back that up in writing.
              </p>

              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/book">Get Your First Candidates in 72 hrs</Link>
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
              Your Competitors Are Already Doing This.
            </h2>
            <p className="text-base sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Hundreds of U.S. and Canadian companies have already cut staffing costs by 70% without cutting quality. The question isn't whether it works. It's whether you start now or after your competition already did.
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

export default WhyTBS;
