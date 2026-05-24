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
    title: "The Right Person, Not the First Available",
    description: "Most agencies send you whoever is available. We send you whoever is right. Every candidate passes our 8-step vetting process. Only the top 1% get placed."
  },
  {
    icon: Target,
    title: "Your Numbers Are Our Report Card",
    description: "We track our performance by what it actually costs you, how long the person stays, and whether they deliver. Our 98% client retention rate says what our words cannot."
  },
  {
    icon: Globe,
    title: "The Cultural Fit Is Part of the Vetting",
    description: "Colombian professionals already understand U.S. work culture, communication norms, and business expectations. We vet for that too — not just skills on a resume."
  },
  {
    icon: Award,
    title: "Top 1% Is Not a Slogan",
    description: "We run an 8-step process before anyone gets placed. Language, skills, culture, technical ability. Most applicants do not make it through. The ones who do are ready on day one."
  },
  {
    icon: Heart,
    title: "2% Turnover. Industry Average Is 18%.",
    description: "When people are placed right, they stay. Our 2% annualized turnover rate is not luck — it is the result of matching carefully and supporting consistently after the hire."
  },
  {
    icon: Handshake,
    title: "Flat Rate. No Hidden Fees.",
    description: "You know what you are paying before we start. No surprises at invoice time, no add-on charges buried in the fine print. That is how it should be."
  }
];

const AboutTBS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Built by People Who Lived the <span className="text-primary">Problem</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              One founder could not find reliable talent at a price that made sense. The other was the talent — a top Colombian professional with no direct path to U.S. companies. They built TBT to fix both problems at once.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/book">Book a Strategy Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Identity Bar */}
      <section className="py-8 sm:py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
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
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Two Founders. Two Sides of the Same Problem.
            </h2>
            <p className="text-lg text-muted-foreground">
              Alpha built businesses and kept running into the same wall — great work to be done, no reliable people to do it at a price that made sense. Gianna was on the other side — a top-performing Colombian professional who watched companies struggle to find people like her. TBT is what happens when those two perspectives meet.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-0">
            {/* Alpha Bayan - Photo Left, Text Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center py-8 sm:py-12 border-b border-border"
            >
              {/* Photo */}
              <div className="flex justify-center">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden">
                  <img
                    src={alphaBayanImg}
                    alt="Alpha Bayan"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Text */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground">Alpha Bayan</h3>
                <p className="text-base sm:text-xl text-primary font-medium">Co-Founder</p>
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
              className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center py-8 sm:py-12"
            >
              {/* Text */}
              <div className="space-y-4 lg:order-1 order-2">
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground">Gianna Reina</h3>
                <p className="text-base sm:text-xl text-primary font-medium">Co-Founder</p>
                <p className="text-muted-foreground leading-relaxed">
                  Gianna brings a perspective most staffing leaders simply do not have. She has been on both sides of the equation. With five years in the remote work and staffing space, she built her career working remotely for American and Canadian companies across multiple high level roles. Through that experience she saw the gap clearly. There was an abundance of qualified driven Latin American professionals with no reliable path to the companies that needed them most. As someone who consistently ranked in the top percentile of remote workers herself, she developed a sharp eye for identifying top performers and built an extensive network of exceptional talent along the way. That insight and that network became the foundation she brought to Tandem Bridge Talent.
                </p>
              </div>
              {/* Photo */}
              <div className="flex justify-center lg:order-2 order-1">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden">
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
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Why We Built This
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                U.S. businesses are paying too much for talent they can barely keep. Domestic hiring is expensive, slow, and the turnover is brutal — the industry average sits at 18-20% annually. Meanwhile, Colombia has a deep pool of bilingual, highly educated professionals working in Eastern and Central time zones who are never getting the shot they deserve.
              </p>
              <p>
                TBT exists to close that gap. Not with a job board or a recruiting algorithm — with a real vetting process, real people, and a 90-day replacement guarantee that puts our money where our mouth is.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Not slogans. Actual commitments we back up with numbers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              See If TBT Is the Right Fit for Your Business
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Book a 30-minute call. We will show you what roles we can fill, what the cost looks like, and how quickly we can get you your first candidate. No pressure, no pitch deck.
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
