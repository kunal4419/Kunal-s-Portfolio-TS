import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Github, Download, ArrowRight, Lock, Construction } from "lucide-react";
import { projectsData, ProjectData } from "@/data/projectsData";
import { PrivateRepoModal } from "./PrivateRepoModal";
import { UnderDevModal } from "./UnderDevModal";

const rotations = [
  "rotate-1",
  "-rotate-[0.5deg]",
  "rotate-[0.3deg]",
  "-rotate-1",
  "rotate-[0.6deg]",
  "-rotate-[0.4deg]"
];

const ComparisonSection = () => {
  const [visible, setVisible] = useState(false);
  const [privateModalProject, setPrivateModalProject] = useState<ProjectData | null>(null);
  const [underDevProject, setUnderDevProject] = useState<ProjectData | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative bg-secondary circuit-grid border-b-4 border-foreground">
      <div className="torn-edge-top bg-secondary" />
      <div
        ref={ref}
        className={`container py-20 md:py-32 ${visible ? "animate-glitch-reveal" : "opacity-0"}`}
      >
        <h2 className="font-heading text-4xl md:text-6xl text-secondary-foreground text-center mb-4">
          MY <span className="text-primary">PROJECTS</span>
        </h2>
        <p className="font-mono text-xs uppercase tracking-widest text-secondary-foreground/60 text-center mb-16">
          ALL 6 FEATURED APPLICATIONS & PRODUCTION SYSTEMS
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, i) => {
            const apkOrStoreUrl = project.external || `${project.github}/releases`;

            return (
              <div
                key={project.slug}
                className={`relative bg-background border-4 border-foreground p-8 flex flex-col justify-between ${rotations[i % rotations.length]} hover:rotate-0 transition-transform shadow-brutal`}
                style={{ transitionTimingFunction: "steps(3)" }}
              >
                {/* Top corner number tag */}
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground font-mono text-xs font-bold px-3 py-1 border-2 border-foreground rotate-[-3deg]">
                  PROJECT {project.num}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4 border-b-2 border-foreground pb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      // PRODUCTION APP
                    </span>

                    <div className="flex items-center gap-3">
                      {project.isPrivate ? (
                        <button
                          type="button"
                          onClick={() => setPrivateModalProject(project)}
                          className="text-foreground hover:text-primary transition-colors p-0.5 relative group cursor-pointer"
                          title="Private Production Repository (Click for info)"
                          aria-label="Private Production Repository"
                        >
                          <Github className="w-4 h-4" />
                          <span className="absolute -top-1 -right-1 bg-primary text-[8px] rounded-full p-0.5 text-primary-foreground">
                            <Lock className="w-2 h-2" />
                          </span>
                        </button>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors p-0.5"
                          title="GitHub Repository"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}

                      {project.isUnderDevelopment ? (
                        <button
                          type="button"
                          onClick={() => setUnderDevProject(project)}
                          className="text-foreground hover:text-primary transition-colors p-0.5 cursor-pointer relative"
                          title="App Under Development (Click to view status)"
                          aria-label="App Under Development"
                        >
                          <Download className="w-4 h-4" />
                          <span className="absolute -top-1 -right-1 bg-amber-500 text-[8px] rounded-full p-0.5 text-black font-bold">
                            <Construction className="w-2 h-2" />
                          </span>
                        </button>
                      ) : (
                        <a
                          href={apkOrStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors p-0.5"
                          title="Download APK / App Link"
                          aria-label="Download APK"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl text-foreground mb-1">{project.title}</h3>
                  <p className="font-mono text-xs text-primary mb-4 font-semibold">{project.subtitle}</p>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <ul className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <li key={t} className="font-mono text-[11px] text-primary border border-primary/40 px-2 py-0.5 bg-primary/5">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t-2 border-foreground/20">
                  <Link
                    to={`/project/${project.slug}`}
                    className="stamp-button w-full text-xs text-center uppercase py-2.5 px-4 font-bold tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>MORE INFORMATION & SCREENSHOTS</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="torn-edge-bottom bg-secondary" />

      {/* Private Repo Info Popup Modal */}
      <PrivateRepoModal
        isOpen={Boolean(privateModalProject)}
        onClose={() => setPrivateModalProject(null)}
        project={privateModalProject}
      />

      {/* Under Development Info Popup Modal */}
      <UnderDevModal
        isOpen={Boolean(underDevProject)}
        onClose={() => setUnderDevProject(null)}
        project={underDevProject}
      />
    </section>
  );
};

export default ComparisonSection;