import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NestedDropdownItem {
  label: string;
  href: string;
}

interface DropdownCategory {
  label: string;
  items: NestedDropdownItem[];
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: NestedDropdownItem[];
  nestedDropdown?: DropdownCategory[];
  solutionsDropdown?: {
    primaryLinks: NestedDropdownItem[];
    roleCategories: DropdownCategory[];
  };
}

const navItems: NavItem[] = [
  { 
    label: "Solutions", 
    href: "#services",
    solutionsDropdown: {
      primaryLinks: [
        { label: "Managed Staffing", href: "/solutions/managed-staffing" },
        { label: "Recruiting & Direct Hire", href: "/solutions/recruiting-direct-hire" },
        { label: "Business Process Outsourcing", href: "/bpo" },
      ],
      roleCategories: [
        {
          label: "Accounting & Finance",
          items: [
            { label: "Accounting", href: "/roles/accounting" },
            { label: "Invoicing & Billing", href: "/roles/invoicing-billing" },
          ]
        },
        {
          label: "Technology & IT",
          items: [
            { label: "Software Developers", href: "/roles/software-developers" },
            { label: "Tech Support", href: "/roles/tech-support" },
            { label: "Cybersecurity", href: "/roles/cybersecurity" },
            { label: "Business Intelligence", href: "/roles/business-intelligence" },
          ]
        },
        {
          label: "Creative & Design",
          items: [
            { label: "Designers", href: "/roles/designers" },
          ]
        },
        {
          label: "Operations & Admin",
          items: [
            { label: "Executive Assistants", href: "/roles/executive-assistants" },
            { label: "Legal Assistants", href: "/roles/legal-assistants" },
            { label: "Project Management", href: "/roles/project-management" },
            { label: "Data Processing", href: "/roles/data-processing" },
          ]
        },
        {
          label: "Customer Facing",
          items: [
            { label: "Customer Care", href: "/roles/customer-care" },
            { label: "Sales", href: "/roles/sales" },
          ]
        },
        {
          label: "Healthcare",
          items: [
            { label: "Medical Processing", href: "/roles/medical-processing" },
          ]
        },
      ]
    }
  },
  {
    label: "Industries",
    href: "#industries",
    dropdown: [
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
    ]
  },
  { 
    label: "Why Partner With Us", 
    href: "#why-us",
    dropdown: [
      { label: "Why Tandem Bridge Talent", href: "/why-tbt" },
      { label: "Why Nearshore", href: "/why-nearshore" },
      { label: "Why Colombia", href: "/why-colombia" },
    ]
  },
  { 
    label: "How It Works", 
    href: "#how-it-works",
    dropdown: [
      { label: "Our Process", href: "/our-process" },
      { label: "Nearshore vs Offshore", href: "/nearshore-vs-offshore" },
    ]
  },
  { label: "Our Story", href: "/our-story" },
  { label: "Careers", href: "/careers" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedCategory, setOpenNestedCategory] = useState<string | null>(null);
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<string[]>([]);
  const [showBrowseByRole, setShowBrowseByRole] = useState(false);

  const toggleMobileCategory = (category: string) => {
    setExpandedMobileCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md py-3"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">TB</span>
          </div>
          <span className="font-bold text-xl text-foreground">
            Tandem<span className="text-primary">Bridge</span> Talent
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              onMouseEnter={() => (item.dropdown || item.solutionsDropdown) && setOpenDropdown(item.label)}
              onMouseLeave={() => {
                setOpenDropdown(null);
                setOpenNestedCategory(null);
                setShowBrowseByRole(false);
              }}
            >
              {/* Solutions Dropdown with primary links + browse by role */}
              {item.solutionsDropdown ? (
                <>
                  <button
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-xs lg:text-sm"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 z-50"
                      >
                        <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[260px]">
                          {/* Primary service links */}
                          {item.solutionsDropdown.primaryLinks.map((link) => (
                            <Link
                              key={link.label}
                              to={link.href}
                              className="block px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                          
                          <div className="border-t border-border my-2" />
                          
                          {/* Browse by Role section */}
                          <div 
                            className="relative"
                            onMouseEnter={() => setShowBrowseByRole(true)}
                          >
                            <button
                              className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                            >
                              Browse by Role
                              <ChevronRight className="w-4 h-4" />
                            </button>
                            
                            {/* Role categories submenu */}
                            <AnimatePresence>
                              {showBrowseByRole && (
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -10 }}
                                  transition={{ duration: 0.15 }}
                                  className="absolute left-full top-0 ml-1 z-50"
                                >
                                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[220px]">
                                    {item.solutionsDropdown.roleCategories.map((category) => (
                                      <div 
                                        key={category.label}
                                        className="relative"
                                        onMouseEnter={() => setOpenNestedCategory(category.label)}
                                      >
                                        <button
                                          className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                                        >
                                          {category.label}
                                          <ChevronRight className="w-4 h-4" />
                                        </button>
                                        
                                        {/* Nested submenu */}
                                        <AnimatePresence>
                                          {openNestedCategory === category.label && (
                                            <motion.div
                                              initial={{ opacity: 0, x: -10 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              exit={{ opacity: 0, x: -10 }}
                                              transition={{ duration: 0.15 }}
                                              className="absolute left-full top-0 ml-1 z-50"
                                            >
                                              <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                                                {category.items.map((subItem) => (
                                                  <Link
                                                    key={subItem.label}
                                                    to={subItem.href}
                                                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                                                  >
                                                    {subItem.label}
                                                  </Link>
                                                ))}
                                              </div>
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    ))}
                                    
                                    <div className="border-t border-border my-2" />
                                    <Link
                                      to="/roles"
                                      className="block px-4 py-2.5 text-sm font-medium text-primary hover:bg-muted/50 transition-colors"
                                    >
                                      View All Roles
                                    </Link>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : item.dropdown ? (
                <>
                  <button
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-xs lg:text-sm"
                  >
                    {item.label === "Why Partner With Us" ? (
                      <><span className="hidden lg:inline">Why Partner With </span>Us</>
                    ) : (
                      item.label
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 z-50"
                      >
                        <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-xs lg:text-sm"
                >
                  {item.label === "Why Partner With Us" ? (
                    <><span className="hidden lg:inline">Why Partner With </span>Us</>
                  ) : (
                    item.label
                  )}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          {/* Tablet size button */}
          <div className="hidden md:block lg:hidden">
            <Button variant="hero" size="sm" asChild>
              <Link to="/book">Book a Call</Link>
            </Button>
          </div>
          {/* Desktop size button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/book">Book a Strategy Call</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-lg border-t border-border max-h-[80vh] overflow-y-auto"
        >
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {/* Solutions Mobile Dropdown */}
                {item.solutionsDropdown ? (
                  <div className="space-y-2">
                    <span className="text-foreground font-medium py-2 block">
                      {item.label}
                    </span>
                    <div className="pl-4 space-y-2 border-l-2 border-primary/20">
                      {/* Primary service links */}
                      {item.solutionsDropdown.primaryLinks.map((link) => (
                        <Link
                          key={link.label}
                          to={link.href}
                          className="text-foreground font-medium hover:text-primary transition-colors py-1 block text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                      
                      <div className="border-t border-border/50 my-2" />
                      
                      {/* Browse by Role toggle */}
                      <button
                        onClick={() => toggleMobileCategory("browse-by-role")}
                        className="w-full flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Browse by Role
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedMobileCategories.includes("browse-by-role") ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {expandedMobileCategories.includes("browse-by-role") && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1 border-l border-border/50">
                              {item.solutionsDropdown.roleCategories.map((category) => (
                                <div key={category.label}>
                                  <button
                                    onClick={() => toggleMobileCategory(category.label)}
                                    className="w-full flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                  >
                                    {category.label}
                                    <ChevronDown 
                                      className={`w-4 h-4 transition-transform duration-200 ${
                                        expandedMobileCategories.includes(category.label) ? 'rotate-180' : ''
                                      }`} 
                                    />
                                  </button>
                                  
                                  <AnimatePresence>
                                    {expandedMobileCategories.includes(category.label) && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                      >
                                        <div className="pl-4 space-y-1 border-l border-border/50">
                                          {category.items.map((subItem) => (
                                            <Link
                                              key={subItem.label}
                                              to={subItem.href}
                                              className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                                              onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                              {subItem.label}
                                            </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                              
                              <Link
                                to="/roles"
                                className="block py-2 text-sm font-medium text-primary hover:underline"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                View All Roles
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ) : item.dropdown ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleMobileCategory(item.label)}
                      className="w-full flex items-center justify-between py-2 text-foreground font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expandedMobileCategories.includes(item.label) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedMobileCategories.includes(item.label) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 space-y-2 border-l-2 border-primary/20">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="text-muted-foreground hover:text-primary transition-colors py-1 block text-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors py-2 font-medium block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <Button variant="hero" className="mt-4" asChild>
              <Link to="/book" onClick={() => setIsMobileMenuOpen(false)}>
                Book a Strategy Call
              </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};
