import { motion } from "framer-motion";
import { Globe, Clock, Users, DollarSign, Award, Building2, TrendingUp, BadgeDollarSign, CalendarDays, Heart } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "70% Cost Savings",
    description: "Reduce staffing costs significantly while maintaining quality. Our nearshore model delivers enterprise-level talent at a fraction of US rates.",
  },
  {
    icon: Clock,
    title: "Same Time Zone",
    description: "Our South American teams operate during U.S. business hours, enabling real-time collaboration. No more waiting overnight for responses.",
  },
  {
    icon: Globe,
    title: "Near-Native English",
    description: "Our talent pool consists of professionals with excellent English communication skills, so they fit right into your team.",
  },
  {
    icon: Users,
    title: "2% Turnover Rate",
    description: "Our placements stay. Industry average turnover is 15 to 20 percent. Ours is 2.",
  },
  {
    icon: TrendingUp,
    title: "98% Retention",
    description: "Clients who place with us come back. Our retention rate reflects the quality of every match we make.",
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    description: "We offer both flexible remote placements and in-office teams. Whether your hire works from home or from one of our South American offices, they'll have everything they need to perform at the highest level.",
  },
  {
    icon: Award,
    title: "Top 1% Talent",
    description: "Rigorous vetting process ensures you get access to the best professionals across every discipline and specialty.",
  },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
              ROI Maximized, Quality Guaranteed
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              While offshore staffing might offer lower hourly wages, it often falls short on 
              long-term return on investment. Our nearshore model emphasizes quality talent 
              retention, enabling employees to develop company-specific expertise.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BadgeDollarSign className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Higher Wages Than Competitors</p>
                  <p className="text-sm text-muted-foreground">We pay above market rates across the region, attracting top talent</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CalendarDays className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">5-Day Work Week</p>
                  <p className="text-sm text-muted-foreground">All TBT team members work a standard 5-day U.S. schedule</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Family-First Culture</p>
                  <p className="text-sm text-muted-foreground">We treat team members as family with trust and respect</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`bg-card p-5 rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all ${
                  index === 0 ? "col-span-2" : ""
                }`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
