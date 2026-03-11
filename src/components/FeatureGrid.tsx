import { useEffect, useRef, useState } from "react";

const skills = [
  { num: "01", title: "JAVA", desc: "Object-oriented programming, data structures, algorithms, and backend development." },
  { num: "02", title: "JAVASCRIPT", desc: "Full-stack JS development including ES6+, async patterns, and DOM manipulation." },
  { num: "03", title: "REACT", desc: "Component-driven UIs with hooks, state management, and responsive design." },
  { num: "04", title: "NODE.JS & EXPRESS", desc: "RESTful API development, middleware, JWT auth, and scalable server architecture." },
  { num: "05", title: "DATABASES", desc: "MongoDB & PostgreSQL — schema design, migrations, seeders, and query optimization." },
  { num: "06", title: "CLOUD & DEVOPS", desc: "AWS (IAM, EC2, S3) and GCP — deployment, networking, and cloud architecture." },
  { num: "07", title: "HTML & CSS", desc: "Semantic markup, responsive layouts, and modern CSS including Flexbox and Grid." },
  { num: "08", title: "TAILWIND CSS", desc: "Rapid UI development with utility-first CSS and a consistent design system." },
  { num: "09", title: "NEXT.JS", desc: "Server-side rendering, routing, and building production-grade React applications." },
  { num: "10", title: "PROBLEM SOLVING", desc: "250+ problems solved on LeetCode, GeeksforGeeks, and HackerRank." },
];

const rotations = ["rotate-1", "-rotate-1", "rotate-[0.5deg]", "-rotate-[0.5deg]", "rotate-1", "-rotate-[0.7deg]", "rotate-[0.3deg]", "-rotate-1", "rotate-[0.6deg]", "-rotate-[0.4deg]"];

const FeatureGrid = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="border-b-4 border-foreground py-20 md:py-32">
      <div
        ref={ref}
        className={`container ${visible ? "animate-glitch-reveal" : "opacity-0"}`}
      >
        <h2 className="font-heading text-4xl md:text-6xl text-center mb-4">
          MY <span className="text-primary">SKILLS</span>
        </h2>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground text-center mb-16">
          Technologies I work with
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((f, i) => (
            <div
              key={f.num}
              className={`relative bg-card border-2 border-foreground shadow-brutal p-8 pt-10 ${rotations[i]} hover:rotate-0 transition-transform`}
              style={{ transitionTimingFunction: "steps(3)" }}
            >
              {/* Corner tag */}
              <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground font-mono text-xs font-bold px-3 py-1 border-2 border-foreground rotate-[-3deg]">
                {f.num}
              </div>

              <h3 className="font-heading text-xl mb-3">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
