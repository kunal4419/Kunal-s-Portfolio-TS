import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b-4 border-foreground">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-heading text-[300px] md:text-[500px] text-foreground opacity-[0.04] leading-none">
          $
        </span>
      </div>

      {/* Halftone */}
      <div className="halftone" />

      <div ref={ref} className={`relative z-10 text-center px-4 max-w-5xl mx-auto ${visible ? "animate-glitch-reveal" : "opacity-0"}`}>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6 border-2 border-foreground inline-block px-4 py-1">
          HI, MY NAME IS
        </p>

        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-black leading-[0.95] mb-8">
          <span className="inline-block rotate-[-0.5deg]">KUNAL</span>{" "}
          <span className="inline-block rotate-[0.5deg] text-primary">PATEL</span>
          <br />
          <span className="inline-block rotate-[0.3deg] text-4xl sm:text-5xl md:text-6xl">DEVELOPER.</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          A computer science student and aspiring software developer with a strong interest in full-stack web development and cloud technologies. I build scalable, user-centric applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:patelkunal4419@gmail.com" className="stamp-button text-lg px-8 py-4">
            GET IN TOUCH
          </a>
          <a href="https://drive.google.com/file/d/1fJNWWkE6Y7d8yhzqx7w8PP73iIUM5kuT/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="stamp-button-outline text-lg px-8 py-4">
            VIEW RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
