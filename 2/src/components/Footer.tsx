const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-xs">QA</span>
          </div>
          <span className="font-display font-semibold text-foreground">QA Path</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} QA Path. Powered by Alternative Path. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#products" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Products</a>
          <a href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#pricing" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
