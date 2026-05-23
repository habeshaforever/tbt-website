import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  ArrowRight,
  Users,
  HeadphonesIcon,
  UserCircle,
  Calculator,
  Code2
} from "lucide-react";

const whatIsIncluded = [
  "Payroll administration",
  "HR operations",
  "Compliance support",
  "Onboarding support",
  "Performance support",
  "Replacement guarantee",
];

const howItWorks = [
  {
    step: "01",
    title: "Discovery & Role Definition",
    description: "We learn about your needs, team dynamics, and define the ideal candidate profile.",
  },
  {
    step: "02",
    title: "Talent Sourcing & Vetting",
    description: "Our team sources, screens, and carefully vets candidates from our South American talent pool.",
  },
  {
    step: "03",
    title: "Onboarding & Integration",
    description: "We handle onboarding and make sure new hires fit right in with your existing team.",
  },
  {
    step: "04",
    title: "Ongoing Management & Support",
    description: "We manage payroll, HR, compliance, and performance, so you can focus on your business.",
  },
];

const popularRoles = [
  { title: "Customer Care", href: "/roles/customer-care", icon: HeadphonesIcon },
  { title: "Executive Assistants", href: "/roles/executive-assistants", icon: UserCircle },
  { title: "Accounting", href: "/roles/accounting", icon: Calculator },
  { title: "Software Developers", href: "/roles/software-developers", icon: Code2 },
];

export const ManagedStaffingPage = () => {
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
              <Users className="w-10 h-10 text-primary" />
            </div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Ongoing Team Management
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Managed Staffing
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              We don't just find your talent. We manage the team so you can focus on your business.
              From payroll to performance, we handle the day-to-day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button variant="hero" size="lg" asChild>
                <Link to="/book">Book a Strategy Call</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/solutions/recruiting-direct-hire">Compare to Direct Hire</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Is Managed Staffing */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-6">What Is Managed Staffing?</h2>
            <p className="text-lg text-muted-foreground">
              Managed Staffing is an ongoing partnership where Tandem Bridge Talent provides and manages 
              your remote team members. We handle payroll, HR operations, compliance, and performance 
              management, giving you a fully operational team without the administrative burden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Is Included */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-xl sm:text-3xl font-bold text-foreground">What's Included</h2>
            <p className="text-muted-foreground mt-4">Everything you need for a hands-off team experience</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whatIsIncluded.map((item, index) => (
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
            <p className="text-muted-foreground mt-4">Four simple steps to your managed team</p>
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

      {/* Popular Roles */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-xl sm:text-3xl font-bold text-foreground">Popular Roles</h2>
            <p className="text-muted-foreground mt-4">Browse roles commonly filled through Managed Staffing</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {popularRoles.map((role, index) => (
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
              Ready to Build Your Managed Team?
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Book a strategy call to discuss your needs. We'll show you how Managed Staffing 
              can transform your operations.
            </p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
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

export default ManagedStaffingPage;
