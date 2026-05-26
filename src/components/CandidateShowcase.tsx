import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Candidate {
  name: string;
  role: string;
  city: string;
  country: string;
  flag: string;
  english: string;
  skills: string[];
  gumletId?: string;
}

const candidates: Candidate[] = [
  {
    name: "Chelsea Johnston",
    role: "Customer Success Manager",
    city: "Bogotá",
    country: "Colombia",
    flag: "🇨🇴",
    english: "Native-Level English",
    skills: ["Go High Level", "VanillaSoft", "Loom", "Zoom"],
    gumletId: "6a1524508810b357ebce1dc5",
  },
  {
    name: "Andrés V.",
    role: "Customer Success Manager",
    city: "Medellín",
    country: "Colombia",
    flag: "🇨🇴",
    english: "Native-Level English",
    skills: ["Zendesk", "CRM", "Client Retention"],
  },
  {
    name: "Valentina R.",
    role: "Executive Assistant",
    city: "Cali",
    country: "Colombia",
    flag: "🇨🇴",
    english: "Highly Fluent English",
    skills: ["G Suite", "Asana", "Calendar Mgmt"],
  },
  {
    name: "Santiago M.",
    role: "Software Developer",
    city: "Bogotá",
    country: "Colombia",
    flag: "🇨🇴",
    english: "Business Fluent English",
    skills: ["React", "Node.js", "PostgreSQL"],
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
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            The Talent You Get Access To
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Meet the Caliber of Talent We Place
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            Every candidate below cleared our 8-step vetting process. Background check, skills test, English assessment, and a live cultural interview. These are real sample profiles. You get people like this within days of starting.
          </p>
        </motion.div>

        {/* Candidate Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

              {/* Card info — bottom */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-foreground font-semibold text-base">{candidate.name}</p>
                    <p className="text-primary font-medium text-sm mt-0.5">{candidate.role}</p>
                    <p className="text-muted-foreground text-xs mt-1">{candidate.city}, {candidate.country} {candidate.flag}</p>
                  </div>
                </div>

                <div className="border-t border-border w-full my-3" />

                <span className="text-xs font-medium bg-success/10 text-success rounded-full px-3 py-1 self-start mb-3">
                  {candidate.english}
                </span>

                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 mt-4 text-xs text-success font-medium">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  Available Now
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
            These are sample profiles. Real matched candidates are tailored to your exact role.
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
