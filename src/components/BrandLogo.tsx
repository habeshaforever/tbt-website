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
      className="w-3/5 h-3/5 text-primary-foreground"
    >
      {/* Left and right piers */}
      <path
        d="M7 24V14"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M25 24V14"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* The bridge arch connecting the two piers */}
      <path
        d="M7 14C7 9.58 11.03 7 16 7C20.97 7 25 9.58 25 14"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Central keystone / connection point */}
      <circle cx="16" cy="7" r="2.6" fill="currentColor" />
      {/* Deck line */}
      <path
        d="M5 24H27"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
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