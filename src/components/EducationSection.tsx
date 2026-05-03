import { useEffect, useRef, useState } from "react";

interface EducationEntry {
    num: string;
    title: string;
    institution: string;
    range: string;
    location: string;
    bullets: string[];
}

const educationData: EducationEntry[] = [
    {
        num: "01",
        title: "APPLICATION DEVELOPER (FLUTTER)",
        institution: "Sanpurnam Infotech",
        range: "Jan 2026 – Present",
        location: "Sangli, Maharashtra",
        bullets: [
            "Building and deploying production Flutter apps on Google Play Store",
            "Clean Architecture, Riverpod state management, REST API integration, and FCM push notifications",
            "Reduced API latency by 25% and app startup time by 35% on live production codebase",
        ],
    },
    {
        num: "02",
        title: "B-TECH IN COMPUTER SCIENCE & ENGINEERING",
        institution: "Sharad Institute of Technology, Yadrav",
        range: "July 2022 – June 2026 (Expected)",
        location: "Yadrav, India",
        bullets: [
            "Current CGPA: 8.01",
            "Focused on software development, data structures, algorithms, and mobile architecture",
            "Active participant in coding competitions and technical communities",
        ],
    },
    {
        num: "03",
        title: "AWS ACADEMY GRADUATE",
        institution: "AWS Academy",
        range: "2024",
        location: "Cloud Foundations Award",
        bullets: [
            "Completed foundational AWS Cloud training covering core cloud concepts",
            "Learned IAM, networking, compute, storage, security, and deployment",
            "Hands-on experience with AWS services and cloud architecture",
        ],
    },
    {
        num: "04",
        title: "HIGHER SECONDARY CERTIFICATE (HSC)",
        institution: "Vyankateshwara Junior College",
        range: "June 2020 – May 2021",
        location: "Ichalkaranji, India",
        bullets: [
            "Completed with 92.67% — Science stream",
            "Focus on Mathematics and Computer Science",
            "Strong foundation in analytical and logical thinking",
        ],
    },
];

const rotations = ["rotate-[0.4deg]", "-rotate-[0.3deg]", "rotate-[0.2deg]", "-rotate-[0.4deg]"];

const EducationSection = () => {
    const [visible, setVisible] = useState(false);
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
        <section id="education" className="border-b-4 border-foreground py-20 md:py-32">
            <div
                ref={ref}
                className={`container ${visible ? "animate-glitch-reveal" : "opacity-0"}`}
            >
                <h2 className="font-heading text-4xl md:text-6xl text-center mb-4">
                    MY <span className="text-primary">JOURNEY</span>
                </h2>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground text-center mb-16">
                    Experience, education & certifications
                </p>

                <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {educationData.map((entry, i) => (
                        <div
                            key={entry.num}
                            className={`relative bg-card border-2 border-foreground shadow-brutal p-8 pt-10 ${rotations[i]} hover:rotate-0 transition-transform`}
                            style={{ transitionTimingFunction: "steps(3)" }}
                        >
                            {/* Corner tag */}
                            <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground font-mono text-xs font-bold px-3 py-1 border-2 border-foreground rotate-[-3deg]">
                                {entry.num}
                            </div>

                            <h3 className="font-heading text-lg mb-1">{entry.title}</h3>
                            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-1">{entry.range}</p>
                            <p className="font-mono text-xs text-muted-foreground mb-4">{entry.location}</p>

                            <ul className="space-y-2">
                                {entry.bullets.map((bullet, j) => (
                                    <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary font-bold mt-0.5">▹</span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;