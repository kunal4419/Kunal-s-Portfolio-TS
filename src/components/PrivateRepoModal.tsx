import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Lock, ExternalLink, Image as ImageIcon } from "lucide-react";
import { ProjectData } from "@/data/projectsData";

interface PrivateRepoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

export const PrivateRepoModal: FC<PrivateRepoModalProps> = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="private-repo-title"
    >
      <div
        className="relative bg-card border-4 border-foreground shadow-brutal p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto rotate-[-0.5deg]"
        onClick={(e) => e.stopPropagation()}
        style={{ transitionTimingFunction: "steps(3)" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 border-2 border-foreground bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Security / Private Badge */}
        <div className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-mono text-xs font-bold px-3 py-1 border-2 border-foreground mb-4">
          <Lock className="w-3.5 h-3.5" />
          <span>PRODUCTION APP // PRIVATE REPO</span>
        </div>

        {/* Modal Title */}
        <h3 id="private-repo-title" className="font-heading text-2xl sm:text-3xl text-foreground mb-2">
          {project.title}
        </h3>

        <p className="font-mono text-xs text-primary font-semibold mb-4">
          {project.subtitle}
        </p>

        {/* Description Box */}
        <div className="bg-secondary/15 border-2 border-foreground p-4 mb-6 text-sm text-foreground/90 space-y-3 font-body">
          <p className="leading-relaxed">
            <strong className="text-foreground">Notice:</strong> Because this is an active production system deployed for enterprise and commercial use, its source code repository is proprietary and kept <strong>private</strong> under confidentiality agreements.
          </p>
          <p className="leading-relaxed text-muted-foreground text-xs font-mono">
            You can still inspect the full architectural specifications, role hierarchy, API structures, and high-resolution UI screen flows on this portfolio.
          </p>
        </div>

        {/* Quick Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] text-primary border border-primary/50 px-2 py-0.5 bg-primary/10"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t-2 border-foreground/20">
          <Link
            to={`/project/${project.slug}`}
            onClick={onClose}
            className="stamp-button flex-1 text-xs sm:text-sm py-2.5 px-4 flex items-center justify-center gap-2 text-center"
          >
            <ImageIcon className="w-4 h-4" />
            <span>VIEW SCREENSHOTS & SPECS</span>
          </Link>

          <button
            onClick={onClose}
            className="stamp-button-outline text-xs sm:text-sm py-2.5 px-4 flex items-center justify-center gap-1.5"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
