import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  ClipboardList,
  Package,
  Tag,
  Database,
  RotateCcw,
  ShoppingCart,
  Bot,
  Share2,
  Mail,
  Truck,
  Users,
  Zap,
  Clock,
  DollarSign,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const roles = [
  { icon: Phone, title: "Customer Service Representatives" },
  { icon: ClipboardList, title: "Order Management Specialists" },
  { icon: Package, title: "Inventory Control Specialists" },
  { icon: Tag, title: "Product Listing Specialists" },
  { icon: Database, title: "E-commerce Data Entry Specialists" },
  { icon: RotateCcw, title: "Returns and Refunds Coordinators" },
  { icon: ShoppingCart, title: "Marketplace Managers" },
  { icon: Bot, title: "E-commerce Virtual Assistants" },
  { icon: Share2, title: "Social Media Coordinators" },
  { icon: Mail, title: "Email Marketing Specialists" },
  { icon: Truck, title: "Fulfillment Coordinators" },
  { icon: Users, title: "CRM Specialists" },
];

const whyCards = [
  {
    icon: Zap,
    title: "Built for High Volume",
    description:
      "Our e-commerce professionals are trained to handle high order volumes, fast moving inventory, and the constant flow of customer inquiries that online retail demands.",
  },
  {
    icon: Clock,
    title: "Same Time Zone",
    description:
      "Your operations and customer service teams work your hours, respond to your customers in real time, and keep your store running during your peak hours.",
  },
  {
    icon: DollarSign,
    title: "Protect Your Margins",
    description:
      "E-commerce margins are tight. Building your back office team at 70% less than domestic cost gives you the breathing room to grow, invest, and stay competitive.",
  },
];

const serviceModels = [
  {
    title: "Managed Staffing",
    description:
      "We build and manage your e-commerce operations team from our Colombia offices. HR, payroll, infrastructure, and performance all handled by us. You focus on growth.",
    href: "/solutions/managed-staffing",
    cta: "Learn More",
  },
  {
    title: "Recruiting and Direct Hire",
    description:
      "We source and vet your e-commerce professionals and you hire them directly as remote team members fully integrated into your existing workflows.",
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

const EcommerceIndustry = () => {
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
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              E-commerce and <span className="text-primary">Online Retail</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Reliable Latin American operations and customer service teams that keep your store
              running, your customers happy, and your margins healthy.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/book">Build My E-commerce Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              E-commerce Runs on People Behind the Scenes
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Behind every successful online store is a team managing orders, handling customer
              inquiries, updating listings, tracking inventory, and keeping everything organized.
              When that back office breaks down your reviews suffer, your returns spike, and your
              margins disappear. TBT places top 1% Latin American e-commerce professionals who
              understand the pace and precision online retail demands, communicate fluently in
              English, and integrate into your operation without slowing anything down.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
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
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Roles We Fill</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
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
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Why It Works</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {whyCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
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
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {serviceModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-5 sm:p-8 hover:shadow-lg transition-shadow flex flex-col"
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
      <section className="py-12 sm:py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Ready to Build Your E-commerce Team
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Book a strategy call and we will show you exactly how TBT can support your
              online store and protect your margins.
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

export default EcommerceIndustry;
