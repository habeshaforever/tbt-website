import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FileText,
  Code2,
  ClipboardList,
  ShieldCheck,
  CalendarClock,
  Database,
  TrendingUp,
  CreditCard,
  HeartHandshake,
  Phone,
  Clock,
  DollarSign,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const roles = [
  { icon: FileText, title: "Medical Billers" },
  { icon: Code2, title: "Medical Coders" },
  { icon: ClipboardList, title: "Claims Processors" },
  { icon: ShieldCheck, title: "Prior Authorization Specialists" },
  { icon: Database, title: "Medical Records Specialists" },
  { icon: CalendarClock, title: "Patient Scheduling Coordinators" },
  { icon: Database, title: "Healthcare Data Entry Specialists" },
  { icon: TrendingUp, title: "Revenue Cycle Analysts" },
  { icon: CreditCard, title: "Insurance Verification Specialists" },
  { icon: Phone, title: "Healthcare Customer Service Reps" },
];

const whyCards = [
  {
    icon: ShieldCheck,
    title: "HIPAA Trained",
    description:
      "Every professional we place in healthcare roles is trained in HIPAA compliance and understands the privacy standards your organization is held to.",
  },
  {
    icon: Clock,
    title: "Same Time Zone",
    description:
      "Your healthcare team works your hours, responds in real time, and is available when your patients and staff need them.",
  },
  {
    icon: DollarSign,
    title: "70% Cost Savings",
    description:
      "Build a full healthcare admin team at a fraction of what it costs to hire domestically without cutting corners on quality or compliance.",
  },
];

const serviceModels = [
  {
    title: "Managed Staffing",
    description:
      "We build and manage your healthcare admin team entirely. HR, payroll, compliance, and performance are all handled by us. You focus on patient care.",
    href: "/solutions/managed-staffing",
    cta: "Learn More",
  },
  {
    title: "Recruiting and Direct Hire",
    description:
      "We source and vet your healthcare professionals and you hire them directly. Best for organizations with existing HR capacity who need great candidates fast.",
    href: "/solutions/recruiting-direct-hire",
    cta: "Learn More",
  },
];

const stats = [
  { value: "70%", label: "Cost Savings vs US Hires" },
  { value: "2 to 3 Weeks", label: "Average Time to Hire" },
  { value: "2%", label: "Annualized Turnover Rate" },
  { value: "Top 1%", label: "Talent Only" },
];

const HealthcareIndustry = () => {
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
              Healthcare and <span className="text-primary">Wellness</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Billing backlogs, claims denials, prior auth delays. Your revenue cycle is bleeding. HIPAA-trained professionals who fix it at 70% less than hiring domestically.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/book">Build My Healthcare Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Every Day Your Admin Team Falls Behind, It Costs You
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Billing errors. Claims backlogs. Prior auth delays. Staffing shortages. Every one of those is a real dollar leaving your organization every single day. TBT places top 1% nearshore healthcare professionals who are trained in U.S. systems, HIPAA-compliant, fluent in English, and ready to clean up your revenue cycle and back office from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles We Fill */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Roles We Fill</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
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
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Why It Works</h2>
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

      {/* Service Models */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {serviceModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-5 sm:p-8 hover:shadow-lg transition-shadow flex flex-col"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{model.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">{model.description}</p>
                <Link
                  to={model.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  {model.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Stop the Billing Backlog. Build a Team That Stays.
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              One call. We'll show you the role cost, what the talent looks like, and how fast we can get started.
            </p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/book">Get Your First Candidates in 72 hrs</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareIndustry;
