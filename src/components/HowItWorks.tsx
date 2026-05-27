import { motion } from "framer-motion";
import { Search, Users, CheckCircle, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "We Learn What You Need",
    description: "Tell us the role, the skills, the culture, and what you've tried before. The more we know, the better the match.",
  },
  {
    icon: Users,
    number: "02",
    title: "We Find Your Top Candidates",
    description: "Within 72 hours, we hand-deliver profiles of pre-vetted, top-1% candidates. Screened, tested, and ready to start.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "You Choose. We Handle the Rest.",
    description: "Interview your top picks. Pick the one you want. We handle everything needed to get them started — fast.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Day One. Done.",
    description: "Your new team member joins your tools, meets your team, and gets to work. We stay close to make sure everything runs.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-dark text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-8 md:mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-balance">
            You're 4 Steps Away From Your Best Hire
          </h2>
          <p className="text-primary-foreground/70 mt-4 text-base md:text-lg">
            We do the heavy lifting. You show up, pick who you want, and get to work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
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

              <div className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-4 md:p-6 hover:bg-primary-foreground/10 transition-colors">
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
