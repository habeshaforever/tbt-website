import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  industries: [
    { label: "Customer Service", href: "/industries/customer-service" },
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Legal Services", href: "/industries/legal" },
    { label: "IT and Software", href: "/industries/it-software" },
    { label: "Marketing and Creative", href: "/industries/marketing" },
    { label: "Logistics", href: "/industries/logistics" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "SaaS and Tech", href: "/industries/saas" },
    { label: "E-commerce", href: "/industries/ecommerce" },
    { label: "Real Estate", href: "/industries/real-estate" },
  ],
  solutions: [
    { label: "Managed Staffing", href: "/solutions/managed-staffing" },
    { label: "Recruiting & Direct Hire", href: "/solutions/recruiting-direct-hire" },
    { label: "Browse All Roles", href: "/roles" },
  ],
  company: [
    { label: "Our Story", href: "/our-story" },
    { label: "How It Works", href: "/our-process" },
    { label: "Careers", href: "/careers" },
    { label: "Book a Call", href: "/book" },
  ],
  learn: [
    { label: "Why Nearshore", href: "/why-nearshore" },
    { label: "Nearshore vs Offshore", href: "/nearshore-vs-offshore" },
    { label: "Why TBT", href: "/why-tbt" },
  ],
  resources: [
    { label: "Blog", href: "/resources/blog" },
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Hiring Guides", href: "/resources/hiring-guides" },
    { label: "Insights", href: "/resources/insights" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer id="about" className="bg-foreground text-primary-foreground pt-12 md:pt-20 pb-8">
      <div className="container mx-auto px-6">

        {/* Desktop: 6-col grid | Mobile: stacked */}
        <div className="mb-12 md:mb-16">

          {/* Brand Row - full width on mobile, fits in grid on desktop */}
          <div className="mb-10 md:mb-0 md:hidden">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">TB</span>
              </div>
              <span className="font-bold text-xl">
                Tandem<span className="text-accent">Bridge</span> Talent
              </span>
            </Link>
            <p className="text-primary-foreground/60 mb-4 text-sm">
              U.S. operated. Nearshore teams that perform. South American talent, American standards.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}
                  className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">TB</span>
                </div>
                <span className="font-bold text-xl">
                  Tandem<span className="text-accent">Bridge</span> Talent
                </span>
              </Link>
              <p className="text-primary-foreground/60 mb-6 text-sm">
                U.S. operated. Nearshore teams that perform. South American talent, American standards.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            {/* Solutions */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Solutions</h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Industries */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Industries</h4>
              <ul className="space-y-2">
                {footerLinks.industries.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Learn + Resources stacked */}
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Learn</h4>
                <ul className="space-y-2">
                  {footerLinks.learn.map((link) => (
                    <li key={link.label}>
                      <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile grid - 2 columns, stacked sections */}
          <div className="md:hidden grid grid-cols-2 gap-x-6 gap-y-8">
            <div>
              <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-primary-foreground/40">Solutions</h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-primary-foreground/40">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-primary-foreground/40">Learn</h4>
              <ul className="space-y-2">
                {footerLinks.learn.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-primary-foreground/40">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Industries takes full width on mobile with 2-col sub-grid */}
            <div className="col-span-2">
              <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-primary-foreground/40">Industries</h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                {footerLinks.industries.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Tandem Bridge Talent. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
