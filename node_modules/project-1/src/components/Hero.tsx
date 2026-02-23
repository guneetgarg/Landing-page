import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const phrases = [
  "Test Automation",
  "Bug Detection",
  "Smart Reporting",
  "Quality Assurance",
];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentPhrase(target.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === target.length) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          setCurrentPhrase(target.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary mb-6 border border-primary/30 rounded-full px-4 py-1.5">
            Powered by Alternative Path
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 max-w-4xl mx-auto"
        >
          <span className="text-gradient">AI-Powered</span>
          <br />
          <span className="inline-flex items-center">
            {currentPhrase}
            <span className="ml-1 w-[3px] h-[0.85em] bg-primary animate-pulse inline-block" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          From automated test creation to real-time analytics — QA Path and
          TestLens use AI to eliminate manual effort, catch bugs earlier, and
          deliver release-ready confidence at every sprint.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://qa-path.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-lg glow-sm hover:opacity-90 transition-all text-sm"
          >
            Start Free Trial
            <ArrowRight size={16} />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-8 py-3.5 rounded-lg hover:bg-secondary transition-all text-sm"
          >
            Explore Products
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
