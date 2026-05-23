import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Languages, Plane, Award } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Clock,
    title: "Same Time Zone",
    description:
      "Colombia operates on Central and Eastern time, meaning your team works your hours, attends your meetings, and is available when you need them."
  },
  {
    icon: Languages,
    title: "Bilingual Professionals",
    description:
      "Our Colombian team members are fluent English speakers who communicate clearly and confidently with US and Canadian clients every day."
  },
  {
    icon: Plane,
    title: "30 Min From the Airport",
    description:
      "Our office locations are within 30 minutes of an international airport, making client visits straightforward and easy to plan."
  },
  {
    icon: Award,
    title: "Top 1% Talent",
    description:
      "We only place professionals who have passed our full vetting process. Every person on your team has earned their spot."
  }
];

const WhyColombia = () => {
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
              Why <span className="text-primary">Colombia</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              The smartest nearshore decision for your business.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/book">Build Your Team in Colombia</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              The Right Location Changes Everything
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Colombia sits in a unique position. It shares time zones with most of the United States,
              has a rapidly growing pool of highly educated professionals, and has developed one of the
              strongest cultures of remote work and bilingual communication in all of Latin America. For
              companies looking to build dedicated office based teams, Colombia is not just a practical
              choice. It is the right one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Stats */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{stat.title}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Built for Managed Staffing
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Our Colombia operations are purpose built for clients who want a fully managed office
              based team. We handle the office space, equipment, HR, payroll, and compliance. You show
              up as the client and focus entirely on the work. This is what makes our Managed Staffing
              model different from every other option in the market.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/solutions/managed-staffing">Learn About Managed Staffing</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Visit Your Team
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Many of our clients visit Colombia to meet their teams in person. We encourage it. Seeing
              the office, meeting the people, and understanding the environment builds a level of trust
              that no video call can replace. Our team will help coordinate your visit and make sure you
              get the most out of it.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/book">Book a Strategy Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default WhyColombia;