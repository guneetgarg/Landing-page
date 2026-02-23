import { motion } from "framer-motion";
import { Bot, Shield, Zap, GitBranch, Layers, Clock } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Test Generation",
    desc: "Automatically generate comprehensive test cases from your application flows.",
  },
  {
    icon: Shield,
    title: "Quality Assurance Consulting",
    desc: "Expert guidance to build robust QA processes tailored to your team.",
  },
  {
    icon: Zap,
    title: "Test Automation",
    desc: "Accelerate releases with automated regression and smoke testing suites.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    desc: "Seamlessly integrate testing into your deployment pipeline.",
  },
  {
    icon: Layers,
    title: "Custom Reporting",
    desc: "Tailored dashboards and reports aligned with your business KPIs.",
  },
  {
    icon: Clock,
    title: "24/7 Test Monitoring",
    desc: "Continuous monitoring with instant alerts on test failures and regressions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Services
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Everything your QA needs
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From strategy to execution, we've got you covered.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <service.icon className="text-primary mb-4" size={22} />
              <h3 className="font-display font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
