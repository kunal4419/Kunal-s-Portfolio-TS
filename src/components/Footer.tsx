const Footer = () => {
  return (
    <footer className="bg-secondary border-t-4 border-foreground py-16 md:py-24 relative overflow-hidden">
      {/* Giant watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-heading text-[150px] md:text-[250px] lg:text-[350px] text-secondary-foreground/[0.07] leading-none tracking-tighter">
          KUNAL
        </span>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
          {/* Left side */}
          <div>
            <p className="font-heading text-2xl md:text-3xl text-primary mb-3">
              KUNAL<span className="text-secondary-foreground">//</span>
            </p>
            <p className="font-body text-sm text-secondary-foreground/60 max-w-xs leading-relaxed">
              Flutter Application Developer.<br />
              Building production-grade cross-platform mobile apps.
            </p>
          </div>

          {/* Right side nav */}
          <nav className="flex items-center gap-8">
            {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-xs uppercase tracking-widest text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-t border-secondary-foreground/10 pt-6">
          <p className="font-mono text-xs uppercase tracking-widest text-secondary-foreground/40">
            © 2026 KUNAL PATEL
          </p>
          <p className="font-mono text-xs text-secondary-foreground/40">
            patelkunal4419@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;