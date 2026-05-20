import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Headphones,
  LifeBuoy,
  HeartHandshake,
  Repeat,
  MessageSquare,
  Phone,
  ShieldCheck,
  Users,
  Languages,
  Clock,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";

const roles = [
  { icon: Headphones, title: "Customer Service Representatives" },
  { icon: LifeBuoy, title: "Support Specialists" },
  { icon: HeartHandshake, title: "Customer Success Managers" },
  { icon: Repeat, title: "Retention Specialists" },
  { icon: MessageSquare, title: "Chat Support Agents" },
  { icon: Phone, title: "Call Center Agents" },
  { icon: ShieldCheck, title: "Quality Assurance Analysts" },
  { icon: Users, title: "Team Leads and Supervisors" },
];

const whyCards = [
  {
    icon: Languages,
    title: "Bilingual Communication",
    description:
      "Our professionals communicate clearly and confidently in English with your customers every day.",
  },
  {
    icon: Clock,
    title: "Same Time Zone",
    description:
      "Your support team works your hours, responds in real time, and attends your team meetings without scheduling headaches.",
  },
  {
    icon: DollarSign,
    title: "70% Cost Savings",
    description:
      "Build a full customer service team at a fraction of domestic cost without sacrificing quality or reliability.",
  },
];

const CustomerServiceIndustry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Customer Service and <span className="text-primary">Call Centers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Build the support team your customers actually deserve.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/contact">Build My Support Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* We Know Customer Service */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We Know Customer Service
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Customer service is where your brand lives or dies. Every interaction either builds
              loyalty or breaks it. Companies that try to scale support with domestic teams alone hit a
              wall fast. The cost is too high and the turnover never stops. TBT places top 1% Latin
              American customer service professionals who are bilingual, experienced, and ready to
              represent your brand the right way from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roles We Fill */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Roles We Fill</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <role.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{role.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why It Works</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/roles/customer-care"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View Customer Care Role Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default CustomerServiceIndustry;