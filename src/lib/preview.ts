/**
 * Draft / Preview mode support for Sanity Presentation Tool.
 *
 * Because this is a Vite SPA (no server-side API routes), preview mode
 * is handled entirely client-side via a `preview=true` query parameter
 * and a separate Sanity client that bypasses CDN and includes credentials.
 *
 * The Presentation Tool iframe will load the frontend with
 * `?preview=true` appended, activating the draft-aware client.
 */

import {createClient} from '@sanity/client'

const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID ?? 'ud8yaali'
const DATASET = import.meta.env.VITE_SANITY_DATASET ?? 'production'
const API_VERSION = import.meta.env.VITE_SANITY_API_VERSION ?? '2024-01-01'

/** Returns true when the page is loaded inside the Presentation Tool iframe */
export function isPreviewMode(): boolean {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return params.get('preview') === 'true'
}

/**
 * A draft-aware Sanity client.
 * Uses `perspective: 'previewDrafts'` and `useCdn: false` so editors
 * see unpublished changes immediately in the Presentation Tool.
 */
export const draftClient = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  useCdn: false,
  perspective: 'previewDrafts',
})

/**
 * Returns the appropriate client for a given fetch context.
 * In preview mode → draftClient (sees drafts).
 * In production → standard CDN client (published only).
 */
export function getClient(preview = false) {
  if (preview || isPreviewMode()) return draftClient
  // Lazy import to avoid bundling the full client twice
  return import('./sanity').then((m) => m.sanityClient)
}
