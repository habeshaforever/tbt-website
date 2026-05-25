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
      "Colombia runs on Eastern and Central time. Your team is online when you open your laptop and available when you pick up the phone. No scheduling around 12-hour differences."
  },
  {
    icon: Languages,
    title: "Bilingual Professionals",
    description:
      "Every candidate we place passes an English fluency assessment. They communicate in writing, on calls, and in meetings. No translation needed, no misunderstandings."
  },
  {
    icon: Plane,
    title: "30 Min From the Airport",
    description:
      "Want to meet your team in person? Every one of our offices is within 30 minutes of an international airport. Most clients fly in and out the same day."
  },
  {
    icon: Award,
    title: "Top 1% Talent",
    description:
      "Colombia produces hundreds of thousands of university graduates every year. We take fewer than 1%. The rest were qualified. Just not good enough."
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
              Same time zone. Fluent English. Top-tier talent. 70% less than a U.S. hire. This is where your next team member is.
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
              Colombia Isn't a Compromise. For Our Clients, It's an Upgrade.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              This isn't cheap labor. These are professionals who graduated from respected universities, built careers working with U.S. and Canadian companies, and speak fluent English. They work your hours, understand your business culture, and cost 70% less. For companies building dedicated, office-based teams that actually stay, Colombia is the obvious answer.
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
              We Don't Just Place the Hire. We Run Everything After.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Most staffing companies drop off a hire and disappear. We don't. We own the office, manage HR, run payroll, and handle all compliance. All included in one flat fee. You get a high-performing team member without any of the management overhead. No hidden costs. No surprises. That's our Managed Staffing model, and there's nothing else like it.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/solutions/managed-staffing">See How Managed Staffing Works</Link>
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
              Come See It for Yourself
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Dozens of our clients fly to Colombia every year to meet their teams face to face. They always say the same thing: "I didn't expect it to be like this." Modern offices. Driven professionals. A culture that takes real pride in the work. Every office is within 30 minutes of an international airport. Most clients fly in and out the same day. Our team will coordinate everything.
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