import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TBT has transformed how we scale our team. The quality of talent and the cost savings have exceeded our expectations.",
    author: "Sarah Johnson",
    role: "VP of Operations",
    company: "Tech Startup",
    rating: 5,
  },
  {
    quote: "The time zone alignment and communication skills of our TBT team members make them indistinguishable from our US staff.",
    author: "Michael Chen",
    role: "CEO",
    company: "E-commerce Brand",
    rating: 5,
  },
  {
    quote: "We've tried offshore before. TBT nearshore model is different - the retention, the culture fit, everything is better.",
    author: "Amanda Rodriguez",
    role: "Director of HR",
    company: "Financial Services",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-14 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Client Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-card rounded-2xl border border-border p-5 sm:p-8 hover:shadow-card-hover transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-6 relative z-10">"{testimonial.quote}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
