import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
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

    const socialLinks = [
        { label: "GITHUB", url: "https://github.com/kunal4419" },
        { label: "LINKEDIN", url: "https://www.linkedin.com/in/kunal-patel-b81374290" },
        { label: "LEETCODE", url: "https://leetcode.com/kunal4419" },
    ];

    return (
        <section id="contact" className="border-b-4 border-foreground py-20 md:py-32">
            <div
                ref={ref}
                className={`container max-w-3xl mx-auto text-center ${visible ? "animate-glitch-reveal" : "opacity-0"}`}
            >
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6 border-2 border-foreground inline-block px-4 py-1">
                    What's Next?
                </p>

                <h2 className="font-heading text-5xl md:text-7xl mb-8">
                    GET IN <span className="text-primary">TOUCH</span>
                </h2>

                <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                    Although I'm currently looking for any new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a
                    href="mailto:patelkunal4419@gmail.com"
                    className="stamp-button text-lg px-10 py-4 inline-block mb-16"
                >
                    SAY HELLO
                </a>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-8 border-t-2 border-foreground pt-10">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground border-b-2 border-transparent hover:border-foreground transition-all"
                        >
                            {link.label} ↗
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
