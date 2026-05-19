import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Globe, Award, Heart, Handshake } from "lucide-react";

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
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              About Tandem Bridge Talent
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              U.S. Operated. <span className="text-primary">Nearshore Excellence.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a U.S.-based staffing company that connects American businesses with top-tier 
              South American talent, without the headaches of traditional offshore hiring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Tandem Bridge Talent was founded with a simple belief: American businesses 
                  deserve access to world-class talent without the complexity and risk of 
                  traditional offshore staffing.
                </p>
                <p>
                  After years of watching companies struggle with timezone misalignment, 
                  cultural disconnects, and unreliable offshore vendors, we built something different:
                  a staffing model that combines the cost advantages of global talent with
                  the reliability and accountability of a U.S.-managed operation.
                </p>
                <p>
                  Today, we serve growing businesses across the United States, providing 
                  skilled professionals in accounting, engineering, customer support, and more.
                  Every hire is backed by our careful vetting process, U.S.-based management,
                  and a commitment to long-term success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Placements</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">2%</div>
                  <div className="text-sm text-muted-foreground">Annual Turnover</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">70%</div>
                  <div className="text-sm text-muted-foreground">Cost Savings</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Build Your Team?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how Tandem Bridge Talent can help you access top-tier talent 
              at a fraction of the cost.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutTBS;
