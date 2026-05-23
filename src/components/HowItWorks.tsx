import { motion } from "framer-motion";
import { Search, Users, CheckCircle, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

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
    description: "We present pre-vetted candidates from our top 1% talent pool within 72 hours of finalizing your requirements.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Interview & Hire",
    description: "You interview candidates and select the best fit. We handle all onboarding logistics.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Seamless Integration",
    description: "Your new team member integrates with your workflows, supported by our ongoing management.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-dark text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Simple Process, Exceptional Results
          </h2>
          <p className="text-primary-foreground/70 mt-4 text-lg">
            From initial consultation to fully integrated team member, 
            we make nearshore staffing effortless.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent -translate-x-4" />
              )}

              <div className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors">
                {/* Step Number */}
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

        <div className="text-center mt-12">
          <Link
            to="/our-process"
            className="text-accent font-semibold hover:underline"
          >
            See Our Full Process →
          </Link>
        </div>
      </div>
    </section>
  );
};
