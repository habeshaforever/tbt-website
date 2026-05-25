import { Eye, X } from "lucide-react";
import { isPreviewMode } from "@/lib/preview";

/**
 * A sticky banner shown at the top of the page when running
 * inside the Sanity Presentation Tool preview iframe.
 * Editors see this to confirm they're viewing draft content.
 */
export function PreviewBanner() {
  if (!isPreviewMode()) return null;

  const exitUrl = window.location.href
    .replace(/[?&]preview=true/, "")
    .replace(/\?$/, "");

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-amber-400 text-amber-950 flex items-center justify-between px-4 py-2 text-sm font-semibold shadow-lg">
      <div className="flex items-center gap-2">
        <Eye className="w-4 h-4" />
        <span>Draft Preview: content may include unpublished changes</span>
      </div>
      <a
        href={exitUrl}
        className="flex items-center gap-1 hover:opacity-70 transition-opacity"
        title="Exit preview"
      >
        <X className="w-4 h-4" />
        Exit Preview
      </a>
    </div>
  );
}
