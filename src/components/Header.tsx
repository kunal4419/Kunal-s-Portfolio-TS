import { useState, useEffect } from "react";

const navItems = ["ABOUT", "SKILLS", "PROJECTS", "EDUCATION", "CONTACT"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-secondary border-b-4 border-foreground transition-shadow ${scrolled ? "shadow-brutal-sm" : ""}`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-heading text-2xl md:text-3xl font-black text-primary tracking-tight">
          KUNAL<span className="text-secondary-foreground">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-widest text-secondary-foreground hover:-translate-y-[2px] transition-transform"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="mailto:patelkunal4419@gmail.com"
          className="stamp-button text-sm px-4 py-2 hidden md:inline-block"
        >
          HIRE ME
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden text-secondary-foreground font-mono text-xs border-2 border-secondary-foreground px-3 py-1">
          MENU
        </button>
      </div>
    </header>
  );
};

export default Header;
