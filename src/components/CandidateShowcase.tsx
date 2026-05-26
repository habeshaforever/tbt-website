import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Candidate {
  initials: string;
  name: string;
  role: string;
  city: string;
  country: string;
  flag: string;
  years: string;
  english: string;
  skills: string[];
  gumletId?: string;
}

const candidates: Candidate[] = [
  {
    initials: "CJ",
    name: "Chelsea Johnston",
    role: "Customer Success Manager",
    city: "Bogotá",
    country: "Colombia",
    flag: "🇨🇴",
    years: "Available Now",
    english: "C2 Fluent",
    skills: ["Go High Level", "VanillaSoft", "Loom", "Zoom"],
    gumletId: "6a1524508810b357ebce1dc5",
  },
  {
    initials: "AV",
    name: "Andrés V.",
    role: "Customer Success Manager",
    city: "Medellín",
    country: "Colombia",
    flag: "🇨🇴",
    years: "5 yrs exp",
    english: "C2 Fluent",
    skills: ["Zendesk", "CRM", "Client Retention"],
  },
  {
    initials: "VR",
    name: "Valentina R.",
    role: "Executive Assistant",
    city: "Cali",
    country: "Colombia",
    flag: "🇨🇴",
    years: "4 yrs exp",
    english: "C1 Advanced",
    skills: ["G Suite", "Asana", "Calendar Mgmt"],
  },
  {
    initials: "SM",
    name: "Santiago M.",
    role: "Software Developer",
    city: "Bogotá",
    country: "Colombia",
    flag: "🇨🇴",
    years: "6 yrs exp",
    english: "B2 Professional",
    skills: ["React", "Node.js", "PostgreSQL"],
  },
];

export const CandidateShowcase = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

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
            Every candidate below cleared our 8-step vetting process — background check, skills test, English assessment, and cultural interview. These are sample profiles. You get people just like this in 72 hours.
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
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-hero" />

              {/* Card body */}
              <div className="p-6 flex flex-col items-center flex-1">

                {/* Avatar with flag */}
                <div className="relative mb-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">{candidate.initials}</span>
                  </div>
                  <span className="absolute -bottom-1 -right-1 text-lg leading-none">{candidate.flag}</span>
                </div>

                {/* Name + Role + Location */}
                <p className="text-foreground font-semibold text-lg text-center">{candidate.name}</p>
                <p className="text-primary font-medium text-sm text-center mt-0.5">{candidate.role}</p>
                <p className="text-muted-foreground text-xs text-center mt-1">{candidate.city}, {candidate.country}</p>

                <div className="border-t border-border w-full my-4" />

                {/* Stats pills */}
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  <span className="text-xs font-medium bg-muted text-foreground rounded-full px-3 py-1">
                    {candidate.years}
                  </span>
                  <span className="text-xs font-medium bg-success/10 text-success rounded-full px-3 py-1">
                    {candidate.english}
                  </span>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2 justify-center mt-3">
                  {candidate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Availability */}
                <div className="flex items-center gap-1.5 justify-center mt-4 text-xs text-success font-medium">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  Available Now
                </div>
              </div>

              <button
                onClick={() => candidate.gumletId ? setActiveVideoId(candidate.gumletId) : null}
                className={`w-full border-t border-border py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                  candidate.gumletId
                    ? "text-primary hover:bg-primary/5 cursor-pointer"
                    : "text-muted-foreground cursor-not-allowed opacity-50"
                }`}
                disabled={!candidate.gumletId}
              >
                <Play className="w-3.5 h-3.5" />
                {candidate.gumletId ? "Watch Intro Video" : "Video Coming Soon"}
              </button>
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

      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              loading="lazy"
              title="Candidate Intro Video"
              src={`https://play.gumlet.io/embed/${activeVideoId}?autoplay=true&loop=false&disable_player_controls=false`}
              style={{ border: "none", position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}
              referrerPolicy="origin"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
            />
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute -top-10 right-0 text-white text-sm font-medium hover:text-accent transition-colors"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
