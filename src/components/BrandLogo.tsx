import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BrandLogoMarkProps {
  className?: string;
}

/**
 * Tandem Bridge Talent mark.
 * Two spans rising toward a central keystone form a bridge arch,
 * symbolizing the tandem of US leadership and nearshore teams.
 * Uses the brand hero gradient so it stays theme-aware.
 */
export const BrandLogoMark = ({ className }: BrandLogoMarkProps) => (
  <div
    className={cn(
      "bg-gradient-hero rounded-xl flex items-center justify-center shadow-md",
      className,
    )}
  >
    <svg
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Tandem Bridge Talent"
      className="w-[62%] h-[62%] text-primary-foreground"
    >
      {/* Suspension cables sweeping over the two towers */}
      <path
        d="M4 17L11 6L16 14.5L21 6L28 17"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Twin towers (the tandem) */}
      <path d="M11 22V6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M21 22V6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      {/* Bridge deck */}
      <path d="M4 22H28" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  </div>
);

interface BrandLogoProps {
  /** Tailwind size classes for the icon mark, e.g. "w-10 h-10". */
  markClassName?: string;
  /** Tailwind classes for the wordmark text. */
  textClassName?: string;
  /** Color token used for the "Bridge" middle word. */
  accent?: "primary" | "accent";
  /** Render as a Link to home (default) or plain markup. */
  asLink?: boolean;
  className?: string;
}

export const BrandLogo = ({
  markClassName = "w-10 h-10",
  textClassName = "font-bold text-base md:text-xl text-foreground whitespace-nowrap",
  accent = "primary",
  asLink = true,
  className,
}: BrandLogoProps) => {
  const content = (
    <>
      <BrandLogoMark className={markClassName} />
      <span className={textClassName}>
        Tandem<span className={accent === "accent" ? "text-accent" : "text-primary"}>Bridge</span> Talent
      </span>
    </>
  );

  if (asLink) {
    return (
      <Link to="/" className={cn("flex items-center gap-2", className)}>
        {content}
      </Link>
    );
  }

  return <div className={cn("flex items-center gap-2", className)}>{content}</div>;
};