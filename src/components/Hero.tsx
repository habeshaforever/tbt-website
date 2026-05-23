import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const trustPoints = [
  "70% Cost Savings",
  "2% Turnover Rate",
  "Same Time Zone",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-2"
            >
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                U.S. Led. South American Talent.
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
              <span className="text-sm font-medium text-success">Industry-Leading Retention</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
              Build Your <span className="text-accent">Elite Remote Team</span> for 70% Less
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl">
              U.S. led staffing. South American talent. Built for scale. Access the top 1% of 
              nearshore professionals with fluent English, real-time collaboration, and 70% cost savings.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-4">
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
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/book">
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="secondary" size="xl" asChild>
                <a href="#how-it-works">Learn How It Works</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Stat Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="col-span-2 bg-gradient-hero p-8 rounded-2xl text-primary-foreground shadow-glow"
              >
                <div className="flex items-end gap-2">
                  <AnimatedCounter end={70} suffix="%" className="text-6xl font-bold" />
                </div>
                <p className="text-lg opacity-90 mt-2">Cost Savings vs. US Hiring</p>
              </motion.div>

              {/* Secondary Stats */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-primary-foreground/5 p-6 rounded-2xl border border-primary-foreground/10"
              >
                <AnimatedCounter end={2} suffix="%" className="text-4xl font-bold text-primary" />
                <p className="text-muted-foreground mt-1">Turnover Rate</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-primary-foreground/5 p-6 rounded-2xl border border-primary-foreground/10"
              >
                <AnimatedCounter end={98} suffix="%" className="text-4xl font-bold text-success" />
                <p className="text-muted-foreground mt-1">Retention Rate</p>
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
                    <p className="font-semibold text-primary-foreground">U.S. Aligned Time Zones</p>
                    <p className="text-sm text-primary-foreground/60">Real-time collaboration with your US team</p>
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
