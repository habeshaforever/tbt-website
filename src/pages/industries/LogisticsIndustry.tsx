import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Truck,
  TrendingUp,
  Package,
  Radio,
  ClipboardList,
  ShoppingCart,
  ShieldCheck,
  Search,
  Users,
  BarChart2,
  Database,
  Phone,
  Clock,
  DollarSign,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const roles = [
  { icon: Truck, title: "Logistics Coordinators" },
  { icon: TrendingUp, title: "Supply Chain Analysts" },
  { icon: Package, title: "Freight Coordinators" },
  { icon: Radio, title: "Dispatch Coordinators" },
  { icon: ClipboardList, title: "Inventory Control Specialists" },
  { icon: ShoppingCart, title: "Order Management Specialists" },
  { icon: ShieldCheck, title: "Customs and Compliance Coordinators" },
  { icon: Search, title: "Procurement Analysts" },
  { icon: Users, title: "Vendor Management Coordinators" },
  { icon: BarChart2, title: "Transportation Analysts" },
  { icon: Database, title: "Data Entry and Tracking Specialists" },
  { icon: Phone, title: "Customer Service Representatives" },
];

const whyCards = [
  {
    icon: ShieldCheck,
    title: "US Supply Chain Standards",
    description:
      "Our logistics professionals understand American freight systems, supply chain software, and the documentation standards your operation depends on.",
  },
  {
    icon: Clock,
    title: "Same Time Zone",
    description:
      "Your logistics team tracks shipments, coordinates vendors, and communicates with carriers in real time on your schedule without overnight delays.",
  },
  {
    icon: DollarSign,
    title: "70% Cost Savings",
    description:
      "Staff your logistics back office at a fraction of domestic cost without sacrificing accuracy, speed, or reliability.",
  },
];

const serviceModels = [
  {
    title: "Managed Staffing",
    description:
      "We build and manage your logistics support team from our Colombia offices. HR, payroll, infrastructure, and performance all handled by us.",
    href: "/solutions/managed-staffing",
    cta: "Learn More",
  },
  {
    title: "Recruiting and Direct Hire",
    description:
      "We source and vet your logistics professionals and you hire them directly as remote team members.",
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

const LogisticsIndustry = () => {
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
              Logistics and <span className="text-primary">Supply Chain</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Detail oriented Latin American logistics professionals who keep your operations moving,
              your data clean, and your customers informed.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/book">Build My Logistics Team</Link>
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
              Logistics Runs on Precision and People
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Supply chain and logistics operations depend on accurate data, fast communication, and
              reliable people behind the scenes. TBT places top 1% Latin American logistics
              professionals who understand US supply chain standards, communicate fluently in English,
              and integrate into your systems without slowing anything down.
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
              Ready to Build Your Logistics Team
            </h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Book a strategy call and we will show you exactly how TBT can support your
              logistics and supply chain operations.
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

export default LogisticsIndustry;
