import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { motion } from "framer-motion";
import { Search, Users, CheckCircle, Rocket, FileCheck, Headphones, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    icon: Search,
    number: "01",
    title: "One Call. We Learn Everything.",
    description: "No intake forms. No generic questionnaires. We get on a call, learn your business, map your team dynamics, and define exactly what the right person looks like.",
    details: [
      "Detailed role profiling",
      "Culture fit assessment",
      "Technical requirements mapping",
      "Timeline planning"
    ]
  },
  {
    icon: Users,
    number: "02",
    title: "We Find the Top 1%",
    description: "From hundreds of applicants, our 8-step vetting process filters to the few worth your time. Skills tests, background checks, English fluency, and cultural fit. We run it all so you don't have to.",
    details: [
      "Skills assessment testing",
      "English proficiency verification",
      "Background & reference checks",
      "Cultural alignment screening"
    ]
  },
  {
    icon: FileCheck,
    number: "03",
    title: "You Get the Best, Pre-Screened",
    description: "Within 72 hours, we deliver a short list of top picks, each with video introductions, test scores, verified work history, and salary expectations already aligned. No surprises.",
    details: [
      "Video introductions",
      "Skills test results",
      "Work history verification",
      "Salary expectations aligned"
    ]
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "You Pick. We Handle the Rest.",
    description: "Interview your top picks on your schedule. When you choose, we take it from there: contracts, compliance, onboarding, all of it. Direct Hire clients wrap up here — your new hire joins your payroll directly. Managed Staffing clients continue with full setup.",
    details: [
      "Flexible interview scheduling",
      "Technical interview support",
      "Offer negotiation assistance",
      "Quick turnaround decisions"
    ]
  },
  {
    icon: Shield,
    number: "05",
    title: "Setup Done Before Day One",
    description: "For Managed Staffing clients: employment agreements, compliance filings, benefits setup, and equipment provisioning. All handled before your new hire walks through the door.",
    details: [
      "Employment contracts",
      "Benefits administration",
      "Equipment provisioning",
      "Compliance management"
    ]
  },
  {
    icon: Rocket,
    number: "06",
    title: "Day One. No Drama.",
    description: "Tool access, team introductions, process documentation. We prep everything so your new team member hits the ground running from day one.",
    details: [
      "Tool & system access setup",
      "Team introductions",
      "Process documentation",
      "Communication protocols"
    ]
  },
  {
    icon: Headphones,
    number: "07",
    title: "We Don't Disappear After the Hire",
    description: "Your dedicated account manager checks in regularly, monitors performance, and handles anything that comes up. The 90-day replacement guarantee backs everything up.",
    details: [
      "Regular check-ins",
      "Performance monitoring",
      "Issue resolution",
      "90-day replacement guarantee"
    ]
  },
];

const timelineStats = [
  { value: "72hrs", label: "First candidates presented" },
  { value: "2 weeks", label: "Average time to hire" },
  { value: "98%", label: "Client satisfaction rate" },
  { value: "2%", label: "Annual turnover rate" },
];

const OurProcess = () => {
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
              How We Work
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 sm:mb-6">
              From First Call to <span className="text-accent">First Day</span> in Two Weeks
            </h1>
            <p className="text-base sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              We've done this hundreds of times. You don't have to figure anything out. Just tell us what you need and show up to the interviews.
            </p>
          </motion.div>

          {/* Timeline Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-16 max-w-4xl mx-auto"
          >
            {timelineStats.map((stat, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
                <div className="text-xl sm:text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-14 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start gap-4 sm:gap-8 mb-8 sm:mb-16 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-glow">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                    {step.number}
                  </span>
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-24 left-1/2 w-0.5 h-32 bg-gradient-to-b from-primary/30 to-transparent -translate-x-1/2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-card border border-border rounded-2xl p-4 sm:p-8">
                  <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              90-Day Replacement Guarantee
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              If a placement doesn't work out in the first 90 days, we replace them at no additional cost. No arguments. No questions. No replacement fee. That's how confident we are.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book">Get Your First Candidates in 72 hrs</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default OurProcess;
