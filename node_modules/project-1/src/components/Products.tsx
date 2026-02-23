import { motion } from "framer-motion";
import { TestTube2, BarChart3, ArrowUpRight } from "lucide-react";

const products = [
  {
    icon: TestTube2,
    name: "QA Path",
    tagline: "AI That Tests So You Don't Have To",
    description:
      "Let AI write, execute, and manage your test cases — from smoke tests to full regression suites. QA Path learns your application, adapts to changes, and keeps your releases rock-solid without the manual grind.",
    features: [
      "AI-generated test cases from user stories",
      "Self-healing automated test execution",
      "Visual test management dashboard",
      "Seamless CI/CD pipeline integration",
    ],
    link: "https://qa-path.com/login",
    cta: "Try QA Path",
  },
  {
    icon: BarChart3,
    name: "TestLens",
    tagline: "Turn Test Data Into Decisions",
    description:
      "Stop digging through logs. TestLens uses AI to distill thousands of test results into clear, actionable reports — so your team knows exactly what to fix, what's stable, and when you're ready to ship.",
    features: [
      "One-click intelligent report generation",
      "Real-time quality health dashboards",
      "Predictive trend analysis & risk alerts",
      "Team velocity & coverage insights",
    ],
    link: "https://testlens.qa-path.com",
    cta: "Try TestLens",
  },
];

const Products = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Two tools. One mission.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Streamline your QA workflow from test creation to reporting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-8 group hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <product.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-1">
                {product.name}
              </h3>
              <p className="text-primary text-sm mb-4">{product.tagline}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {product.description}
              </p>
              <ul className="space-y-2 mb-8">
                {product.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-secondary-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                {product.cta}
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
