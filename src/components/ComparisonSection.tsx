import { useEffect, useRef, useState } from "react";

interface Project {
  num: string;
  title: string;
  desc: string;
  tech: string[];
  github: string;
  external?: string;
}

const projects: Project[] = [
  {
    num: "01",
    title: "YOURHRMS",
    desc: "Enterprise-grade HR Management app deployed on Google Play Store. Geolocation-validated attendance, FCM push notifications, and OTP authentication. Reduced app startup latency by 35% and delivery timelines by 25% through API optimisation and a shared component system.",
    tech: ["Flutter", "Riverpod", "Dio", "Firebase FCM", "Clean Architecture", "Play Store"],
    github: "https://github.com/kunal4419",
    external: "https://play.google.com/store",
  },
  {
    num: "02",
    title: "OYNX — GYM PLATFORM",
    desc: "Multi-tenant SaaS gym management platform with Supabase row-level security ensuring complete data isolation per gym owner. RBAC for Superadmin and Owner roles. Reduced missed renewals by 40% and manual follow-up effort by 60% via smart expiry filters and WhatsApp reminder automation.",
    tech: ["Flutter", "Supabase", "RBAC", "Multi-tenant", "Provider", "Analytics"],
    github: "https://github.com/kunal4419",
  },
  {
    num: "03",
    title: "MEDCARD — HEALTHCARE APP",
    desc: "Dual-role healthcare service discovery app with fully independent navigation stacks for Providers and Subscribers. Geospatial provider discovery with map integration and QR scanning. Flutter frontend integrated with a Python backend via REST APIs using a centralised Dio interceptor layer.",
    tech: ["Flutter", "Python REST API", "Dio", "Maps", "QR Scan", "Repository Pattern"],
    github: "https://github.com/kunal4419",
  },
];

const rotations = ["rotate-1", "-rotate-[0.5deg]", "rotate-[0.3deg]"];

const ComparisonSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
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
        <p className="font-mono text-xs uppercase tracking-widest text-secondary-foreground/50 text-center mb-16">
          Things I've built
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.num}
              className={`relative bg-background border-4 border-foreground p-8 ${rotations[i]} hover:rotate-0 transition-transform`}
              style={{ transitionTimingFunction: "steps(3)" }}
            >
              {/* Corner number tag */}
              <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground font-mono text-xs font-bold px-3 py-1 border-2 border-foreground rotate-[-3deg]">
                {project.num}
              </div>

              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3 border-b-2 border-foreground pb-2">
                // FEATURED PROJECT
              </h3>

              <h4 className="font-heading text-xl text-foreground mb-4">{project.title}</h4>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {project.desc}
              </p>

              <ul className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <li key={t} className="font-mono text-xs text-primary border border-primary/40 px-2 py-0.5">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-foreground border-b-2 border-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  GitHub ↗
                </a>
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-widest text-foreground border-b-2 border-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    Play Store ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="torn-edge-bottom bg-secondary" />
    </section>
  );
};

export default ComparisonSection;