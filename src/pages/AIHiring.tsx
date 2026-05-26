import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ScanSearch,
  ClipboardCheck,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Calculator,
  HeadphonesIcon,
  TrendingUp,
  Code2,
  UserCircle,
  Kanban,
  Palette,
  Database,
  Monitor,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: ScanSearch,
    title: "AI Resume Screening",
    description:
      "Our model parses thousands of applications and scores candidates against your exact role requirements in seconds.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Skills Assessment",
    description:
      "Automated technical and language tests filter out the bottom 80% before a human ever looks at a profile.",
  },
  {
    number: "03",
    icon: Users,
    title: "Human Panel Interview",
    description:
      "Senior TBT recruiters conduct structured interviews with only the candidates who passed AI screening.",
  },
  {
    number: "04",
    icon: Target,
    title: "Client Match",
    description:
      "We present 2-3 vetted candidates. You interview, you choose. Average time to hire: 2-3 weeks.",
  },
];

const stats = [
  { value: "Top 1%", label: "Talent Placed" },
  { value: "70%", label: "Cost Savings vs US" },
  { value: "2–3 Wks", label: "Average Time to Hire" },
  { value: "2%", label: "Annualized Turnover" },
];

const humanFactors = [
  { icon: CheckCircle, label: "Cultural Alignment" },
  { icon: CheckCircle, label: "Communication Quality" },
  { icon: CheckCircle, label: "Long-Term Fit" },
];

const roles = [
  { icon: Calculator, title: "Accounting", href: "/roles/accounting" },
  { icon: HeadphonesIcon, title: "Customer Care", href: "/roles/customer-care" },
  { icon: TrendingUp, title: "Sales", href: "/roles/sales" },
  { icon: Code2, title: "Engineering", href: "/roles/software-developers" },
  { icon: UserCircle, title: "Executive Assistants", href: "/roles/executive-assistants" },
  { icon: Kanban, title: "Project Management", href: "/roles/project-management" },
  { icon: Palette, title: "Designers", href: "/roles/designers" },
  { icon: Database, title: "Data Processing", href: "/roles/data-processing" },
  { icon: Monitor, title: "IT", href: "/roles/tech-support" },
];

const solutions = [
  {
    icon: Users,
    title: "Managed Staffing",
    description:
      "We place your team and run everything after hire: office space, equipment, HR, payroll, compliance, and performance support. All-inclusive flat rate.",
    href: "/solutions/managed-staffing",
  },
  {
    icon: Target,
    title: "Recruiting & Direct Hire",
    description:
      "We find, vet, and deliver the right candidate. You hire them directly onto your payroll. No ongoing management fees, just a great hire backed by our 90-day replacement guarantee.",
    href: "/solutions/recruiting-direct-hire",
  },
];

const AIHiring = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-20 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
              Elite Talent, Engineered by{" "}
              <span className="text-accent">AI</span>
            </h1>
            <p className="text-base md:text-xl text-primary-foreground/70 max-w-2xl mb-8">
              We combine AI screening with human judgment to surface the top 1% of Colombian remote talent — faster, smarter, and with 70% less cost than domestic hires.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How Our AI Vetting Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              The Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-4">
              How Our AI Vetting Works
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-6"
                >
                  <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 md:text-center">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                      Step {step.number}
                    </p>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters — Stats */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Why This Matters
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What AI Can't Replace */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                AI Finds Them. Humans Validate Them.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our AI is a filter, not a hiring manager. Every candidate who clears the model goes through a live panel interview with our senior team — assessing communication, problem-solving, and culture fit. Because the best hire is not just a match on paper.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              {humanFactors.map((factor, index) => (
                <motion.div
                  key={factor.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-5"
                >
                  <factor.icon className="w-6 h-6 text-success flex-shrink-0" />
                  <span className="font-semibold text-foreground">{factor.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roles We Place */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Every Role. AI-Vetted.
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              From finance to engineering to customer care, every candidate goes through the same rigorous process before you see a profile.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={role.href}
                  className="group relative bg-card rounded-2xl border border-border p-4 md:p-6 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 block"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <role.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h4 className="text-base md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {role.title}
                  </h4>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <span>View roles</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-hero rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/roles"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View All Roles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Two Ways to Work With Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Two Ways to Work With Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-4">
              Same AI Vetting. You Choose How We Engage.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={solution.href}
                  className="group block bg-card rounded-2xl border border-border p-5 md:p-8 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 h-full"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Build Your AI-Vetted Team?
            </h2>
            <p className="text-base sm:text-xl text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Book a free strategy call and we will show you exactly who we would recommend for your role.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIHiring;
