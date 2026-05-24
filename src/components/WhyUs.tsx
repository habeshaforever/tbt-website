import { motion } from "framer-motion";
import { Globe, Clock, Users, DollarSign, Award, Building2, TrendingUp, BadgeDollarSign, CalendarDays, Heart } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Same Role. 70% Less Cost.",
    description: "That accountant costing you $75K/year in the U.S.? The same caliber professional through TBT costs 70% less. For Managed Staffing, that includes office space, equipment, and HR in one flat monthly rate.",
  },
  {
    icon: Clock,
    title: "Your Hours. Their Default.",
    description: "Your team works on U.S. time zones. They're at their desk when you open your laptop. No 6 AM calls. No overnight Slack threads.",
  },
  {
    icon: Globe,
    title: "English Good Enough for Client Calls",
    description: "Every candidate passes a rigorous English fluency assessment. They run meetings, take client calls, and write reports. No interpreter needed. No misunderstandings.",
  },
  {
    icon: Users,
    title: "2% Turnover Rate",
    description: "Industry average is 18–20%. Ours is 2. The person you hire today will still be working for you in five years. Hire once. Keep them.",
  },
  {
    icon: TrendingUp,
    title: "98% Client Satisfaction Rate",
    description: "Almost every client who hires through us comes back to hire again. If we didn't deliver, they wouldn't. It's that simple.",
  },
  {
    icon: Building2,
    title: "Office, Equipment, and Internet Included",
    description: "Your team shows up to a fully equipped professional office every day. No makeshift home setups. No equipment costs on your side.",
  },
  {
    icon: Award,
    title: "Fewer Than 1 in 100 Make It Through",
    description: "8-step vetting: background checks, skills tests, English assessment, cultural interview. We don't present anyone we wouldn't hire ourselves.",
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
              Most Staffing Agencies Send You a Body. We Send You a Keeper.
            </h2>
            <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
              Offshore is cheap until you add up the time zones, the miscommunication, and the 18% annual churn. U.S. hires are great until you see the $80,000 salary. Our model gives you the caliber of a full-time U.S. hire at a fraction of the cost. And the person actually stays.
            </p>

            <div className="mt-5 sm:mt-8 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BadgeDollarSign className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">We Pay More So They Stay</p>
                  <p className="text-sm text-muted-foreground">We pay above-market rates so good people stay. Our 2% annual turnover versus the industry's 18–20% is the proof.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CalendarDays className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Same Hours as Your Team</p>
                  <p className="text-sm text-muted-foreground">Monday through Friday. Your hours. Your time zone. They're at their desk when you are, ready from the first message of the day.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Not Contractors. Your Team.</p>
                  <p className="text-sm text-muted-foreground">We treat every placement like a person, not a transaction. That culture is why our team members stay an average of four-plus years with the same client.</p>
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
