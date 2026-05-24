import { motion } from "framer-motion";
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
  Users,
  Target,
  ArrowRight,
  Info
} from "lucide-react";

const primaryServices = [
  {
    icon: Users,
    title: "Managed Staffing",
    description: "We place your team and run everything after hire — payroll, HR, compliance, office space, and equipment. All-inclusive. You focus on the work. We handle everything else.",
    href: "/solutions/managed-staffing"
  },
  {
    icon: Target,
    title: "Recruiting & Direct Hire",
    description: "We find, vet, and deliver the right candidate. You hire them directly onto your payroll. No ongoing fees — just the best hire you'll make this year.",
    href: "/solutions/recruiting-direct-hire"
  },
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

export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Pick How You Want to Work With Us
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Some clients want us to run everything. Others just need the hire. Either way, we handle the hard part.
          </p>
        </motion.div>

        {/* Primary Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {primaryServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="group block bg-card rounded-2xl border border-border p-5 md:p-8 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 h-full"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Clarity Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start sm:items-center justify-center gap-3 text-left sm:text-center mb-6 sm:mb-8 md:mb-16 p-3 sm:p-4 bg-muted/50 rounded-lg border border-border"
        >
          <Info className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-muted-foreground">
            Not sure which fits?{" "}
            <span className="font-medium text-foreground">Managed Staffing</span> is the most popular choice — clients who use it rarely go back to doing it themselves.
          </p>
        </motion.div>

        {/* Browse by Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground">Browse by Role</h3>
          <p className="text-muted-foreground mt-2">
            Every candidate passes our 8-step vetting process. These aren't job board applicants — they're screened, tested, and ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
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
                
                {/* Hover accent line */}
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
  );
};
