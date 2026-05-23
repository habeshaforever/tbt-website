import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { sanityClient, urlFor } from "@/lib/sanity";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishDate: string;
  category: string;
  featuredImage?: { asset: { _ref: string }; alt?: string };
}

const BLOG_QUERY = `*[_type == "blog"] | order(publishDate desc) {
  _id,
  title,
  slug,
  excerpt,
  publishDate,
  category,
  featuredImage
}`;

const placeholders = [
  {
    category: "Remote Hiring",
    headline: "How to Onboard a Remote Latin American Professional the Right Way",
    description:
      "A step by step breakdown of what the best US companies do in the first 30 days to set remote hires up for success.",
  },
  {
    category: "Team Management",
    headline: "5 Things US Companies Get Wrong When Managing Remote Teams",
    description:
      "Common mistakes that undermine remote team performance and how to avoid them from day one.",
  },
  {
    category: "Latin American Talent",
    headline: "Why Colombia Is Becoming the Top Nearshore Destination for US Companies",
    description:
      "A look at the talent quality, time zone alignment, and cost advantages driving the shift toward Colombia.",
  },
  {
    category: "Cost Savings",
    headline: "Breaking Down the Real Cost of a Nearshore Hire vs a Domestic Hire",
    description:
      "A full comparison of salary, overhead, benefits, and time to hire across both models.",
  },
  {
    category: "Direct Hire",
    headline: "Direct Hire vs Managed Staffing: Which Model Is Right for Your Business",
    description:
      "How to choose between the two engagement models based on your team size, control preferences, and budget.",
  },
  {
    category: "Insights",
    headline: "The State of Latin American Remote Work in 2025",
    description:
      "Trends, data, and what they mean for US companies looking to build nearshore teams this year.",
  },
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch<BlogPost[]>(BLOG_QUERY)
      .then((data) => setPosts(data ?? []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const hasPosts = !loading && posts.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-primary">Blog</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical content on remote hiring, team building, and working with Latin American
              talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-card border border-border rounded-xl overflow-hidden animate-pulse">
                  <div className="h-44 bg-muted/50" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-muted/50 rounded w-24" />
                    <div className="h-4 bg-muted/50 rounded w-full" />
                    <div className="h-4 bg-muted/50 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : hasPosts ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {posts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  {post.featuredImage?.asset ? (
                    <img
                      src={urlFor(post.featuredImage).width(600).height(340).fit("crop").url()}
                      alt={post.featuredImage.alt ?? post.title}
                      className="h-44 w-full object-cover"
                    />
                  ) : (
                    <div className="h-44 bg-muted/50 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">No Image</span>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    {post.category && (
                      <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-3 self-start capitalize">
                        {post.category.replace(/-/g, " ")}
                      </span>
                    )}
                    <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-muted-foreground">
                        {post.publishDate ?? ""}
                      </span>
                      <Link
                        to={`/resources/blog/${post.slug.current}`}
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {placeholders.map((article, index) => (
                <motion.div
                  key={article.headline}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="h-44 bg-muted/50 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Coming Soon</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-3 self-start">
                      {article.category}
                    </span>
                    <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                      {article.headline}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{article.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-muted-foreground">Coming Soon</span>
                      <span className="text-sm font-semibold text-primary/50 cursor-default">
                        Read More
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
