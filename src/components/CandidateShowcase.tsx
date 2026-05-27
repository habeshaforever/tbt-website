import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Candidate {
  name: string;
  role: string;
  city: string;
  country: string;
  english: string;
  outcome: string;
  skills: string[];
  gumletId?: string;
}

const candidates: Candidate[] = [
  {
    name: "Chelsea Johnston",
    role: "Customer Success Manager",
    city: "Bogotá",
    country: "Colombia",
    english: "Native-Level English",
    outcome: "Managing CRM pipelines & client success for US-based companies",
    skills: ["Go High Level", "VanillaSoft", "Loom", "Zoom"],
    gumletId: "6a1524508810b357ebce1dc5",
  },
  {
    name: "Ashley Garcia",
    role: "Operations & Admin Support",
    city: "Manizales",
    country: "Colombia",
    english: "Native-Level English",
    outcome: "10+ years running operations & onboarding for US businesses",
    skills: ["Onboarding", "Compliance", "CRM", "Remote Operations"],
    gumletId: "6a1524514e6fd4b445caf623",
  },
  {
    name: "Laura Avila",
    role: "Operations & Client Support",
    city: "Medellín",
    country: "Colombia",
    english: "Native-Level English",
    outcome: "Currently supporting a Florida-based company with intake, billing & coordination",
    skills: ["Client Communication", "Case Coordination", "Billing Support", "Healthcare Coordination"],
    gumletId: "6a152450f790155bb58b48b8",
  },
  {
    name: "Karen Ayala",
    role: "Sales & Admin Support",
    city: "Bogotá",
    country: "Colombia",
    english: "Native-Level English",
    outcome: "Handled 250+ calls/day & managed CRM admin for US companies in Texas & Arizona",
    skills: ["Cold Calling", "CRM", "Appointment Setting", "Admin Control"],
    gumletId: "6a1524504e6fd4b445caf5f0",
  },
];

export const CandidateShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Real Candidates. Real English. Real Results.
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-foreground text-balance">
            Hear Them Speak. Hire With Confidence.
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            Every candidate below cleared our 8-step vetting process: background check, skills test, English fluency assessment, and cultural interview. Press play and hear for yourself.
          </p>
        </motion.div>

        {/* Candidate Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {candidates.map((candidate, index) => (
            <motion.div
              key={candidate.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Video or placeholder — top of card */}
              <div className="relative w-full aspect-video bg-muted">
                {candidate.gumletId ? (
                  <iframe
                    loading="lazy"
                    title={`${candidate.name} intro video`}
                    src={`https://play.gumlet.io/embed/${candidate.gumletId}?autoplay=false&loop=false&disable_player_controls=false&preload=true`}
                    style={{ border: "none", position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}
                    referrerPolicy="origin"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted">
                    <Play className="w-8 h-8 text-muted-foreground/40" />
                    <span className="text-xs text-muted-foreground">Video Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Card info */}
              <div className="p-5 flex flex-col flex-1">

                {/* Name, role, location + US badge */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <p className="text-foreground font-semibold text-base">{candidate.name}</p>
                    <p className="text-primary font-medium text-sm mt-0.5">{candidate.role}</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <img
                        src="https://flagcdn.com/16x12/co.png"
                        srcSet="https://flagcdn.com/32x24/co.png 2x"
                        width="16"
                        height="12"
                        alt="Colombia"
                        className="rounded-sm object-cover"
                      />
                      <p className="text-muted-foreground text-xs">{candidate.city}, {candidate.country}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-primary/20 text-primary shadow-sm ring-1 ring-primary/10 whitespace-nowrap shrink-0">
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1"/>
                      <path d="M3.5 6L5.5 8L8.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    US Verified
                  </span>
                </div>

                {/* Outcome statement */}
                <p className="text-muted-foreground text-xs leading-relaxed mt-2 mb-3 italic">
                  "{candidate.outcome}"
                </p>

                <div className="border-t border-border w-full mb-3" />

                {/* English level */}
                <span className="text-xs font-medium bg-success/10 text-success rounded-full px-3 py-1 self-start mb-3">
                  ✓ {candidate.english}
                </span>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {candidate.skills.map((skill) => (
                    <span key={skill} className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Availability */}
                <div className="flex items-center gap-1.5 mt-auto text-xs text-success font-medium">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  Available. Placeable Within 72 Hours
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-6">
            These are real candidates from our active talent pool. Every placement is matched to your exact role and team culture.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/book">
              Book a Call to See Live Profiles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};
