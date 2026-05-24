import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  ArrowRight,
  Target,
  HeadphonesIcon,
  UserCircle,
  Calculator,
  Code2
} from "lucide-react";

const whatWeDeliver = [
  "Candidate sourcing",
  "8-step vetting process",
  "Curated shortlist of top picks",
  "Interview coordination",
  "Reference & background checks",
  "90-day replacement guarantee",
];

const howItWorks = [
  {
    step: "01",
    title: "One Call. We Learn Everything.",
    description: "We get on a call, learn your role requirements, your culture, and exactly what you've tried before. The more we know, the better the match.",
  },
  {
    step: "02",
    title: "We Find the Top 1%",
    description: "Within 72 hours, we present pre-vetted candidates from our nearshore talent network, background checked, English assessed, and skills tested.",
  },
  {
    step: "03",
    title: "You Interview. We Coordinate.",
    description: "You get a curated shortlist of top picks. We schedule and coordinate interviews on your timeline.",
  },
  {
    step: "04",
    title: "You Hire. They're Yours.",
    description: "Pick your person. They join your team directly as your employee. The hire is done — and backed by our 90-day replacement guarantee.",
  },
];

const rolesWeRecruit = [
  { title: "Customer Care", href: "/roles/customer-care", icon: HeadphonesIcon },
  { title: "Executive Assistants", href: "/roles/executive-assistants", icon: UserCircle },
  { title: "Accounting", href: "/roles/accounting", icon: Calculator },
  { title: "Software Developers", href: "/roles/software-developers", icon: Code2 },
];

export const RecruitingDirectHirePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              The Best Hire You'll Make This Year
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Recruiting & Direct Hire
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              We find, vet, and deliver the right candidate. You hire them directly onto your payroll. No ongoing management fees — just a great hire backed by our 90-day replacement guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button variant="hero" size="lg" asChild>
                <Link to="/book">Book a Strategy Call</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/solutions/managed-staffing">Compare to Managed Staffing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Is Recruiting & Direct Hire */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-6">What Is Recruiting & Direct Hire?</h2>
            <p className="text-lg text-muted-foreground">
              Recruiting & Direct Hire is a one-time engagement. We source, vet, and deliver the best candidates from our nearshore talent network. You interview, choose, and hire them directly onto your payroll. You handle the day-to-day from there. Best for companies that have internal HR capacity and want to own the employment relationship without doing the hard work of finding the right person.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-xl sm:text-3xl font-bold text-foreground">What We Deliver</h2>
            <p className="text-muted-foreground mt-4">We do the hard work. You show up, interview, and pick the one you want.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whatWeDeliver.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-xl sm:text-3xl font-bold text-foreground">How It Works</h2>
            <p className="text-muted-foreground mt-4">From first call to hired candidate — average two weeks</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles We Recruit */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-xl sm:text-3xl font-bold text-foreground">Roles We Recruit</h2>
            <p className="text-muted-foreground mt-4">These are the most commonly requested roles for direct hire — though we recruit across dozens of functions</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {rolesWeRecruit.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={role.href}
                  className="group block bg-card rounded-xl border border-border p-4 sm:p-6 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{role.title}</h3>
                  <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/roles">View All Roles</Link>
            </Button>
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
              Stop Sorting Resumes. We'll Deliver the Best Ones.
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Book a strategy call and we'll show you what the talent looks like, what it costs, and how fast we can deliver your first shortlist.
            </p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/book">
                Get Your First Candidates in 72 hrs
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

export default RecruitingDirectHirePage;
