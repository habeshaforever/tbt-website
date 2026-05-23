import { motion } from "framer-motion";

const logos = [
  { name: "Forbes", url: "https://www.tandembridge.com/wp-content/uploads/2025/06/Press-Forbes-Logo-qpmpl4k66cjxdmsc6ox08su5bv6dy4bby8hm2vtm1a.png" },
  { name: "Entrepreneur", url: "https://www.tandembridge.com/wp-content/uploads/2025/06/Press-Entrepreneur-Logo-qpmpl4k66cjxdmsc6ox08su5bv6dy4bby8hm2vtm1a.webp" },
  { name: "Yahoo", url: "https://www.tandembridge.com/wp-content/uploads/2025/06/Press-Yahoo-Logo-qpmpl4k66cjxdmsc6ox08su5bv6dy4bby8hm2vtm1a.png" },
  { name: "MSN", url: "https://www.tandembridge.com/wp-content/uploads/2025/06/Press-MSN-Logo.webp" },
  { name: "LA Weekly", url: "https://www.tandembridge.com/wp-content/uploads/2025/06/Press-LA-WEEKLY-Logo-qpmpl4k66cjxdmsc6ox08su5bv6dy4bby8hm2vtm1a.webp" },
  { name: "Medium", url: "https://www.tandembridge.com/wp-content/uploads/2025/06/Press-Medium-Logo-qpmpl4k66cjxdmsc6ox08su5bv6dy4bby8hm2vtm1a.webp" },
];

export const LogoBar = () => {
  return (
    <section className="py-10 sm:py-16 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 sm:mb-10"
        >
          As Featured In
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
