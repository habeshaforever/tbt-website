import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, BarChart2, FileText, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const sections = [
  {
    icon: BookOpen,
    title: "Blog",
    description:
      "Practical articles on remote hiring, team management, and Latin American talent.",
    href: "/resources/blog",
    cta: "Read the Blog",
  },
  {
    icon: FileText,
    title: "Case Studies",
    description:
      "Real examples of how US and Canadian companies have built successful remote teams through TBT.",
    href: "/resources/case-studies",
    cta: "View Case Studies",
  },
  {
    icon: BarChart2,
    title: "Hiring Guides",
    description:
      "Step by step guides to help you hire, onboard, and manage remote Latin American professionals.",
    href: "/resources/hiring-guides",
    cta: "Read the Guides",
  },
  {
    icon: TrendingUp,
    title: "Insights",
    description:
      "Data, trends, and analysis on the Latin American talent market and the future of nearshore staffing.",
    href: "/resources/insights",
    cta: "View Insights",
  },
];

const ResourcesHub = () => {
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
              <span className="text-primary">Resources</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Hiring guides, industry insights, case studies, and practical content to help US and
              Canadian companies build better remote teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{section.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{section.description}</p>
                <Button variant="hero" size="sm" asChild>
                  <Link to={section.href}>{section.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesHub;
