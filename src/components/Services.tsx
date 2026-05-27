import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Users,
  Target,
  ArrowRight,
  Info
} from "lucide-react";

const primaryServices = [
  {
    icon: Users,
    title: "Managed Staffing",
    description: "We place your team and run everything after hire: office space, equipment, HR, payroll, compliance, and performance support. All-inclusive flat rate. You direct the work. We handle everything else.",
    href: "/solutions/managed-staffing"
  },
  {
    icon: Target,
    title: "Recruiting & Direct Hire",
    description: "We find, vet, and deliver the right candidate. You hire them directly onto your payroll. No ongoing management fees, just a great hire backed by our 90-day replacement guarantee.",
    href: "/solutions/recruiting-direct-hire"
  },
];


export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-8 md:mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Two Ways to Work With Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-foreground text-balance">
            Full Management or Just the Hire. You Pick.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Some clients want us to run everything after hire. Others just need the right candidate. Either way, we do the heavy lifting.
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
            Not sure which fits? If you want to own the employment relationship, <span className="font-medium text-foreground">Direct Hire</span> is the move. If you'd rather we run payroll, HR, and compliance too, <span className="font-medium text-foreground">Managed Staffing</span> handles all of it.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
