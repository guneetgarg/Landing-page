import { motion } from "framer-motion";
import { TestTube2, BarChart3, ArrowUpRight, Check, Zap, Shield, RefreshCw, LineChart, Brain, Clock, Users, TrendingUp } from "lucide-react";

const products = [
  {
    icon: TestTube2,
    name: "QA Path",
    tagline: "AI That Tests So You Don't Have To",
    description:
      "Let AI write, execute, and manage your test cases — from smoke tests to full regression suites. QA Path learns your application, adapts to changes, and keeps your releases rock-solid without the manual grind.",
    longDescription:
      "QA Path uses machine learning to understand your application's behavior, automatically generating comprehensive test suites that evolve with your codebase. No more brittle scripts or manual test maintenance — just reliable, intelligent testing that scales with your team.",
    features: [
      { icon: Brain, text: "AI-generated test cases from user stories" },
      { icon: RefreshCw, text: "Self-healing automated test execution" },
      { icon: Shield, text: "Visual test management dashboard" },
      { icon: Zap, text: "Seamless CI/CD pipeline integration" },
    ],
    stats: [
      { value: "80%", label: "Less manual testing" },
      { value: "3x", label: "Faster releases" },
      { value: "99.5%", label: "Test reliability" },
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
    longDescription:
      "TestLens aggregates data from every test run across your entire pipeline, applying AI-powered analysis to surface patterns, predict failures, and quantify release readiness — all in real-time dashboards your whole team can understand.",
    features: [
      { icon: LineChart, text: "One-click intelligent report generation" },
      { icon: Clock, text: "Real-time quality health dashboards" },
      { icon: TrendingUp, text: "Predictive trend analysis & risk alerts" },
      { icon: Users, text: "Team velocity & coverage insights" },
    ],
    stats: [
      { value: "10x", label: "Faster reporting" },
      { value: "60%", label: "Fewer escaped bugs" },
      { value: "100%", label: "Pipeline visibility" },
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
          className="text-center mb-20"
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

        <div className="space-y-32 max-w-6xl mx-auto">
          {products.map((product, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div key={product.name} className="space-y-12">
                {/* Main product row */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}
                >
                  {/* Text side */}
                  <div className="flex-1 space-y-5">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                      <product.icon size={16} />
                      {product.name}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-display font-bold leading-tight">
                      {product.tagline}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <p className="text-muted-foreground/80 leading-relaxed text-sm">
                      {product.longDescription}
                    </p>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                      {product.cta}
                      <ArrowUpRight size={16} />
                    </a>
                  </div>

                  {/* Features side */}
                  <div className="flex-1 w-full">
                    <div className="glass rounded-2xl p-8 space-y-4">
                      <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                        Key Features
                      </span>
                      <ul className="space-y-5 mt-4">
                        {product.features.map((f, fi) => (
                          <motion.li
                            key={f.text}
                            initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: fi * 0.1 + 0.3 }}
                            className="flex items-start gap-3 text-sm"
                          >
                            <div className="mt-0.5 w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                              <f.icon size={16} className="text-primary" />
                            </div>
                            <span className="text-secondary-foreground pt-1">{f.text}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
                >
                  {product.stats.map((stat, si) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.1 + 0.4 }}
                      className="glass rounded-xl p-5 text-center"
                    >
                      <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
