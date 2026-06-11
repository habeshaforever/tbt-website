import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  /** Render the rounded gradient tile behind the glyph (used for the icon/favicon style). */
  withTile?: boolean;
  title?: string;
}

/**
 * TandemBridge Talent "T" monogram.
 * The crossbar is a bridge deck spanning an arch (the bridge), and the central pier
 * forms the stem of the T. Circle and square safe for favicons and avatars.
 */
export const LogoMark = ({ className, withTile = true, title = "Tandem Bridge Talent" }: LogoMarkProps) => {
  const gradientId = "tbt-logo-gradient";
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={cn("block", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="hsl(210 100% 36%)" />
          <stop offset="0.55" stopColor="hsl(208 92% 46%)" />
          <stop offset="1" stopColor="hsl(202 100% 50%)" />
        </linearGradient>
      </defs>
      {withTile && <rect width="64" height="64" rx="16" fill={`url(#${gradientId})`} />}
      <g fill={withTile ? "#FFFFFF" : `url(#${gradientId})`}>
        {/* Bridge deck = top of the crossbar */}
        <rect x="10" y="19" width="44" height="6.2" rx="3.1" />
        {/* Arch span with two anchor piers at the ends */}
        <path d="M10 25.2h4.6v2.2C24 21.6 40 21.6 49.4 27.4v-2.2H54v4.8c-10.6-7.4-33.4-7.4-44 0V25.2Z" />
        {/* Central pier = stem of the T */}
        <rect x="28.5" y="25" width="7" height="26" rx="3.5" />
      </g>
    </svg>
  );
};

interface LogoProps {
  className?: string;
  /** Tailwind classes for the wordmark text (size/color). */
  textClassName?: string;
  /** Tailwind size classes for the mark tile. */
  markClassName?: string;
  /** Color token for the "Bridge" accent word. Defaults to primary. */
  accentClassName?: string;
  to?: string;
}

/** Full lockup: monogram tile + wordmark, links home by default. */
export const Logo = ({
  className,
  textClassName,
  markClassName,
  accentClassName = "text-primary",
  to = "/",
}: LogoProps) => {
  return (
    <Link to={to} className={cn("flex items-center gap-2.5 group", className)} aria-label="Tandem Bridge Talent home">
      <LogoMark
        withTile
        className={cn(
          "w-10 h-10 rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105",
          markClassName,
        )}
      />
      <span className={cn("font-bold text-base md:text-xl whitespace-nowrap leading-none", textClassName)}>
        Tandem<span className={accentClassName}>Bridge</span> Talent
      </span>
    </Link>
  );
};

export default Logo;