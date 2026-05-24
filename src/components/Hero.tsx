import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const trustPoints = [
  "70% Less Than U.S. Rates",
  "2% Turnover (Industry Avg: 18%)",
  "Works Your Exact Hours",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 md:pb-16 overflow-hidden bg-gradient-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-20 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-8"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-2"
            >
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Nearshore Staffing That Actually Works
              </span>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full border border-success/20"
            >
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-success">2% Turnover — Industry Average Is 18%</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
              Stop Paying U.S. Rates for <span className="text-accent">Talent That Won't Stay</span>
            </h1>

            <p className="text-base md:text-xl text-primary-foreground/70 max-w-xl">
              Our Colombian professionals are fluent in English, work your exact hours,
              and cost 70% less than equivalent U.S. hires. We handle the office, HR, payroll,
              and compliance. You just show up as the client.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-primary-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/book">
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#how-it-works">Learn How It Works</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-8 lg:mt-0 hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Stat Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="col-span-2 bg-gradient-hero p-8 rounded-2xl text-primary-foreground shadow-glow"
              >
                <div className="flex items-end gap-2">
                  <AnimatedCounter end={70} suffix="%" className="text-4xl md:text-6xl font-bold" />
                </div>
                <p className="text-lg opacity-90 mt-2">Less Than a Comparable U.S. Hire</p>
              </motion.div>

              {/* Secondary Stats */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-primary-foreground/5 p-6 rounded-2xl border border-primary-foreground/10"
              >
                <AnimatedCounter end={2} suffix="%" className="text-3xl md:text-4xl font-bold text-primary" />
                <p className="text-muted-foreground mt-1">Annual Turnover (vs. 18% industry avg)</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-primary-foreground/5 p-6 rounded-2xl border border-primary-foreground/10"
              >
                <AnimatedCounter end={98} suffix="%" className="text-3xl md:text-4xl font-bold text-success" />
                <p className="text-muted-foreground mt-1">Client Retention Rate</p>
              </motion.div>

              {/* Feature Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="col-span-2 bg-primary-foreground/5 p-6 rounded-2xl border border-primary-foreground/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">Works Your Exact Hours</p>
                    <p className="text-sm text-primary-foreground/60">Online at 9 AM your time. Available all day.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
