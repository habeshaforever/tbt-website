import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Tag,
  MessageSquare,
  Pencil,
  ShieldCheck,
  Database,
  Clock,
  GraduationCap,
  Shield,
  Cpu,
  Building2,
  Code2,
  Layers,
  ClipboardList,
  ScanSearch,
  Users,
  Rocket,
  Target,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "$28.5B", label: "AI annotation market by 2034" },
  { value: "28%", label: "Annual market growth rate" },
  { value: "90%", label: "Of AI teams rely on external labeling support" },
];

const services = [
  {
    icon: Tag,
    title: "Data Labeling & Annotation",
    description:
      "Dedicated teams that tag, classify, and structure your raw text, image, and audio data. Built for volume, managed for quality, and calibrated to your specific annotation guidelines.",
  },
  {
    icon: MessageSquare,
    title: "RLHF & Human Feedback",
    description:
      "Specialists who rank model outputs, score responses, and provide the human signal that makes reinforcement learning work. Same timezone as your ML team. Real-time collaboration, not async batches.",
  },
  {
    icon: Pencil,
    title: "Prompt Engineering",
    description:
      "Professionals who design, test, and refine the prompts that shape your model's behavior. Whether you're building instruction datasets or adversarial test sets, they know how to write for models.",
  },
  {
    icon: ShieldCheck,
    title: "Model Evaluation & Red Teaming",
    description:
      "QA specialists who stress-test your model outputs for accuracy, bias, safety, and edge cases. Essential before any production deployment and ongoing after it.",
  },
  {
    icon: Database,
    title: "Training Data Curation",
    description:
      "Teams that clean, organize, deduplicate, and structure your datasets so your training pipeline stays unblocked. The unglamorous work that determines whether your model learns anything useful.",
  },
];

const colombiaCards = [
  {
    icon: Clock,
    title: "US Timezone Overlap",
    description:
      "Colombia runs UTC-5. Your team works your hours, attends your standups, and flags issues in real time.",
  },
  {
    icon: GraduationCap,
    title: "Educated Workforce",
    description:
      "Colombia produces over 280,000 university graduates per year. Our annotators and evaluators aren't gig workers — they're trained professionals.",
  },
  {
    icon: Shield,
    title: "Managed, Not Freelance",
    description:
      "We handle HR, payroll, compliance, and quality management. You get a team, not a contractor pool.",
  },
];

const audience = [
  {
    icon: Cpu,
    title: "AI Startups",
    description: "Pre-training or fine-tuning your first model and need a labeling team fast.",
  },
  {
    icon: Building2,
    title: "Enterprise AI Teams",
    description: "Scaling an existing annotation pipeline without ballooning internal headcount.",
  },
  {
    icon: Code2,
    title: "AI Labs & Research Teams",
    description: "Running RLHF, red teaming, or eval studies that require skilled, consistent evaluators.",
  },
  {
    icon: Layers,
    title: "SaaS Companies Adding AI",
    description: "Adding intelligent features to your product and need prompt engineers or QA testers.",
  },
];

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Define Your Workflow",
    description:
      "You tell us what tasks look like, what quality means, and how you measure it. We design the team around that.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "We Source & Screen",
    description:
      "We pull from our vetted Colombia talent pool and run role-specific assessments for annotation accuracy, language quality, and domain knowledge.",
  },
  {
    number: "03",
    icon: Users,
    title: "You Approve the Team",
    description:
      "Review profiles, run sample tasks, and confirm your team before anyone starts. No surprises.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Team Goes Live",
    description:
      "Your dedicated team begins work in your tools, on your schedule, hitting your SLAs from day one.",
  },
];

const engagements = [
  {
    icon: Users,
    title: "Managed AI Team",
    description:
      "We build and run your annotation or evaluation team from Colombia. HR, payroll, QA management, and performance oversight all included. You direct the work, we handle everything else.",
    href: "/solutions/managed-staffing",
  },
  {
    icon: Target,
    title: "Recruiting & Direct Hire",
    description:
      "We source and vet your AI training specialists and you hire them directly. Best for teams that want to own the employment relationship and integrate talent into existing workflows.",
    href: "/solutions/recruiting-direct-hire",
  },
];

const AITrainingTeams = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-20 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-4">
              A Growing $28 Billion Industry
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
              The Human Layer Behind Every Great AI Model
            </h1>
            <p className="text-base md:text-xl text-primary-foreground/70 max-w-2xl mb-8">
              AI models don't train themselves. Behind every LLM, every chatbot, every recommendation engine is a team of humans labeling data, ranking outputs, and fine-tuning responses. We build those teams for you — vetted, bilingual, Colombia-based, and ready in weeks.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book">
                Build Your AI Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-4">
              Why This Matters Now
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              AI Is Eating the World. Humans Still Feed It.
            </h2>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              Every foundation model, every fine-tuned LLM, every AI product in production needed thousands of hours of human feedback to get there. That demand isn't slowing down.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 text-center"
              >
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Staff */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-4">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Five Teams That Make AI Models Work
            </h2>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              Whether you're pre-training, fine-tuning, or running evals, we build the team that keeps your pipeline moving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card border border-border rounded-2xl p-6 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 ${
                  index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Colombia */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-4">
              Why Colombia
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              The Right Country for This Kind of Work
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                Most annotation work gets pushed to gig workers in Asia with no accountability, no continuity, and no real quality control. Our Colombia-based teams are different. They're full-time, dedicated to your project, and working your hours — not submitting batches at 3am.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              {colombiaCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{card.title}</p>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-4">
              Built For
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              If You're Building AI, You Need This
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {audience.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground mb-2">{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-4">
              The Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              From Requirement to Running Team in 2 to 3 Weeks
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-6"
                >
                  <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 md:text-center">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                      Step {step.number}
                    </p>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Ways to Work */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-4">
              Engagement Models
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Fully Managed or Direct Hire. Your Call.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {engagements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="group block bg-card rounded-2xl border border-border p-5 md:p-8 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 h-full"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-20 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Your Model Is Only as Good as the Humans Behind It.
            </h2>
            <p className="text-base sm:text-xl text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Tell us what you're building and we'll show you the team that trains it.
            </p>
            <Button variant="hero" size="lg" asChild>
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

export default AITrainingTeams;
