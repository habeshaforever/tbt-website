import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBuilder } from "@/components/PageBuilder";
import { sanityClient, urlFor } from "@/lib/sanity";
import { isPreviewMode, draftClient } from "@/lib/preview";

interface BlogPostDetail {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishDate: string;
  category?: string;
  categories?: { title: string; slug: { current: string }; color?: string }[];
  tags?: string[];
  readingTime?: number;
  author?: { name: string; role?: string; photo?: { asset: { _ref: string } }; linkedin?: string };
  featuredImage?: { asset: { _ref: string }; alt?: string; caption?: string };
  imageGallery?: { asset: { _ref: string }; alt?: string; caption?: string }[];
  content: unknown[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageSections?: any[];
}

const BLOG_POST_QUERY = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishDate,
  category,
  categories[]->{ title, slug, color },
  tags,
  readingTime,
  author->{ name, role, photo, linkedin },
  featuredImage,
  imageGallery,
  content,
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
    callout: ({ value }: { value: { tone?: string; text?: string } }) => {
      const toneStyles: Record<string, string> = {
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        tip: 'bg-green-50 border-green-200 text-green-800',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
        success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      }
      const style = toneStyles[value.tone ?? 'info'] ?? toneStyles.info
      return (
        <div className={`border rounded-xl p-4 my-6 text-sm ${style}`}>
          {value.text}
        </div>
      )
    },
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    const client = isPreviewMode() ? draftClient : sanityClient;
    client
      .fetch<BlogPostDetail>(BLOG_POST_QUERY, { slug })
      .then((data) => {
        if (!data) setNotFound(true);
        else setPost(data);
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
              <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
              <p className="text-muted-foreground mb-8">
                This article doesn't exist or may have been removed.
              </p>
              <Link
                to="/resources/blog"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          )}

          {!loading && post && (
            <>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/resources/blog"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {(post.categories && post.categories.length > 0) || post.category ? (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories && post.categories.length > 0
                    ? post.categories.map((cat) => (
                        <span key={cat.slug.current} className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                          {cat.title}
                        </span>
                      ))
                    : post.category && (
                        <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 capitalize">
                          {post.category.replace(/-/g, " ")}
                        </span>
                      )}
                </div>
              ) : null}

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                {post.author && (
                  <div className="flex items-center gap-2">
                    {post.author.photo && (
                      <img
                        src={urlFor(post.author.photo).width(32).height(32).fit("crop").url()}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                    )}
                    <span className="text-sm text-foreground font-medium">{post.author.name}</span>
                    {post.author.role && (
                      <span className="text-xs text-muted-foreground">{post.author.role}</span>
                    )}
                  </div>
                )}
                {post.publishDate && (
                  <span className="text-sm text-muted-foreground">{post.publishDate.slice(0, 10)}</span>
                )}
                {post.readingTime && (
                  <span className="text-sm text-muted-foreground">{post.readingTime} min read</span>
                )}
              </div>

              {post.featuredImage?.asset && (
                <img
                  src={urlFor(post.featuredImage).width(900).height(500).fit("crop").url()}
                  alt={post.featuredImage.alt ?? post.title}
                  className="rounded-xl w-full object-cover mb-10"
                />
              )}

              {post.excerpt && (
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-4 border-primary pl-4">
                  {post.excerpt}
                </p>
              )}

              {post.content && post.content.length > 0 && (
                <div className="prose-sm max-w-none">
                  <PortableText value={post.content as never} components={portableTextComponents} />
                </div>
              )}

              {post.imageGallery && post.imageGallery.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {post.imageGallery.map((img, i) => (
                      <figure key={i}>
                        <img
                          src={urlFor(img).width(600).height(400).fit("crop").url()}
                          alt={img.alt ?? ""}
                          className="rounded-xl w-full object-cover"
                        />
                        {img.caption && (
                          <figcaption className="text-xs text-muted-foreground mt-1 text-center">{img.caption}</figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-muted text-muted-foreground rounded-full px-3 py-1">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>

            {post.pageSections && post.pageSections.length > 0 && (
              <PageBuilder sections={post.pageSections} />
            )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
