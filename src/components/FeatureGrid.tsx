import { useEffect, useRef, useState } from "react";

const skills = [
  { num: "01", title: "FLUTTER & DART", desc: "Cross-platform mobile app development for Android and iOS. Custom widgets, animations, gesture handlers, and platform channels." },
  { num: "02", title: "STATE MANAGEMENT", desc: "Riverpod, Provider, GetX, and BLoC — choosing the right pattern per use case, not just defaulting to one." },
  { num: "03", title: "CLEAN ARCHITECTURE", desc: "Feature-first modularisation, Repository Pattern, Dependency Injection, and separation of domain, data, and presentation layers." },
  { num: "04", title: "REST API & AUTH", desc: "Dio HTTP client, interceptors, token refresh, JWT session handling, OTP auth, and flutter_secure_storage for encrypted token persistence." },
  { num: "05", title: "FIREBASE & SUPABASE", desc: "FCM push notifications with device token sync, Firestore, and Supabase multi-tenant architecture with row-level security." },
  { num: "06", title: "DEVICE APIs", desc: "Geolocation with out-of-bound detection, camera integration, push notifications (FCM/APNs), local storage, and file system access." },
  { num: "07", title: "PERFORMANCE OPT.", desc: "Widget rebuild minimisation, lazy loading, image caching, API response caching, and memory profiling with Flutter DevTools." },
  { num: "08", title: "CI/CD & DEPLOYMENT", desc: "Google Play Console, app signing, build variants, release tracks, production rollouts, and GitHub Actions automation." },
  { num: "09", title: "AI-AUGMENTED DEV", desc: "Architecture-first workflow using Claude Code and GitHub Copilot — research → LLD design → implementation → optimisation." },
  { num: "10", title: "PROBLEM SOLVING", desc: "250+ problems solved on LeetCode, GeeksforGeeks, and HackerRank. Strong Dart fundamentals: async/await, streams, null safety." },
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