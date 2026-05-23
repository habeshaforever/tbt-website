import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Paintbrush,
  Layout,
  Film,
  FileText,
  Edit3,
  Share2,
  Search,
  Mail,
  Lightbulb,
  BarChart2,
  Briefcase,
  Play,
  Clock,
  DollarSign,
  HeartHandshake,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const roles = [
  { icon: Paintbrush, title: "Graphic Designers" },
  { icon: Layout, title: "UI and UX Designers" },
  { icon: Film, title: "Video Editors" },
  { icon: FileText, title: "Content Writers" },
  { icon: Edit3, title: "Copywriters" },
  { icon: Share2, title: "Social Media Managers" },
  { icon: Search, title: "SEO Specialists" },
  { icon: Mail, title: "Email Marketing Specialists" },
  { icon: Lightbulb, title: "Brand Strategists" },
  { icon: BarChart2, title: "Digital Marketing Analysts" },
  { icon: Briefcase, title: "Creative Project Managers" },
  { icon: Play, title: "Motion Graphics Designers" },
];

const whyCards = [
  {
    icon: HeartHandshake,
    title: "Culturally Aligned",
    description:
      "Our marketing and creative professionals understand US consumer culture, brand standards, and communication styles. Your content will always feel on brand.",
  },
  {
    icon: Clock,
    title: "Same Time Zone",
    description:
      "Your creative team attends your briefings, hits your deadlines, and collaborates in real time without the lag of offshore time differences.",
  },
  {
    icon: DollarSign,
    title: "70% Cost Savings",
    description:
      "Build a full creative and marketing team at a fraction of domestic cost without sacrificing quality, creativity, or brand consistency.",
  },
];

const serviceModels = [
  {
    title: "Managed Staffing",
    description:
      "We build and manage your creative team from our Colombia offices. HR, payroll, infrastructure, and performance all handled by us. You focus on strategy.",
    href: "/solutions/managed-staffing",
    cta: "Learn More",
  },
  {
    title: "Recruiting and Direct Hire",
    description:
      "We source and vet your marketing and creative professionals and you hire them directly as remote team members.",
    href: "/solutions/recruiting-direct-hire",
    cta: "Learn More",
  },
];

const stats = [
  { value: "70%", label: "Cost Savings vs US Hires" },
  { value: "2 to 3 Weeks", label: "Average Time to Hire" },
  { value: "2%", label: "Annualized Turnover Rate" },
  { value: "Top 1%", label: "Talent Only" },
];

const MarketingIndustry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Marketing and <span className="text-primary">Creative Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Talented Latin American creative and marketing professionals who keep your brand moving
              and your content pipeline full.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/book">Build My Creative Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Creative Output Requires Consistent Talent
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Marketing teams are always under pressure to produce more with less. Domestic creative
              hiring is expensive, slow, and the turnover never stops. TBT places top 1% Latin
              American marketing and creative professionals who are fluent in English, culturally
              aligned with US brands, and ready to plug into your team and produce from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles We Fill */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Roles We Fill</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <role.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{role.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why It Works</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Models */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow flex flex-col"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{model.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">{model.description}</p>
                <Link
                  to={model.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  {model.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Build Your Creative Team
            </h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Book a strategy call and we will show you exactly how TBT can support your
              marketing and creative needs.
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

export default MarketingIndustry;
