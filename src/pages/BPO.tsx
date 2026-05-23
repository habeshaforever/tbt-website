import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator,
  Headphones,
  Stethoscope,
  Scale,
  Code,
  ClipboardList,
  DollarSign,
  Users,
  Award,
  Search,
  CheckCircle,
  Rocket,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Calculator,
    title: "Finance and Accounting",
    description:
      "Bookkeeping, accounts payable and receivable, invoicing, payroll support, and financial reporting.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Inbound and outbound support teams handling calls, emails, chat, and escalations across all time zones.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Administration",
    description:
      "Medical billing, coding, claims processing, prior authorizations, and records management.",
  },
  {
    icon: Scale,
    title: "Legal Support",
    description:
      "Paralegals, legal assistants, document review, contract administration, and case coordination.",
  },
  {
    icon: Code,
    title: "Technology and IT",
    description:
      "Software development, tech support, cybersecurity, business intelligence, and data processing.",
  },
  {
    icon: ClipboardList,
    title: "Back Office Operations",
    description:
      "Data entry, document processing, scheduling, executive support, and administrative coordination.",
  },
];

const whyCards = [
  {
    icon: DollarSign,
    title: "Up to 70% Cost Savings",
    description:
      "Build a full BPO team at a fraction of what it would cost to hire domestically. No office costs, no benefits overhead, no long term contracts.",
  },
  {
    icon: Users,
    title: "Fully Managed or Direct Hire",
    description:
      "Choose whether TBT manages your BPO team entirely or whether you hire them directly. Both options are available depending on your needs.",
  },
  {
    icon: Award,
    title: "Top 1% Talent Only",
    description:
      "Every BPO professional we place has passed our full vetting process. You get people who are ready to perform from day one.",
  },
];

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery Call",
    description: "We learn about your needs, culture, and the specific roles you're looking to fill.",
  },
  {
    icon: Users,
    number: "02",
    title: "Candidate Selection",
    description: "We present pre-vetted candidates from our top 1% talent pool who match your requirements.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Interview and Hire",
    description: "You interview candidates and select the best fit. We handle all onboarding logistics.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Seamless Integration",
    description: "Your new team member integrates with your workflows, supported by our ongoing management.",
  },
];

const BPO = () => {
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
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Business Process <span className="text-primary">Outsourcing</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Hand off the work that slows your business down. Keep your focus on what moves it forward.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/book">Talk to Us About BPO</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What is BPO */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">What Is BPO</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Business Process Outsourcing is the practice of delegating specific business functions to
              an outside team. Rather than hiring internally for every role, companies use BPO to build
              dedicated teams that handle defined processes at a fraction of the cost. At Tandem Bridge
              Talent we build those teams from Latin America, placing top 1% professionals who work as a
              true extension of your operation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">What We Handle</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Outsource With TBT */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Why Outsource With TBT</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {whyCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 sm:py-24 bg-gradient-dark text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">How It Works</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent -translate-x-4" />
                )}
                <div className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-4 sm:p-6 hover:bg-primary-foreground/10 transition-colors">
                  <span className="absolute -top-3 -right-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-primary-foreground/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default BPO;