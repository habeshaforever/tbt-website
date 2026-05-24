import { motion } from "framer-motion";
import { Globe, Clock, Users, DollarSign, Award, Building2, TrendingUp, BadgeDollarSign, CalendarDays, Heart } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "70% Less Than U.S. Rates",
    description: "An equivalent U.S. hire costs $70K–$100K per year in salary alone. Our model delivers the same output for 70% less — office, equipment, and HR included.",
  },
  {
    icon: Clock,
    title: "Works Your Hours, On Your Calendar",
    description: "Colombia runs on Central and Eastern time. Your team is online when you start your day. No overnight waits. No scheduling around 12-hour time differences.",
  },
  {
    icon: Globe,
    title: "You Won't Know They're Not Next Door",
    description: "Our candidates pass rigorous English fluency assessments. They run meetings, take client calls, and write reports — no interpreter needed.",
  },
  {
    icon: Users,
    title: "2% Turnover Rate",
    description: "Industry average is 18–20%. Ours is 2. The person you hire today will still be working for you in five years. Hire once. Keep them.",
  },
  {
    icon: TrendingUp,
    title: "98% of Clients Come Back for More",
    description: "When something works, you stick with it. Almost every client who hires through us comes back to hire again. That says everything.",
  },
  {
    icon: Building2,
    title: "Fully Equipped and Ready to Work",
    description: "Office space, hardware, internet, equipment — all included. Your team shows up to a professional environment and gets straight to work.",
  },
  {
    icon: Award,
    title: "Fewer Than 1 in 100 Make It Through",
    description: "Background checks, skills tests, English assessments, cultural interviews — we run it all. We don't send anyone we wouldn't hire ourselves.",
  },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why TBT Works When Others Don't
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-foreground">
              Most Staffing Companies Send You a Warm Body. We Send You a Keeper.
            </h2>
            <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
              Offshore teams are cheap until you factor in time zones, communication problems,
              and constant turnover. U.S. hires are great until you see the $80,000 salary.
              Our model gives you the quality of a full-time U.S. hire at nearshore cost —
              and the person actually stays.
            </p>

            <div className="mt-5 sm:mt-8 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BadgeDollarSign className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">We Pay More, So They Stay</p>
                  <p className="text-sm text-muted-foreground">We pay our team members above-market rates across Colombia. Happy people don't quit. That's why our turnover is 2%.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CalendarDays className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Same Hours as Your Team</p>
                  <p className="text-sm text-muted-foreground">Monday through Friday. Your hours. Your time zone. Your TBT team member is there when you are.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">They're Not Contractors. They're Your People.</p>
                  <p className="text-sm text-muted-foreground">We treat every team member like family. That culture is why our placements stay an average of four-plus years.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-8 lg:mt-0">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`bg-card p-3 sm:p-4 md:p-5 rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all ${
                  index === 0 ? "sm:col-span-2" : ""
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
