import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Download, Play } from "lucide-react";
import { useState } from "react";

// ─── Shared portable text renderer ───────────────────────────────────────────
const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">{children}</h4>
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
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string; blank?: boolean } }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="text-primary underline hover:text-primary/80 transition-colors"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-1 mb-4 text-muted-foreground">{children}</ol>
    ),
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string; caption?: string } }) => (
      <figure className="my-6">
        <img src={urlFor(value).width(800).fit("max").url()} alt={value.alt ?? ""} className="rounded-xl w-full" />
        {value.caption && <figcaption className="text-sm text-muted-foreground mt-2 text-center">{value.caption}</figcaption>}
      </figure>
    ),
  },
};

// ─── Types ───────────────────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Block = Record<string, any> & { _type: string; _key: string }

// ─── Individual block renderers ───────────────────────────────────────────────

function HeroSectionBlock({ block }: { block: Block }) {
  const isLeft = block.layout === "split-right" || block.layout === "left";
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className={`container mx-auto px-4 sm:px-6 ${isLeft ? "flex flex-col md:flex-row items-center gap-6 sm:gap-12" : "text-center max-w-3xl mx-auto"}`}>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">{block.headline}</h1>
          {block.subheadline && <p className="text-base sm:text-xl text-muted-foreground mb-8">{block.subheadline}</p>}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {block.buttonText && block.buttonLink && (
              <Button variant="hero" size="lg" asChild>
                <Link to={block.buttonLink}>{block.buttonText}</Link>
              </Button>
            )}
            {block.secondaryButtonText && block.secondaryButtonLink && (
              <Button variant="outline" size="lg" asChild>
                <Link to={block.secondaryButtonLink}>{block.secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
        {block.image?.asset && isLeft && (
          <div className="flex-1">
            <img src={urlFor(block.image).width(600).fit("max").url()} alt={block.image.alt ?? ""} className="rounded-2xl w-full" />
          </div>
        )}
      </div>
    </section>
  );
}

function RichTextSectionBlock({ block }: { block: Block }) {
  const widthClass = block.width === "full" ? "max-w-5xl" : block.width === "medium" ? "max-w-3xl" : "max-w-2xl";
  return (
    <section className="py-16 bg-background">
      <div className={`container mx-auto px-4 sm:px-6 ${widthClass}`}>
        {block.sectionTitle && <h2 className="text-2xl font-bold text-foreground mb-6">{block.sectionTitle}</h2>}
        {block.body && <PortableText value={block.body} components={ptComponents} />}
      </div>
    </section>
  );
}

function ImageGallerySectionBlock({ block }: { block: Block }) {
  const cols = block.columns ?? 3;
  const gridClass = cols === 2 ? "grid-cols-1 sm:grid-cols-2" : cols === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-1 sm:grid-cols-3";
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {block.sectionTitle && <h2 className="text-2xl font-bold text-foreground mb-6 text-center">{block.sectionTitle}</h2>}
        <div className={`grid ${gridClass} gap-4`}>
          {block.images?.map((img: Block, i: number) => (
            <figure key={i}>
              <img src={urlFor(img).width(600).height(400).fit("crop").url()} alt={img.alt ?? ""} className="rounded-xl w-full object-cover" />
              {img.caption && <figcaption className="text-xs text-muted-foreground mt-1 text-center">{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FullWidthImageBlock({ block }: { block: Block }) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <figure>
          <img
            src={urlFor(block.image).width(1200).fit("max").url()}
            alt={block.image?.alt ?? ""}
            style={{ maxHeight: block.maxHeight ? `${block.maxHeight}px` : "500px" }}
            className={`w-full object-cover ${block.roundedCorners !== false ? "rounded-2xl" : ""}`}
          />
          {block.image?.caption && <figcaption className="text-sm text-muted-foreground mt-2 text-center">{block.image.caption}</figcaption>}
        </figure>
      </div>
    </section>
  );
}

function CTABannerBlock({ block }: { block: Block }) {
  const isDark = block.variant === "dark";
  const isLight = block.variant === "light";
  const bg = isDark ? "bg-foreground" : isLight ? "bg-card border border-border" : "bg-primary";
  const textColor = isDark ? "text-background" : isLight ? "text-foreground" : "text-white";
  const subColor = isDark ? "text-background/70" : isLight ? "text-muted-foreground" : "text-white/80";
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`${bg} rounded-2xl p-6 sm:p-12 text-center`}>
          <h2 className={`text-xl sm:text-3xl font-bold mb-3 ${textColor}`}>{block.headline}</h2>
          {block.body && <p className={`mb-8 max-w-xl mx-auto ${subColor}`}>{block.body}</p>}
          <div className="flex flex-wrap gap-3 justify-center">
            {block.buttonText && block.buttonLink && (
              <Button variant={isLight ? "hero" : "outline"} size="lg" asChild>
                <Link to={block.buttonLink}>{block.buttonText}</Link>
              </Button>
            )}
            {block.secondaryButtonText && block.secondaryButtonLink && (
              <Button variant="ghost" size="lg" asChild>
                <Link to={block.secondaryButtonLink}>{block.secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSectionBlock({ block }: { block: Block }) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {block.sectionTitle && <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{block.sectionTitle}</h2>}
        <div className={`grid gap-4 sm:gap-6 ${block.layout === "featured" ? "max-w-2xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {block.testimonials?.map((t: Block, i: number) => (
            <blockquote key={i} className="bg-card border border-border rounded-xl p-6">
              {t.rating && <div className="text-yellow-400 mb-3">{"★".repeat(t.rating)}</div>}
              <p className="text-muted-foreground italic mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                {t.photo?.asset && (
                  <img src={urlFor(t.photo).width(48).height(48).fit("crop").url()} alt={t.name ?? ""} className="w-10 h-10 rounded-full object-cover" />
                )}
                <div>
                  {t.name && <p className="font-semibold text-foreground text-sm">{t.name}</p>}
                  {(t.role || t.company) && (
                    <p className="text-xs text-muted-foreground">{[t.role, t.company].filter(Boolean).join(" · ")}</p>
                  )}
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSectionBlock({ block }: { block: Block }) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {block.sectionTitle && <h2 className="text-2xl font-bold text-foreground mb-2">{block.sectionTitle}</h2>}
        {block.sectionSubtitle && <p className="text-muted-foreground mb-10">{block.sectionSubtitle}</p>}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {block.stats?.map((s: Block, i: number) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-foreground">{s.label}</div>
              {s.description && <div className="text-xs text-muted-foreground mt-1">{s.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSectionBlock({ block }: { block: Block }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        {block.sectionTitle && <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{block.sectionTitle}</h2>}
        <div className="space-y-3">
          {block.faqs?.map((faq: Block, i: number) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-foreground hover:text-primary transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{faq.question}</span>
                {open === i ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBlock({ block }: { block: Block }) {
  const isLarge = block.size !== "standard";
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <blockquote className={`border-l-4 border-primary pl-6 ${isLarge ? "py-4" : ""}`}>
          <p className={`font-medium text-foreground italic leading-relaxed ${isLarge ? "text-2xl" : "text-lg"}`}>
            "{block.quote}"
          </p>
          {block.attribution && (
            <cite className="block mt-3 text-sm text-muted-foreground not-italic">{block.attribution}</cite>
          )}
        </blockquote>
      </div>
    </section>
  );
}

function TimelineSectionBlock({ block }: { block: Block }) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        {block.sectionTitle && <h2 className="text-2xl font-bold text-foreground mb-8">{block.sectionTitle}</h2>}
        <div className="space-y-6">
          {block.items?.map((item: Block, i: number) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-xs font-bold text-primary shrink-0">{i + 1}</div>
                {i < block.items.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-6">
                <p className="text-xs font-bold uppercase tracking-wide text-primary mb-1">{item.label}</p>
                <p className="font-semibold text-foreground">{item.title}</p>
                {item.description && <p className="text-muted-foreground text-sm mt-1">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSectionBlock({ block }: { block: Block }) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {block.sectionTitle && <h2 className="text-2xl font-bold text-foreground mb-2 text-center">{block.sectionTitle}</h2>}
        {block.sectionSubtitle && <p className="text-muted-foreground mb-10 text-center">{block.sectionSubtitle}</p>}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {block.members?.map((m: Block, i: number) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4 sm:p-6 text-center">
              {m.photo?.asset && (
                <img src={urlFor(m.photo).width(120).height(120).fit("crop").url()} alt={m.name ?? ""} className="w-16 h-16 rounded-full object-cover mx-auto mb-3" />
              )}
              <p className="font-semibold text-foreground">{m.name}</p>
              {m.role && <p className="text-xs text-muted-foreground mt-1">{m.role}</p>}
              {m.bio && <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{m.bio}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonTableBlock({ block }: { block: Block }) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        {block.sectionTitle && <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{block.sectionTitle}</h2>}
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 bg-muted px-4 py-3 font-semibold text-sm text-foreground">
            <span>Feature</span>
            <span className="text-center">{block.columnALabel ?? "Option A"}</span>
            <span className="text-center text-primary">{block.columnBLabel ?? "Option B"}</span>
          </div>
          {block.rows?.map((row: Block, i: number) => (
            <div key={i} className={`grid grid-cols-3 px-4 py-3 text-sm border-t border-border ${row.highlight ? "bg-primary/5" : ""}`}>
              <span className="font-medium text-foreground">{row.feature}</span>
              <span className="text-center text-muted-foreground">{row.columnA}</span>
              <span className={`text-center font-medium ${row.highlight ? "text-primary" : "text-foreground"}`}>{row.columnB}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoEmbedBlock({ block }: { block: Block }) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = block.url
    ?.replace("watch?v=", "embed/")
    .replace("youtu.be/", "www.youtube.com/embed/")
    .replace("vimeo.com/", "player.vimeo.com/video/");

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        {block.sectionTitle && <h2 className="text-2xl font-bold text-foreground mb-6 text-center">{block.sectionTitle}</h2>}
        <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
          {!playing && block.thumbnail?.asset ? (
            <button className="relative w-full h-full group" onClick={() => setPlaying(true)}>
              <img src={urlFor(block.thumbnail).width(800).height(450).fit("crop").url()} alt="Video thumbnail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-foreground ml-1" />
                </div>
              </div>
            </button>
          ) : (
            <iframe src={`${embedUrl}?autoplay=1`} title={block.sectionTitle ?? "Video"} className="w-full h-full" allow="autoplay; fullscreen" />
          )}
        </div>
        {block.caption && <p className="text-sm text-muted-foreground mt-3 text-center">{block.caption}</p>}
      </div>
    </section>
  );
}

function SplitImageTextBlock({ block }: { block: Block }) {
  const imageLeft = block.imagePosition !== "right";
  return (
    <section className="py-16 bg-background">
      <div className={`container mx-auto px-4 sm:px-6 flex flex-col ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 sm:gap-12`}>
        {block.image?.asset && (
          <div className="flex-1">
            <img src={urlFor(block.image).width(600).fit("max").url()} alt={block.image.alt ?? ""} className="rounded-2xl w-full" />
          </div>
        )}
        <div className="flex-1">
          {block.headline && <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{block.headline}</h2>}
          {block.body && <PortableText value={block.body} components={ptComponents} />}
          {block.buttonText && block.buttonLink && (
            <Button variant="hero" className="mt-4" asChild>
              <Link to={block.buttonLink}>{block.buttonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

function LogoCloudBlock({ block }: { block: Block }) {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {block.sectionTitle && <p className="text-sm text-muted-foreground mb-8 uppercase tracking-widest">{block.sectionTitle}</p>}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {block.logos?.map((l: Block, i: number) => (
            l.logo?.asset ? (
              l.url ? (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer">
                  <img src={urlFor(l.logo).height(40).fit("max").url()} alt={l.companyName ?? ""} className="h-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                </a>
              ) : (
                <img key={i} src={urlFor(l.logo).height(40).fit("max").url()} alt={l.companyName ?? ""} className="h-8 opacity-60 grayscale" />
              )
            ) : null
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadableResourceBlock({ block }: { block: Block }) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
        <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
          {block.thumbnail?.asset && (
            <img src={urlFor(block.thumbnail).width(80).height(100).fit("crop").url()} alt={block.title ?? ""} className="rounded-lg w-16 shrink-0" />
          )}
          <div className="flex-1">
            <h3 className="font-bold text-foreground text-lg mb-1">{block.title}</h3>
            {block.description && <p className="text-muted-foreground text-sm mb-4">{block.description}</p>}
            {block.file?.asset?._ref && (
              <Button variant="hero" size="sm" asChild>
                <a href={`https://cdn.sanity.io/files/ud8yaali/production/${block.file.asset._ref.replace("file-", "").replace("-pdf", ".pdf")}`} download target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  {block.buttonText ?? "Download"}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Block dispatcher ────────────────────────────────────────────────────────
const BLOCK_MAP: Record<string, React.ComponentType<{ block: Block }>> = {
  heroSectionBlock: HeroSectionBlock,
  richTextSectionBlock: RichTextSectionBlock,
  imageGallerySectionBlock: ImageGallerySectionBlock,
  fullWidthImageBlock: FullWidthImageBlock,
  ctaBannerBlock: CTABannerBlock,
  testimonialSectionBlock: TestimonialSectionBlock,
  statsSectionBlock: StatsSectionBlock,
  faqSectionBlock: FAQSectionBlock,
  quoteBlock: QuoteBlock,
  timelineSectionBlock: TimelineSectionBlock,
  teamSectionBlock: TeamSectionBlock,
  comparisonTableBlock: ComparisonTableBlock,
  videoEmbedBlock: VideoEmbedBlock,
  splitImageTextBlock: SplitImageTextBlock,
  logoCloudBlock: LogoCloudBlock,
  downloadableResourceBlock: DownloadableResourceBlock,
};

interface PageBuilderProps {
  sections: Block[];
}

export function PageBuilder({ sections }: PageBuilderProps) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="page-builder">
      {sections.map((block) => {
        const Component = BLOCK_MAP[block._type];
        if (!Component) return null;
        return <Component key={block._key} block={block} />;
      })}
    </div>
  );
}
