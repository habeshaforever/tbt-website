import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  HeadphonesIcon, 
  TrendingUp, 
  Code2, 
  UserCircle, 
  Kanban, 
  Palette, 
  Database, 
  Monitor,
  Shield,
  FileText,
  Stethoscope,
  BarChart3,
  Scale,
  ArrowRight,
  Info
} from "lucide-react";

const roleCategories = [
  {
    category: "Accounting & Finance",
    roles: [
      { title: "Accounting", href: "/roles/accounting", icon: Calculator },
      { title: "Invoicing & Billing", href: "/roles/invoicing-billing", icon: FileText },
    ]
  },
  {
    category: "Technology & IT",
    roles: [
      { title: "Software Developers", href: "/roles/software-developers", icon: Code2 },
      { title: "Tech Support", href: "/roles/tech-support", icon: Monitor },
      { title: "Cybersecurity", href: "/roles/cybersecurity", icon: Shield },
      { title: "Business Intelligence", href: "/roles/business-intelligence", icon: BarChart3 },
    ]
  },
  {
    category: "Creative & Design",
    roles: [
      { title: "Designers", href: "/roles/designers", icon: Palette },
    ]
  },
  {
    category: "Operations & Admin",
    roles: [
      { title: "Executive Assistants", href: "/roles/executive-assistants", icon: UserCircle },
      { title: "Legal Assistants", href: "/roles/legal-assistants", icon: Scale },
      { title: "Project Management", href: "/roles/project-management", icon: Kanban },
      { title: "Data Processing", href: "/roles/data-processing", icon: Database },
    ]
  },
  {
    category: "Customer Facing",
    roles: [
      { title: "Customer Care", href: "/roles/customer-care", icon: HeadphonesIcon },
      { title: "Sales", href: "/roles/sales", icon: TrendingUp },
    ]
  },
  {
    category: "Healthcare",
    roles: [
      { title: "Medical Processing", href: "/roles/medical-processing", icon: Stethoscope },
    ]
  },
];

export const RolesIndexPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-10 sm:pt-32 sm:pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Browse by Role
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Every Role. Top 1% Talent.
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              We place Colombian professionals across dozens of functions. Every candidate clears our 8-step vetting process — background checked, English assessed, skills tested. Available through Managed Staffing or Recruiting & Direct Hire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clarity Line */}
      <section className="py-6 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-3 text-center">
            <Info className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Choose Managed Staffing</span> if you want us to run everything after the hire.
              <span className="font-medium text-foreground"> Choose Recruiting & Direct Hire</span> if you have internal HR and just need the right candidate delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {roleCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">{category.category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.roles.map((role, roleIndex) => (
                    <motion.div
                      key={role.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: roleIndex * 0.05 }}
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
              Don't Know Which Service Fits? Let's Figure It Out.
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Book a 30-minute strategy call. We'll look at your role, your situation, and tell you exactly which option makes the most sense — and what it costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/book">
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/solutions/managed-staffing">Explore Managed Staffing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RolesIndexPage;
