import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "For individuals and small projects",
    features: [
      "Up to 3 projects",
      "Basic test management",
      "Community support",
      "Standard reporting",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    desc: "For growing teams that need more power",
    features: [
      "Unlimited projects",
      "AI test generation",
      "Priority support",
      "Advanced analytics",
      "CI/CD integration",
      "TestLens included",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For organizations with advanced needs",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start free and scale as your team grows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "glass border-primary/50 glow-sm"
                  : "glass"
              }`}
            >
              {plan.highlighted && (
                <span className="text-xs font-medium text-primary mb-4 uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-display font-semibold mb-1">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-display font-bold">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center text-sm font-medium py-3 rounded-lg transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
