import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Let's talk quality
          </h2>
          <p className="text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-8"
        >
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="How can we help?"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              hello@qa-path.com
            </span>
            <span className="flex items-center gap-2">
              <MessageSquare size={14} className="text-primary" />
              Live chat available
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
