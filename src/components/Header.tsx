import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavItem {
  label: string;
  id?: string;
  path?: string;
  isPage?: boolean;
}

const navItems: NavItem[] = [
  { label: "ABOUT", id: "about" },
  { label: "PROJECTS", id: "projects" },
  { label: "SKILLS", id: "skills" },
  { label: "EDUCATION", id: "education" },
  { label: "INTERVIEW Q&A", path: "/interview-qa", isPage: true },
  { label: "CONTACT", id: "contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    setMenuOpen(false);

    if (item.isPage && item.path) {
      if (location.pathname === item.path) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(item.path);
      }
      return;
    }

    const targetId = item.id || item.label.toLowerCase();

    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (targetId === "about") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (targetId === "about") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 120);
    }
  };

  const isItemActive = (item: NavItem) => {
    if (item.isPage && item.path) {
      return location.pathname === item.path;
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-secondary transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          onClick={() => {
            setMenuOpen(false);
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="font-heading text-2xl md:text-3xl font-black text-primary tracking-tight"
        >
          KUNAL<span className="text-secondary-foreground">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`font-mono text-xs uppercase tracking-widest transition-all cursor-pointer ${
                  active
                    ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                    : "text-secondary-foreground hover:-translate-y-[2px] hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <a
          href="mailto:patelkunal4419@gmail.com"
          className="stamp-button text-sm px-4 py-2 hidden md:inline-block"
        >
          HIRE ME
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden text-secondary-foreground font-mono text-xs border-2 border-secondary-foreground px-3 py-1 bg-secondary hover:bg-muted/20 active:scale-95 transition-transform"
        >
          {menuOpen ? "CLOSE ✕" : "MENU ☰"}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-secondary border-t-2 border-foreground p-6 shadow-brutal flex flex-col gap-4 animate-glitch-reveal">
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`font-mono text-sm uppercase tracking-widest text-left py-2 border-b border-secondary-foreground/20 font-bold ${
                  active ? "text-primary" : "text-secondary-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <a
            href="mailto:patelkunal4419@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="stamp-button text-xs text-center py-3 mt-2"
          >
            HIRE ME
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;