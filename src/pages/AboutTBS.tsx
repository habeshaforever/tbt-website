import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Globe, Award, Heart, Handshake } from "lucide-react";
import alphaBayanImg from "@/assets/alpha-bayan.png";
import giannaReinaImg from "@/assets/gianna-reina.jpg";

const identity = [
  { icon: Globe, label: "U.S. Operated" },
  { icon: Users, label: "Latin American Talent" },
  { icon: Handshake, label: "Partnership Driven" },
  { icon: Heart, label: "People First" },
];

const values = [
  {
    icon: Users,
    title: "People First",
    description: "We believe that the right people are the foundation of every successful business. Our mission is to connect exceptional talent with companies that value their contributions."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure our success by your success. Every hire we make is focused on delivering measurable impact to your bottom line."
  },
  {
    icon: Globe,
    title: "Bridge Cultures",
    description: "We specialize in bridging the gap between U.S. business culture and Latin American talent, so teams actually click."
  },
  {
    icon: Award,
    title: "Quality Over Quantity",
    description: "We'd rather find you one perfect candidate than ten mediocre ones. Our careful vetting process means only the top 1% make it through."
  },
  {
    icon: Heart,
    title: "Long-Term Partnerships",
    description: "We're not just filling positions. We're building lasting relationships. Our 2% annual turnover rate speaks to our commitment to fit."
  },
  {
    icon: Handshake,
    title: "Transparency",
    description: "No hidden fees, no surprises. Our flat-rate model means you always know exactly what you're paying for."
  }
];

const AboutTBS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Built by People Who Lived the <span className="text-primary">Problem</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Tandem Bridge Talent was not built in a boardroom. It was built by two founders who experienced the talent gap firsthand and decided to close it.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/book">Book a Strategy Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Identity Bar */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {identity.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built From the Ground Up - Founders */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built From the Ground Up
            </h2>
            <p className="text-lg text-muted-foreground">
              Tandem Bridge Talent was built by two people who experienced the talent gap firsthand.
              One from the business side, one from the talent side. Together they built something
              that solves it from both ends.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-0">
            {/* Alpha Bayan - Photo Left, Text Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center py-12 border-b border-border"
            >
              {/* Photo */}
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <img
                    src={alphaBayanImg}
                    alt="Alpha Bayan"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Text */}
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Alpha Bayan</h3>
                <p className="text-xl text-primary font-medium">Co-Founder</p>
                <p className="text-muted-foreground leading-relaxed">
                  Alpha grew up surrounded by entrepreneurship. Building something from the ground up was simply a way of life. Based between Indianapolis and Chicago, he earned his MHA and MBA from IUPUI and went on to work at IU Health, where he developed a deep understanding of operations and workforce management. As he scaled his own businesses the same problem kept showing up. Demand for reliable talented people was constant but the traditional hiring market kept falling short. He turned his attention to Latin America and saw not just an opportunity but a better way. He built his own remote team from scratch, refined a model built around partnership, quality, and people, and turned that experience into Tandem Bridge Talent.
                </p>
              </div>
            </motion.div>

            {/* Gianna Reina - Text Left, Photo Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid lg:grid-cols-2 gap-12 items-center py-12"
            >
              {/* Text */}
              <div className="space-y-4 lg:order-1 order-2">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Gianna Reina</h3>
                <p className="text-xl text-primary font-medium">Co-Founder</p>
                <p className="text-muted-foreground leading-relaxed">
                  Gianna brings a perspective most staffing leaders simply do not have. She has been on both sides of the equation. With five years in the remote work and staffing space, she built her career working remotely for American and Canadian companies across multiple high level roles. Through that experience she saw the gap clearly. There was an abundance of qualified driven Latin American professionals with no reliable path to the companies that needed them most. As someone who consistently ranked in the top percentile of remote workers herself, she developed a sharp eye for identifying top performers and built an extensive network of exceptional talent along the way. That insight and that network became the foundation she brought to Tandem Bridge Talent.
                </p>
              </div>
              {/* Photo */}
              <div className="flex justify-center lg:order-2 order-1">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <img
                    src={giannaReinaImg}
                    alt="Gianna Reina"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why We Built This
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                American businesses struggle to find reliable talent while Latin America has an abundance of qualified, English-fluent professionals in the same time zones.
              </p>
              <p>
                TBT bridges that gap. We connect U.S. and Canadian companies with top-tier Latin American professionals who bring the skills, communication ability, and work ethic needed to drive real results—at a fraction of the cost of domestic hires.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Build Your Team?
            </h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Let's discuss how Tandem Bridge Talent can help you access top-tier talent
              at a fraction of the cost.
            </p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/book">Book a Strategy Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutTBS;
