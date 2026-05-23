import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { sanityClient, urlFor } from "@/lib/sanity";

interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  companyType: string;
  summary: string;
  publishDate: string;
  featuredImage?: { asset: { _ref: string }; alt?: string };
  metrics?: { value: string; label: string }[];
}

const CASE_STUDY_QUERY = `*[_type == "caseStudy"] | order(publishDate desc) {
  _id,
  title,
  slug,
  companyType,
  summary,
  publishDate,
  featuredImage,
  metrics
}`;

const placeholders = [
  {
    companyType: "Financial Services Firm",
    headline: "How a US Fintech Company Built a Full Accounting Team at 65% Less Cost",
    result: "Reduced overhead by 65% and filled 8 roles in under 3 weeks.",
  },
  {
    companyType: "Healthcare Organization",
    headline: "How a Healthcare Company Cleared Their Billing Backlog With a Nearshore Team",
    result: "Processed 3 months of backlogged claims in 30 days.",
  },
  {
    companyType: "Legal Practice",
    headline: "How a Law Firm Scaled Their Support Staff Without Increasing Overhead",
    result: "Added 4 legal assistants at 70% less than domestic hiring cost.",
  },
];

const CaseStudies = () => {
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch<CaseStudy[]>(CASE_STUDY_QUERY)
      .then((data) => setStudies(data ?? []))
      .catch(() => setStudies([]))
      .finally(() => setLoading(false));
  }, []);

  const hasStudies = !loading && studies.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Case <span className="text-primary">Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how US and Canadian companies have built high performing remote teams through
              Tandem Bridge Talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-card border border-border rounded-xl overflow-hidden animate-pulse">
                  <div className="h-44 bg-muted/50" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-muted/50 rounded w-28" />
                    <div className="h-4 bg-muted/50 rounded w-full" />
                    <div className="h-4 bg-muted/50 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : hasStudies ? (
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {studies.map((study, index) => (
                <motion.div
                  key={study._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  {study.featuredImage?.asset ? (
                    <img
                      src={urlFor(study.featuredImage).width(600).height(340).fit("crop").url()}
                      alt={study.featuredImage.alt ?? study.title}
                      className="h-44 w-full object-cover"
                    />
                  ) : (
                    <div className="h-44 bg-muted/50 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">No Image</span>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4 self-start">
                      {study.companyType}
                    </span>
                    <h3 className="text-base font-semibold text-foreground mb-3 leading-snug flex-1">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 italic">"{study.summary}"</p>

                    {study.metrics && study.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-4">
                        {study.metrics.map((m) => (
                          <div key={m.label} className="text-center">
                            <div className="text-lg font-bold text-primary">{m.value}</div>
                            <div className="text-xs text-muted-foreground">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link
                      to={`/resources/case-studies/${study.slug.current}`}
                      className="text-sm font-semibold text-primary hover:underline self-start"
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {placeholders.map((study, index) => (
                <motion.div
                  key={study.headline}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col"
                >
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4 self-start">
                    {study.companyType}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mb-3 leading-snug flex-1">
                    {study.headline}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{study.result}"</p>
                  <span className="text-sm font-semibold text-primary/50 cursor-default self-start">
                    Coming Soon
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-card border border-border rounded-xl p-10 text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-muted-foreground mb-6">
              More case studies coming soon. In the meantime book a strategy call to hear
              directly from our clients.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book">Book a Strategy Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
