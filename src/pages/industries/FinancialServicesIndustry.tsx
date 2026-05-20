import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator,
  BookOpen,
  TrendingUp,
  FileText,
  CreditCard,
  Receipt,
  Landmark,
  FileSpreadsheet,
  PieChart,
  Wallet,
  ShieldCheck,
  Clock,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";

const roles = [
  { icon: Calculator, title: "Staff Accountants" },
  { icon: BookOpen, title: "Senior Accountants" },
  { icon: TrendingUp, title: "Financial Analysts" },
  { icon: FileText, title: "Bookkeepers" },
  { icon: CreditCard, title: "Accounts Payable Specialists" },
  { icon: Receipt, title: "Accounts Receivable Specialists" },
  { icon: Landmark, title: "Tax Support Specialists" },
  { icon: FileSpreadsheet, title: "Billing and Invoicing Specialists" },
  { icon: PieChart, title: "Revenue Cycle Analysts" },
  { icon: Wallet, title: "Payroll Coordinators" },
];

const whyCards = [
  {
    icon: ShieldCheck,
    title: "US Standards Trained",
    description:
      "Our finance professionals understand US GAAP, American tax structures, and the tools your team already uses.",
  },
  {
    icon: Clock,
    title: "Real Time Availability",
    description:
      "Your finance team works your hours, hits your deadlines, and communicates in real time without delays.",
  },
  {
    icon: DollarSign,
    title: "70% Cost Savings",
    description:
      "Get the financial expertise your business needs at a fraction of what it costs to hire domestically.",
  },
];

const FinancialServicesIndustry = () => {
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
              Financial Services and <span className="text-primary">Fintech</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Accurate, reliable financial talent without the domestic price tag.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/contact">Build My Finance Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Finance Runs on Precision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Finance Runs on Precision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In financial services there is no room for error. Every number has to be right, every
              deadline has to be met, and every person on your team has to know what they are doing. TBT
              places top 1% Latin American finance professionals who are trained in US standards,
              experienced with American companies, and ready to deliver the level of accuracy your
              business depends on.
            </p>
          </motion.div>
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

          <div className="text-center mt-12">
            <Link
              to="/roles/accounting"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View Accounting Role Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default FinancialServicesIndustry;