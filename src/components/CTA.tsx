import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Still Paying U.S. Rates? Every Month You Wait Costs You Real Money.
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-primary-foreground/80 mb-4 sm:mb-6 md:mb-10 max-w-2xl mx-auto">
            We can match your next hire at 70% less, in as little as two weeks. One call. We'll show you the role cost, what the talent looks like, and how fast we can get started. No pressure. Just the numbers.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-4 sm:mb-6 md:mb-12">
            <Button variant="secondary" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/book">
                Get Your First Candidates in 72 hrs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-primary-foreground/80">
            <a href="mailto:info@tandembridge.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail className="w-5 h-5" />
              <span>info@tandembridge.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

