import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useParams } from "react-router-dom";
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
  CheckCircle,
  Users,
  Clock,
  DollarSign,
  ArrowRight,
  Info
} from "lucide-react";

interface RoleData {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  roles: string[];
  benefits: { title: string; description: string }[];
}

const roleData: Record<string, RoleData> = {
  "accounting": {
    title: "Accounting",
    subtitle: "Expert Financial Professionals",
    description: "Access skilled accounting professionals who understand U.S. financial standards. From bookkeeping to financial analysis, our vetted talent delivers accuracy and insight.",
    icon: Calculator,
    roles: ["Staff Accountants", "Senior Accountants", "Financial Analysts", "Bookkeepers", "Accounts Payable/Receivable", "Tax Specialists"],
    benefits: [
      { title: "U.S. GAAP Expertise", description: "Professionals trained in American accounting standards" },
      { title: "Cost Savings", description: "Up to 70% savings compared to domestic hires" },
      { title: "Real-Time Collaboration", description: "Same timezone work hours so they fit right in" },
    ]
  },
  "invoicing-billing": {
    title: "Invoicing & Billing",
    subtitle: "Streamline Your Revenue Cycle",
    description: "Dedicated billing specialists who ensure accurate invoicing, timely collections, and clean financial records that keep your cash flow healthy.",
    icon: FileText,
    roles: ["Billing Specialists", "Invoice Processors", "Collections Specialists", "Revenue Cycle Analysts", "Billing Coordinators"],
    benefits: [
      { title: "Faster Collections", description: "Reduce days sales outstanding with consistent follow-up" },
      { title: "Accuracy First", description: "Minimize billing errors and disputes" },
      { title: "Scalable Teams", description: "Flex capacity based on your billing volume" },
    ]
  },
  "software-developers": {
    title: "Software Developers",
    subtitle: "Elite Engineering Talent",
    description: "Full-stack, backend, and frontend developers who build scalable, maintainable code. Our engineers are fluent in modern frameworks and agile methodologies.",
    icon: Code2,
    roles: ["Full-Stack Developers", "Frontend Engineers", "Backend Engineers", "Mobile Developers", "DevOps Engineers", "QA Engineers"],
    benefits: [
      { title: "Top 1% Talent", description: "Rigorous technical vetting ensures only the best" },
      { title: "Modern Stack", description: "Expertise in React, Node, Python, AWS, and more" },
      { title: "Agile Ready", description: "Developers experienced with Scrum and Kanban" },
    ]
  },
  "tech-support": {
    title: "Tech Support",
    subtitle: "Reliable IT Support Teams",
    description: "Tier 1-3 technical support specialists who resolve issues quickly and keep your users productive. Available across all time zones.",
    icon: Monitor,
    roles: ["Help Desk Technicians", "Technical Support Specialists", "IT Support Engineers", "System Administrators", "Network Technicians"],
    benefits: [
      { title: "Multi-Tier Coverage", description: "From basic troubleshooting to complex escalations" },
      { title: "24/7 Availability", description: "Round-the-clock coverage options" },
      { title: "Certifications", description: "CompTIA, Microsoft, and vendor-specific credentials" },
    ]
  },
  "cybersecurity": {
    title: "Cybersecurity",
    subtitle: "Protect Your Digital Assets",
    description: "Security analysts and engineers who safeguard your infrastructure, monitor threats, and ensure compliance with industry standards.",
    icon: Shield,
    roles: ["Security Analysts", "SOC Analysts", "Penetration Testers", "Compliance Specialists", "Security Engineers", "Incident Responders"],
    benefits: [
      { title: "Proactive Defense", description: "Continuous monitoring and threat detection" },
      { title: "Compliance Ready", description: "HIPAA, SOC 2, PCI-DSS expertise" },
      { title: "Rapid Response", description: "Quick incident response and remediation" },
    ]
  },
  "business-intelligence": {
    title: "Business Intelligence",
    subtitle: "Data-Driven Decision Making",
    description: "BI analysts and data engineers who transform raw data into actionable insights, dashboards, and reports that drive strategic decisions.",
    icon: BarChart3,
    roles: ["BI Analysts", "Data Analysts", "Data Engineers", "Report Developers", "ETL Specialists", "Tableau/Power BI Experts"],
    benefits: [
      { title: "Insight Generation", description: "Turn complex data into clear narratives" },
      { title: "Tool Agnostic", description: "Expertise in Tableau, Power BI, Looker, and more" },
      { title: "Data Pipeline Experts", description: "Build and maintain reliable data infrastructure" },
    ]
  },
  "designers": {
    title: "Designers",
    subtitle: "Creative Excellence",
    description: "UI/UX designers, graphic artists, and product designers who create beautiful, user-centered experiences that strengthen your brand.",
    icon: Palette,
    roles: ["UI/UX Designers", "Product Designers", "Graphic Designers", "Motion Designers", "Brand Designers", "Design System Specialists"],
    benefits: [
      { title: "User-Centered", description: "Research-driven design that converts" },
      { title: "Modern Tools", description: "Figma, Sketch, Adobe Creative Suite experts" },
      { title: "Brand Consistency", description: "Design systems that scale with your company" },
    ]
  },
  "executive-assistants": {
    title: "Executive Assistants",
    subtitle: "Strategic Administrative Support",
    description: "Highly organized executive assistants who manage calendars, coordinate travel, handle communications, and keep executives focused on what matters.",
    icon: UserCircle,
    roles: ["Executive Assistants", "Personal Assistants", "Administrative Coordinators", "Office Managers", "Chief of Staff Support"],
    benefits: [
      { title: "Time Liberation", description: "Reclaim hours for strategic priorities" },
      { title: "Discretion", description: "Professionals who handle sensitive matters with care" },
      { title: "Proactive Support", description: "Anticipate needs before they arise" },
    ]
  },
  "legal-assistants": {
    title: "Legal Assistants",
    subtitle: "Precision Legal Support",
    description: "Legal assistants and paralegals who support case preparation, document review, and administrative tasks with attention to detail.",
    icon: Scale,
    roles: ["Paralegals", "Legal Assistants", "Legal Secretaries", "Document Review Specialists", "Contract Administrators"],
    benefits: [
      { title: "Detail Oriented", description: "Meticulous document preparation and review" },
      { title: "Cost Effective", description: "Reduce legal department overhead significantly" },
      { title: "Confidentiality", description: "Trained in handling sensitive legal matters" },
    ]
  },
  "project-management": {
    title: "Project Management",
    subtitle: "Deliver On Time, Every Time",
    description: "Certified project managers and coordinators who keep initiatives on track, stakeholders aligned, and deliverables on schedule.",
    icon: Kanban,
    roles: ["Project Managers", "Scrum Masters", "Program Managers", "Project Coordinators", "PMO Analysts", "Agile Coaches"],
    benefits: [
      { title: "Certified Experts", description: "PMP, CSM, and agile certified professionals" },
      { title: "Methodology Agnostic", description: "Waterfall, Agile, or hybrid approaches" },
      { title: "Risk Management", description: "Proactive identification and mitigation" },
    ]
  },
  "data-processing": {
    title: "Data Processing",
    subtitle: "Accurate Data, Fast Turnaround",
    description: "Data entry specialists and processing teams who handle high-volume data with accuracy, speed, and attention to quality.",
    icon: Database,
    roles: ["Data Entry Specialists", "Data Processors", "Data Quality Analysts", "Document Processors", "Data Migration Specialists"],
    benefits: [
      { title: "High Accuracy", description: "99%+ accuracy rates on data processing" },
      { title: "Scalable Volume", description: "Handle peak periods without delays" },
      { title: "Quality Assurance", description: "Built-in verification processes" },
    ]
  },
  "customer-care": {
    title: "Customer Care",
    subtitle: "Exceptional Customer Experiences",
    description: "Customer service representatives and support specialists who deliver empathetic, efficient service that builds loyalty.",
    icon: HeadphonesIcon,
    roles: ["Customer Service Reps", "Support Specialists", "Customer Success Managers", "Retention Specialists", "Chat Support Agents"],
    benefits: [
      { title: "Native English", description: "Clear communication with minimal accent" },
      { title: "Empathy Training", description: "Professionals who genuinely care" },
      { title: "Omnichannel", description: "Phone, email, chat, and social media support" },
    ]
  },
  "sales": {
    title: "Sales",
    subtitle: "Revenue Growth Partners",
    description: "SDRs, account executives, and sales specialists who understand the U.S. market and drive qualified pipeline for your team.",
    icon: TrendingUp,
    roles: ["Sales Development Reps", "Account Executives", "Lead Generation Specialists", "Sales Coordinators", "Inside Sales Reps"],
    benefits: [
      { title: "Market Knowledge", description: "Understand U.S. business culture and practices" },
      { title: "CRM Proficient", description: "Salesforce, HubSpot, and other tools" },
      { title: "Performance Driven", description: "Compensation aligned with results" },
    ]
  },
  "medical-processing": {
    title: "Medical Processing",
    subtitle: "Healthcare Administrative Excellence",
    description: "Medical billing, coding, and administrative specialists who understand HIPAA compliance and U.S. healthcare systems.",
    icon: Stethoscope,
    roles: ["Medical Coders", "Medical Billers", "Claims Processors", "Prior Authorization Specialists", "Medical Records Specialists"],
    benefits: [
      { title: "HIPAA Compliant", description: "Trained in healthcare privacy requirements" },
      { title: "Certified Coders", description: "CPC, CCS, and specialty certifications" },
      { title: "Revenue Cycle", description: "Maximize reimbursements, minimize denials" },
    ]
  },
};

const managedStaffingContent = {
  description: "We place your team member and run everything after — office, equipment, HR, payroll, compliance, and performance support. One flat rate. You manage the work. We handle everything else.",
  whatWeManage: [
    "Payroll administration",
    "HR operations & benefits",
    "Compliance management",
    "Onboarding & equipment setup",
    "Performance support",
    "90-day replacement guarantee",
  ],
  bestFor: [
    "Companies scaling without growing overhead",
    "Teams that want hands-off HR and payroll",
    "Businesses that want to move fast without the admin",
  ],
};

const recruitingContent = {
  description: "One-time engagement. We find, vet, and deliver the right candidate. You hire them directly onto your payroll. Backed by our 90-day replacement guarantee.",
  whatWeDeliver: [
    "Candidate sourcing",
    "8-step vetting process",
    "Curated shortlist of top picks",
    "Interview coordination",
    "Reference & background checks",
  ],
  bestFor: [
    "Companies with existing HR capacity",
    "One-time or project-based hiring needs",
    "Teams that want to own the employment relationship",
  ],
};

export const RolePage = () => {
  const { category } = useParams<{ category: string }>();
  const data = category ? roleData[category] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground">Role Not Found</h1>
          <p className="text-muted-foreground mt-4">Please select a valid role from the menu.</p>
          <Button variant="hero" className="mt-8" asChild>
            <Link to="/roles">Browse All Roles</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = data.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 sm:pt-32 sm:pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {data.subtitle}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-4 text-foreground">
              {data.title}
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clarity Line */}
      <section className="py-4 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-3 text-center">
            <Info className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Choose Managed Staffing</span> if you want us to run everything after the hire.
              <span className="font-medium text-foreground"> Choose Recruiting & Direct Hire</span> if you have internal HR and just need the right candidate.
            </p>
          </div>
        </div>
      </section>

      {/* Service Selector */}
      <section className="py-8 sm:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <Tabs defaultValue="managed" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8">
              <TabsTrigger value="managed" className="text-sm md:text-base">
                Managed Staffing
              </TabsTrigger>
              <TabsTrigger value="recruiting" className="text-sm md:text-base">
                Recruiting & Direct Hire
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="managed">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <p className="text-lg text-muted-foreground">{managedStaffingContent.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-card p-4 sm:p-6 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">We Handle All of This</h3>
                    <ul className="space-y-3">
                      {managedStaffingContent.whatWeManage.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Best For</h3>
                    <ul className="space-y-3">
                      {managedStaffingContent.bestFor.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/book">
                      Get Started with Managed Staffing
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    <Link to="/solutions/managed-staffing" className="text-primary hover:underline">
                      Learn more about Managed Staffing →
                    </Link>
                  </p>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="recruiting">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <p className="text-lg text-muted-foreground">{recruitingContent.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-card p-4 sm:p-6 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">What We Deliver</h3>
                    <ul className="space-y-3">
                      {recruitingContent.whatWeDeliver.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Best For</h3>
                    <ul className="space-y-3">
                      {recruitingContent.bestFor.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/book">
                      Get Started with Direct Hire
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    <Link to="/solutions/recruiting-direct-hire" className="text-primary hover:underline">
                      Learn more about Recruiting & Direct Hire →
                    </Link>
                  </p>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 sm:py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <DollarSign className="w-6 h-6" />
                <span className="text-xl sm:text-3xl font-bold">70%</span>
              </div>
              <p className="text-muted-foreground">Cost Savings vs. U.S. Hires</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <Clock className="w-6 h-6" />
                <span className="text-xl sm:text-3xl font-bold">2-3 Weeks</span>
              </div>
              <p className="text-muted-foreground">Average Time to Hire</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <Users className="w-6 h-6" />
                <span className="text-xl sm:text-3xl font-bold">2%</span>
              </div>
              <p className="text-muted-foreground">Annualized Turnover Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Fill */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-xl sm:text-3xl font-bold text-foreground">Positions We Fill</h2>
            <p className="text-muted-foreground mt-4">Top 1% candidates — background checked, English assessed, skills tested, ready to start</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {data.roles.map((role, index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-xl sm:text-3xl font-bold text-foreground">Why TBT Works for {data.title}</h2>
            <p className="text-muted-foreground mt-4">70% less cost. Same hours. 2% turnover. 90-day guarantee. That's the deal.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
            {data.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-4 sm:p-6 rounded-xl border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
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
              Get Your First {data.title} Candidates in 72 Hours
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              One call. We'll show you what the role costs, who's available, and how fast we can get started. No pressure.
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

export default RolePage;
