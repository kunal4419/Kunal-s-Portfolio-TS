import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData } from "@/data/projectsData";
import Header from "@/components/Header";
import NoiseOverlay from "@/components/NoiseOverlay";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Derive project directly from URL parameter to ensure instant synchronous updates on navigation
  const project = projectsData.find((p) => p.slug === slug);

  // Reset scroll position and lightbox when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedIndex(null);
  }, [slug]);

  // Keyboard navigation for Lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null || !project) return;
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + project.screenshots.length) % project.screenshots.length : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % project.screenshots.length : null
        );
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
        <NoiseOverlay />
        <h1 className="font-heading text-4xl mb-4">PROJECT NOT FOUND</h1>
        <p className="font-mono text-muted-foreground mb-8">The requested project could not be located.</p>
        <button
          onClick={() => navigate("/")}
          className="stamp-button"
        >
          ← BACK TO HOME
        </button>
      </div>
    );
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const apkOrStoreLink = project.external || `${project.github}/releases`;

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col">
      <NoiseOverlay />
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />

      {/* FIXED SIDE NAVIGATION ARROWS (DESKTOP) */}
      <button
        onClick={() => navigate(`/project/${prevProject.slug}`)}
        className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-primary text-primary-foreground border-4 border-foreground p-3 shadow-brutal hover:-translate-x-1 transition-transform flex-col items-center justify-center group cursor-pointer"
        title={`Previous Project: ${prevProject.title}`}
        aria-label={`Previous Project: ${prevProject.title}`}
      >
        <ChevronLeft className="w-6 h-6 stroke-[3]" />
        <span className="font-mono text-[9px] uppercase font-bold tracking-tighter mt-1">PREV</span>
      </button>

      <button
        onClick={() => navigate(`/project/${nextProject.slug}`)}
        className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-primary text-primary-foreground border-4 border-foreground p-3 shadow-brutal hover:translate-x-1 transition-transform flex-col items-center justify-center group cursor-pointer"
        title={`Next Project: ${nextProject.title}`}
        aria-label={`Next Project: ${nextProject.title}`}
      >
        <ChevronRight className="w-6 h-6 stroke-[3]" />
        <span className="font-mono text-[9px] uppercase font-bold tracking-tighter mt-1">NEXT</span>
      </button>

      {/* Main Container - Keyed by project slug to reset layout instantly */}
      <main key={project.slug} className="flex-1 container py-8 md:py-14 max-w-4xl mx-auto space-y-8 px-4 sm:px-6">
        {/* Top Navigation Row: Back Link */}
        <div>
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors border-b-2 border-foreground hover:border-primary pb-1 cursor-pointer font-bold"
          >
            ← Back to Projects
          </button>
        </div>

        {/* Project Header Banner */}
        <div className="relative bg-card border-4 border-foreground p-5 sm:p-8 md:p-10 shadow-brutal">
          <div className="absolute -top-4 -left-3 bg-primary text-primary-foreground font-mono text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 border-2 border-foreground rotate-[-2deg]">
            PROJECT {project.num}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pt-2">
            <span className="font-mono text-xs uppercase tracking-widest text-primary border border-primary px-3 py-1 bg-primary/10">
              // FEATURED PROJECT
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 leading-none">
            {project.title}
          </h1>

          <p className="font-mono text-sm sm:text-base text-primary mb-5 font-semibold">
            {project.subtitle}
          </p>

          <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
            {project.summary}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs text-foreground bg-secondary/10 border-2 border-foreground px-2.5 py-1 font-bold"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Clean Primary Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-5 border-t-2 border-foreground/20">
            <a
              href={apkOrStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="stamp-button text-xs sm:text-sm flex items-center gap-2 py-2.5 px-4"
            >
              📱 Download APK
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="stamp-button-outline text-xs sm:text-sm flex items-center gap-2 py-2.5 px-4"
            >
              💻 GitHub Repo
            </a>

            <button
              onClick={() => {
                const el = document.getElementById("screenshots");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="stamp-button-outline text-xs sm:text-sm flex items-center gap-2 py-2.5 px-4 cursor-pointer hover:border-primary"
            >
              🖼️ See Screenshots
            </button>
          </div>
        </div>

        {/* USER ROLES SECTION */}
        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground border-b-4 border-foreground pb-2">
            USER ROLES & ACCESS CONTROL
          </h2>
          <div className="grid gap-5">
            {project.userRoles.map((role, idx) => (
              <div
                key={role.title}
                className="bg-card border-4 border-foreground p-5 sm:p-6 shadow-brutal relative"
              >
                <div className="absolute top-3 right-3 bg-muted border border-foreground font-mono text-xs font-bold px-2 py-0.5">
                  ROLE 0{idx + 1}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-2">{role.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed">
                  <strong className="text-foreground font-mono">Purpose: </strong>
                  {role.purpose}
                </p>

                <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                  // Main Permissions & Capabilities
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {role.permissions.map((perm, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 font-body text-xs sm:text-sm text-foreground">
                      <span className="text-primary font-mono font-bold">✓</span>
                      <span>{perm}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* KEY FEATURES SECTION */}
        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground border-b-4 border-foreground pb-2">
            KEY FEATURES & MODULES
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {project.mainFeatures.map((feat, idx) => (
              <div
                key={feat.title}
                className="bg-card border-4 border-foreground p-5 shadow-brutal hover:-translate-y-1 transition-transform"
              >
                <div className="font-mono text-xs text-primary font-bold mb-1.5">
                  FEATURE 0{idx + 1}
                </div>
                <h3 className="font-heading text-lg sm:text-xl text-foreground mb-2">{feat.title}</h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* OPERATIONAL / SYSTEM FLOW SECTION */}
        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground border-b-4 border-foreground pb-2">
            {project.flowTitle.toUpperCase()}
          </h2>
          <div className="bg-card border-4 border-foreground p-5 sm:p-8 shadow-brutal">
            <div className="relative space-y-6">
              {/* Vertical connecting line perfectly aligned with the center of all number boxes */}
              <div className="absolute left-[13px] top-3 bottom-3 w-1 bg-primary" />

              {project.flowSteps.map((step, idx) => (
                <div key={idx} className="relative flex items-center gap-4 z-10">
                  <div className="bg-primary text-primary-foreground font-mono text-xs font-bold w-7 h-7 border-2 border-foreground flex items-center justify-center shrink-0 shadow-brutal-sm">
                    {idx + 1}
                  </div>
                  <p className="font-body text-xs sm:text-sm text-foreground leading-relaxed font-medium">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCREENSHOTS SECTION */}
        <section id="screenshots" className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-4 border-foreground pb-2">
            <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
              APPLICATION SCREENSHOTS
            </h2>
            <span className="font-mono text-xs text-primary font-bold bg-primary/10 border border-primary px-2.5 py-0.5">
              {project.screenshots.length} SCREENSHOTS
            </span>
          </div>

          {/* Clean 9:16 Full Image Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {project.screenshots.map((screen, idx) => (
              <div
                key={`${project.slug}-${idx}-${screen.url}`}
                onClick={() => setSelectedIndex(idx)}
                className="cursor-pointer group flex flex-col items-center"
              >
                <div className="w-full aspect-[9/16] bg-background flex items-center justify-center overflow-hidden">
                  <img
                    src={screen.url}
                    alt={screen.title}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span
                  className="font-mono text-[11px] text-muted-foreground mt-1.5 truncate max-w-full text-center"
                  title={screen.title}
                >
                  {screen.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM NAVIGATION ROW */}
        <div className="flex items-center justify-between gap-3 border-t-4 border-foreground pt-6 pb-2">
          <button
            onClick={() => navigate(`/project/${prevProject.slug}`)}
            className="stamp-button-outline text-xs sm:text-sm py-2.5 px-4 flex items-center gap-2 font-mono font-bold cursor-pointer"
          >
            ← Previous Project ({prevProject.title})
          </button>
          <button
            onClick={() => navigate(`/project/${nextProject.slug}`)}
            className="stamp-button text-xs sm:text-sm py-2.5 px-4 flex items-center gap-2 font-mono font-bold cursor-pointer"
          >
            Next Project ({nextProject.title}) →
          </button>
        </div>
      </main>

      {/* LIGHTBOX MODAL WITH TRANSPARENT BACKDROP & NEXT / PREV NAVIGATION */}
      {selectedIndex !== null && project.screenshots[selectedIndex] && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-xs sm:max-w-sm md:max-w-md w-full relative flex flex-col items-center animate-glitch-reveal"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-10 right-0 bg-primary text-primary-foreground font-mono text-xs font-bold px-3 py-1 border-2 border-foreground cursor-pointer shadow-brutal-sm hover:scale-105 transition-transform z-20"
            >
              CLOSE ✕
            </button>

            {/* PREVIOUS IMAGE ARROW BUTTON */}
            <button
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + project.screenshots.length) % project.screenshots.length
                )
              }
              className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 sm:p-3 border-2 border-foreground shadow-brutal hover:scale-110 transition-transform cursor-pointer z-20"
              title="Previous Screenshot"
              aria-label="Previous Screenshot"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
            </button>

            {/* NEXT IMAGE ARROW BUTTON */}
            <button
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % project.screenshots.length)
              }
              className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 sm:p-3 border-2 border-foreground shadow-brutal hover:scale-110 transition-transform cursor-pointer z-20"
              title="Next Screenshot"
              aria-label="Next Screenshot"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
            </button>

            {/* UNCROPPED TRANSPARENT PHONE SCREENSHOT */}
            <div className="w-full aspect-[9/16] max-h-[80vh] flex items-center justify-center overflow-hidden drop-shadow-2xl">
              <img
                key={project.screenshots[selectedIndex].url}
                src={project.screenshots[selectedIndex].url}
                alt={project.screenshots[selectedIndex].title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* CAPTION BADGE */}
            <p className="font-mono text-xs text-white text-center mt-3 font-bold flex items-center justify-center gap-2 bg-black/70 px-3 py-1.5 border border-white/20">
              <span className="bg-primary px-2 py-0.5 border border-white text-primary-foreground text-[10px]">
                {selectedIndex + 1} / {project.screenshots.length}
              </span>
              <span>{project.screenshots[selectedIndex].title}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
