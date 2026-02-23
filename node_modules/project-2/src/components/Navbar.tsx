import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TestTube2, BarChart3, ArrowUpRight, ChevronDown } from "lucide-react";

const productItems = [
  {
    icon: TestTube2,
    name: "QA Path",
    desc: "AI-powered test automation — write, execute, and manage test cases effortlessly.",
    link: "https://qa-path.com/login",
  },
  {
    icon: BarChart3,
    name: "TestLens",
    desc: "Turn thousands of test results into clear, actionable reports with AI analysis.",
    link: "https://testlens.qa-path.com",
  },
];

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">QA</span>
          </div>
          <span className="font-display font-semibold text-lg text-foreground">
            QA Path
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {/* Products dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 z-50 rounded-xl border border-border bg-background shadow-lg p-2"
                >
                  {productItems.map((product) => (
                    <a
                      key={product.name}
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setProductsOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <product.icon size={18} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-semibold text-foreground">
                            {product.name}
                          </span>
                          <ArrowUpRight
                            size={12}
                            className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                          {product.desc}
                        </p>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://qa-path.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {/* Mobile product links */}
              <div className="space-y-2">
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                  Products
                </span>
                {productItems.map((product) => (
                  <a
                    key={product.name}
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <product.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">{product.name}</span>
                      <p className="text-xs text-muted-foreground">{product.desc}</p>
                    </div>
                  </a>
                ))}
              </div>

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://qa-path.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-lg text-center"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
