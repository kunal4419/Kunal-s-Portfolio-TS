import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  X, 
  ChevronDown, 
  Copy, 
  Check, 
  BookOpen, 
  Layers, 
  Sparkles, 
  ArrowUp, 
  Share2,
  FileText
} from "lucide-react";
import Header from "@/components/Header";
import NoiseOverlay from "@/components/NoiseOverlay";
import Footer from "@/components/Footer";
import TickerBanner from "@/components/TickerBanner";
import { flutterInterviewQAData, QAItem } from "@/data/flutterInterviewQA";
import { toast } from "sonner";

// Highlight search query occurrences in text
const HighlightText = ({ text, query }: { text: string; query: string }) => {
  if (!query.trim()) return <span>{text}</span>;

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedQuery})`, "gi");
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark
            key={i}
            className="bg-primary/20 text-primary font-bold px-1 rounded-sm border-b-2 border-primary"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

// Rich Structured Answer Renderer
const AnswerContent = ({ answer, query }: { answer: string; query: string }) => {
  const lines = answer.split("\n");

  return (
    <div className="space-y-3 font-body text-sm sm:text-base text-foreground/90 leading-relaxed pt-2">
      {lines.map((rawLine, idx) => {
        const line = rawLine.trim();
        if (!line) return null;

        // Subheadings like "Android Integration:", "Firebase Setup:", "FutureBuilder:", etc.
        const isSubheading =
          (line.endsWith(":") && line.length < 50 && !line.startsWith("•") && !/^\d+\./.test(line)) ||
          line === "Steps:" ||
          line === "Usage in widgets:" ||
          line === "Hive Implementation:" ||
          line === "SQFLite Implementation:";

        // Bullet points
        const isBullet = line.startsWith("•") || line.startsWith("- ");
        const bulletText = isBullet ? line.replace(/^[•\-]\s*/, "") : line;

        // Numbered steps like "1. ", "2. ", etc.
        const stepMatch = line.match(/^(\d+)\.\s+(.*)/);

        // Code/command like "flutter run --profile" or single code lines
        const isCommand = line.startsWith("flutter ") || line.startsWith("await ") || line.includes("SharedPreferences preferences =");

        if (isSubheading) {
          return (
            <div key={idx} className="pt-3 pb-1">
              <span className="inline-block font-mono text-xs uppercase tracking-wider font-bold text-primary bg-primary/10 border-l-4 border-primary px-2.5 py-1 shadow-sm">
                <HighlightText text={line} query={query} />
              </span>
            </div>
          );
        }

        if (stepMatch) {
          const stepNum = stepMatch[1];
          const stepContent = stepMatch[2];
          return (
            <div key={idx} className="flex items-start gap-3 pl-1 sm:pl-2">
              <span className="shrink-0 w-6 h-6 rounded-full bg-secondary text-secondary-foreground font-mono text-xs font-bold flex items-center justify-center border border-foreground/30 shadow-sm mt-0.5">
                {stepNum}
              </span>
              <p className="flex-1 font-body text-sm sm:text-base text-foreground">
                <HighlightText text={stepContent} query={query} />
              </p>
            </div>
          );
        }

        if (isBullet) {
          return (
            <div key={idx} className="flex items-start gap-3 pl-2 sm:pl-4">
              <span className="shrink-0 text-primary font-mono font-bold mt-1 text-base">▪</span>
              <p className="flex-1 font-body text-sm sm:text-base text-foreground">
                <HighlightText text={bulletText} query={query} />
              </p>
            </div>
          );
        }

        if (isCommand) {
          return (
            <div key={idx} className="my-2 p-2.5 bg-secondary text-secondary-foreground font-mono text-xs sm:text-sm border-2 border-foreground rounded overflow-x-auto shadow-brutal-sm">
              <HighlightText text={line} query={query} />
            </div>
          );
        }

        return (
          <p key={idx} className="font-body text-sm sm:text-base text-foreground leading-relaxed">
            <HighlightText text={line} query={query} />
          </p>
        );
      })}
    </div>
  );
};

const InterviewQA = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Listen to scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    flutterInterviewQAData.forEach((q) => set.add(q.category));
    return ["All", ...Array.from(set)];
  }, []);

  // Filter questions based on category and search query
  const filteredQuestions = useMemo(() => {
    return flutterInterviewQAData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const qLower = searchQuery.toLowerCase();
      const matchQuestion = item.question.toLowerCase().includes(qLower);
      const matchAnswer = item.answer.toLowerCase().includes(qLower);
      const matchCategory = item.category.toLowerCase().includes(qLower);
      const matchId = `${item.id}` === qLower || `${item.id}.`.startsWith(qLower);

      return matchQuestion || matchAnswer || matchCategory || matchId;
    });
  }, [searchQuery, selectedCategory]);

  // Toggle single item
  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Expand all currently filtered items
  const expandAll = () => {
    const next: Record<number, boolean> = {};
    filteredQuestions.forEach((q) => {
      next[q.id] = true;
    });
    setOpenItems(next);
  };

  // Collapse all items
  const collapseAll = () => {
    setOpenItems({});
  };

  // Check if all visible items are expanded
  const areAllExpanded = useMemo(() => {
    if (filteredQuestions.length === 0) return false;
    return filteredQuestions.every((q) => openItems[q.id]);
  }, [filteredQuestions, openItems]);

  // Copy question & answer
  const copyQA = (item: QAItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const textToCopy = `Q${item.id}: ${item.question}\n\nAnswer:\n${item.answer}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    toast.success(`Copied Question #${item.id} to clipboard!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Share question link
  const shareQuestion = (item: QAItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/interview-qa#q-${item.id}`;
    navigator.clipboard.writeText(url);
    toast.success(`Direct link to Question #${item.id} copied!`);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-primary-foreground">
      <NoiseOverlay />
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />

      {/* Hero Banner */}
      <div className="bg-secondary text-secondary-foreground border-b-4 border-foreground py-10 md:py-16 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none select-none font-heading text-[120px] md:text-[200px] leading-none">
          FLUTTER
        </div>

        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-primary bg-primary/20 border border-primary px-3 py-1 font-bold">
              // COMPLETE INTERVIEW DOCUMENTATION
            </span>
            <span className="font-mono text-xs text-secondary-foreground/70 bg-secondary-foreground/10 px-2.5 py-1 border border-secondary-foreground/20">
              {flutterInterviewQAData.length} TOP-TIER QUESTIONS
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl tracking-tight text-secondary-foreground">
            FLUTTER INTERVIEW <span className="text-primary">Q&A</span>
          </h1>

          <p className="font-body text-sm sm:text-base md:text-lg text-secondary-foreground/80 max-w-3xl leading-relaxed">
            Essential Flutter and Dart interview questions & answers compiled for mobile app developers. Covers Core Architecture, State Management, Native Method Channels, SQLite & Hive, Lifecycle, Testing, Push Notifications, and Production Deployments.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/Flutter_Interview_QA.docx"
              download="Flutter_Interview_QA.docx"
              className="stamp-button text-xs sm:text-sm py-2 px-4 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>DOWNLOAD ORIGINAL DOCX</span>
            </a>
            <Link
              to="/"
              className="stamp-button-outline text-xs sm:text-sm py-2 px-4 font-mono font-bold"
            >
              ← BACK TO PORTFOLIO
            </Link>
          </div>
        </div>
      </div>

      <TickerBanner text="FLUTTER INTERVIEW Q&A · 28 COMPREHENSIVE QUESTIONS · STATE MANAGEMENT · NATIVE PLUGINS · FIREBASE · CACHING · TESTING · PROFILING · RELEASE · " />

      {/* Main Content Area */}
      <main className="flex-1 container max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 space-y-6">
        
        {/* Search & Action Controls Bar */}
        <div className="bg-card border-4 border-foreground p-4 sm:p-6 shadow-brutal space-y-4">
          
          {/* Top Row: Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search keyword (e.g. FutureBuilder, GetX, MethodChannel, SQLite, Profiling)..."
              className="w-full bg-background border-2 border-foreground pl-11 pr-10 py-3 font-mono text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
            <span className="font-mono text-xs uppercase font-bold text-muted-foreground shrink-0 mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-primary" /> Filter:
            </span>
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-mono text-xs px-3 py-1.5 border-2 border-foreground whitespace-nowrap transition-all cursor-pointer font-bold ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-brutal-sm -translate-y-0.5"
                      : "bg-background text-foreground hover:bg-muted/40"
                  }`}
                >
                  {category}
                  {category === "All" && ` (${flutterInterviewQAData.length})`}
                </button>
              );
            })}
          </div>

          {/* Results Summary & Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-2 border-foreground/15">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-foreground">
              <span className="bg-primary/10 border border-primary px-2.5 py-0.5 text-primary">
                {filteredQuestions.length} of {flutterInterviewQAData.length} Questions
              </span>
              {searchQuery && (
                <span className="text-muted-foreground">
                  matching &quot;<span className="text-foreground font-bold">{searchQuery}</span>&quot;
                </span>
              )}
            </div>

            {/* EXPAND ALL / HIDE ALL BUTTONS (Matching design) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={expandAll}
                className="font-body text-xs sm:text-sm font-medium border-2 border-foreground bg-background hover:bg-foreground/5 active:bg-foreground/10 px-4 py-1.5 rounded-md transition-colors cursor-pointer shadow-sm hover:shadow"
              >
                Show all answers
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="font-body text-xs sm:text-sm font-medium border-2 border-foreground bg-background hover:bg-foreground/5 active:bg-foreground/10 px-4 py-1.5 rounded-md transition-colors cursor-pointer shadow-sm hover:shadow"
              >
                Hide all
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredQuestions.length === 0 && (
          <div className="bg-card border-4 border-foreground p-8 sm:p-12 text-center shadow-brutal space-y-4">
            <Sparkles className="w-10 h-10 text-primary mx-auto animate-bounce" />
            <h3 className="font-heading text-2xl text-foreground">NO QUESTIONS FOUND</h3>
            <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
              No interview questions match your search for &quot;{searchQuery}&quot;. Try clearing filters or searching for terms like &quot;State&quot;, &quot;Widget&quot;, or &quot;Firebase&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="stamp-button text-xs py-2 px-4"
            >
              RESET SEARCH & FILTERS
            </button>
          </div>
        )}

        {/* Accordion Questions List */}
        <div className="space-y-0 border-t border-foreground/30 bg-card shadow-brutal">
          {filteredQuestions.map((item) => {
            const isOpen = !!openItems[item.id];

            return (
              <div
                key={item.id}
                id={`q-${item.id}`}
                className={`border-b border-foreground/30 transition-colors ${
                  isOpen ? "bg-background/40" : "bg-card hover:bg-muted/10"
                }`}
              >
                {/* Accordion Header / Question Row */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-4 sm:py-5 px-4 sm:px-6 flex items-center justify-between gap-4 cursor-pointer group focus:outline-none"
                >
                  <div className="flex items-start gap-3 sm:gap-4 flex-1">
                    <span className="font-heading text-base sm:text-xl font-bold text-primary shrink-0 pt-0.5">
                      {item.id}.
                    </span>
                    <div className="space-y-1">
                      <h2 className="font-heading text-base sm:text-lg md:text-xl text-foreground group-hover:text-primary transition-colors font-bold tracking-tight">
                        <HighlightText text={item.question} query={searchQuery} />
                      </h2>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase bg-secondary/5 border border-foreground/20 px-2 py-0.5">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Chevron Icon with clean rotation */}
                  <div className="shrink-0 p-1 rounded-full text-foreground group-hover:text-primary transition-colors">
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Body / Answer */}
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-6 pt-1 border-t border-foreground/10 animate-glitch-reveal">
                    {/* Rendered structured answer */}
                    <div className="bg-background/80 border-2 border-foreground/30 p-4 sm:p-6 shadow-sm rounded-sm">
                      <AnswerContent answer={item.answer} query={searchQuery} />

                      {/* Bottom action pills inside expanded item */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-5 border-t border-foreground/20">
                        <span className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-primary" />
                          <span>Question {item.id} of {flutterInterviewQAData.length}</span>
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => copyQA(item, e)}
                            className="font-mono text-xs flex items-center gap-1.5 px-3 py-1 bg-background border border-foreground/40 hover:border-primary hover:text-primary transition-colors rounded shadow-xs cursor-pointer font-semibold"
                            title="Copy Question & Answer"
                          >
                            {copiedId === item.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-success" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Q&A</span>
                              </>
                            )}
                          </button>

                          <button
                            type="button"
                            onClick={(e) => shareQuestion(item, e)}
                            className="font-mono text-xs flex items-center gap-1.5 px-3 py-1 bg-background border border-foreground/40 hover:border-primary hover:text-primary transition-colors rounded shadow-xs cursor-pointer font-semibold"
                            title="Copy link to this question"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA / Quick Jump */}
        <div className="bg-card border-4 border-foreground p-6 sm:p-8 shadow-brutal flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-1">
              READY TO BUILD HIGH-PERFORMANCE FLUTTER APPS?
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted-foreground">
              Explore production applications or reach out for senior Flutter roles.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/" className="stamp-button text-xs py-2.5 px-4">
              VIEW PROJECTS
            </Link>
            <a
              href="mailto:patelkunal4419@gmail.com"
              className="stamp-button-outline text-xs py-2.5 px-4 font-mono font-bold"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </main>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground border-2 border-foreground p-3 shadow-brutal hover:-translate-y-1 transition-transform cursor-pointer"
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5 stroke-[3]" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default InterviewQA;
