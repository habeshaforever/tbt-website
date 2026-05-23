import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PageBuilder } from "@/components/PageBuilder";
import { sanityClient, urlFor } from "@/lib/sanity";
import { isPreviewMode, draftClient } from "@/lib/preview";

interface CaseStudyDetail {
  _id: string;
  title: string;
  slug: { current: string };
  companyType: string;
  industry?: string;
  companySize?: string;
  summary: string;
  publishDate: string;
  rolesHired?: string[];
  featuredImage?: { asset: { _ref: string }; alt?: string };
  metrics?: { value: string; label: string }[];
  challenge: unknown[];
  solution: unknown[];
  resultsContent: unknown[];
  timeline?: { milestone: string; description?: string }[];
  beforeAfter?: { before?: string[]; after?: string[] };
  testimonials?: { quote: string; name?: string; role?: string; company?: string; photo?: { asset: { _ref: string } } }[];
  ctaHeadline?: string;
  ctaBody?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageSections?: any[];
}

const CASE_STUDY_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  companyType,
  industry,
  companySize,
  summary,
  publishDate,
  rolesHired,
  featuredImage,
  metrics,
  challenge,
  solution,
  resultsContent,
  timeline,
  beforeAfter,
  testimonials,
  ctaHeadline,
  ctaBody,
  ctaButtonText,
  ctaButtonLink,
  pageSections
}`;

const portableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    underline: ({ children }: { children?: React.ReactNode }) => (
      <span className="underline">{children}</span>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string } }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline hover:text-primary/80 transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string; caption?: string } }) => (
      <figure className="my-8">
        <img
          src={urlFor(value).width(900).fit("max").url()}
          alt={value.alt ?? ""}
          className="rounded-xl w-full object-cover"
        />
        {value.caption && (
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [study, setStudy] = useState<CaseStudyDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    const client = isPreviewMode() ? draftClient : sanityClient;
    client
      .fetch<CaseStudyDetail>(CASE_STUDY_QUERY, { slug })
      .then((data) => {
        if (!data) setNotFound(true);
        else setStudy(data);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">

          {loading && (
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-muted/50 rounded w-3/4" />
              <div className="h-4 bg-muted/50 rounded w-1/3" />
              <div className="h-64 bg-muted/50 rounded-xl" />
              <div className="space-y-3">
                <div className="h-4 bg-muted/50 rounded w-full" />
                <div className="h-4 bg-muted/50 rounded w-5/6" />
                <div className="h-4 bg-muted/50 rounded w-4/6" />
              </div>
            </div>
          )}

          {!loading && notFound && (
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-foreground mb-4">Case Study Not Found</h1>
              <p className="text-muted-foreground mb-8">
                This case study doesn't exist or may have been removed.
              </p>
              <Link
                to="/resources/case-studies"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Case Studies
              </Link>
            </div>
          )}

          {!loading && study && (
            <>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/resources/case-studies"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Case Studies
              </Link>

              {study.companyType && (
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
                  {study.companyType}
                </span>
              )}

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {study.title}
              </h1>

              {study.publishDate && (
                <p className="text-sm text-muted-foreground mb-8">{study.publishDate}</p>
              )}

              {study.featuredImage?.asset && (
                <img
                  src={urlFor(study.featuredImage).width(900).height(500).fit("crop").url()}
                  alt={study.featuredImage.alt ?? study.title}
                  className="rounded-xl w-full object-cover mb-10"
                />
              )}

              {study.summary && (
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-4 border-primary pl-4 italic">
                  "{study.summary}"
                </p>
              )}

              {study.metrics && study.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 bg-card border border-border rounded-xl p-6">
                  {study.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-2xl font-bold text-primary">{m.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {(study.industry || study.companySize || (study.rolesHired && study.rolesHired.length > 0)) && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.industry && (
                    <span className="text-xs bg-muted text-muted-foreground rounded-full px-3 py-1 capitalize">
                      {study.industry.replace(/-/g, ' ')}
                    </span>
                  )}
                  {study.companySize && (
                    <span className="text-xs bg-muted text-muted-foreground rounded-full px-3 py-1">
                      {study.companySize} employees
                    </span>
                  )}
                  {study.rolesHired?.map((r) => (
                    <span key={r} className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">{r}</span>
                  ))}
                </div>
              )}

              {study.challenge && study.challenge.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-3">The Challenge</h2>
                  <PortableText value={study.challenge as never} components={portableTextComponents} />
                </div>
              )}

              {study.solution && study.solution.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-3">The Solution</h2>
                  <PortableText value={study.solution as never} components={portableTextComponents} />
                </div>
              )}

              {study.timeline && study.timeline.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-4">Timeline</h2>
                  <div className="space-y-3">
                    {study.timeline.map((t, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm">{t.milestone}</p>
                          {t.description && <p className="text-muted-foreground text-sm">{t.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {study.resultsContent && study.resultsContent.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-3">The Results</h2>
                  <PortableText value={study.resultsContent as never} components={portableTextComponents} />
                </div>
              )}

              {study.beforeAfter && ((study.beforeAfter.before?.length ?? 0) > 0 || (study.beforeAfter.after?.length ?? 0) > 0) && (
                <div className="mb-8 grid sm:grid-cols-2 gap-4">
                  {study.beforeAfter.before && study.beforeAfter.before.length > 0 && (
                    <div className="bg-muted/50 border border-border rounded-xl p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Before</p>
                      <ul className="space-y-2">
                        {study.beforeAfter.before.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-foreground">
                            <span className="text-red-400 shrink-0">✕</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {study.beforeAfter.after && study.beforeAfter.after.length > 0 && (
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-primary mb-3">After</p>
                      <ul className="space-y-2">
                        {study.beforeAfter.after.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-foreground">
                            <span className="text-primary shrink-0">✓</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {study.testimonials && study.testimonials.length > 0 && (
                <div className="mb-8 space-y-4">
                  <h2 className="text-xl font-bold text-foreground mb-4">Client Testimonials</h2>
                  {study.testimonials.map((t, i) => (
                    <blockquote key={i} className="bg-card border border-border rounded-xl p-6">
                      <p className="text-muted-foreground italic mb-4">"{t.quote}"</p>
                      <div className="flex items-center gap-3">
                        {t.photo && (
                          <img
                            src={urlFor(t.photo).width(48).height(48).fit('crop').url()}
                            alt={t.name ?? ''}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        )}
                        <div>
                          {t.name && <p className="font-semibold text-foreground text-sm">{t.name}</p>}
                          {(t.role || t.company) && (
                            <p className="text-xs text-muted-foreground">
                              {[t.role, t.company].filter(Boolean).join(' · ')}
                            </p>
                          )}
                        </div>
                      </div>
                    </blockquote>
                  ))}
                </div>
              )}

              {study.ctaHeadline && (
                <div className="mt-16 bg-card border border-border rounded-xl p-10 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3">{study.ctaHeadline}</h2>
                  {study.ctaBody && (
                    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{study.ctaBody}</p>
                  )}
                  {study.ctaButtonText && study.ctaButtonLink && (
                    <Button variant="hero" size="lg" asChild>
                      <Link to={study.ctaButtonLink}>{study.ctaButtonText}</Link>
                    </Button>
                  )}
                </div>
              )}
            </motion.article>

            {study.pageSections && study.pageSections.length > 0 && (
              <PageBuilder sections={study.pageSections} />
            )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
