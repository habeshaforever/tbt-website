/**
 * AI Assist Document Actions
 *
 * Scaffold for future OpenAI / Claude integration.
 * Currently provides stub actions that editors can see in the Studio.
 * Wire up the `generateContent` function to your preferred AI provider.
 */

import {useToast} from '@sanity/ui'
import {useCallback} from 'react'
import {DocumentActionProps, useDocumentOperation} from 'sanity'

// ─── Utility: call your AI endpoint ──────────────────────────────────────────
async function generateContent(prompt: string): Promise<string> {
  // TODO: Replace with real OpenAI / Anthropic API call
  // Example OpenAI fetch:
  // const res = await fetch('https://api.openai.com/v1/chat/completions', {
  //   method: 'POST',
  //   headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ model: 'gpt-4o', messages: [{ role: 'user', content: prompt }] }),
  // })
  // const data = await res.json()
  // return data.choices[0].message.content
  console.log('[AI Assist] Prompt:', prompt)
  return `[AI output placeholder for: "${prompt.slice(0, 60)}..."]`
}

// ─── Action: Generate SEO Metadata ───────────────────────────────────────────
export function GenerateSEOAction(props: DocumentActionProps) {
  const {published, id, type} = props
  const {patch} = useDocumentOperation(id, type)
  const toast = useToast()

  const handleGenerate = useCallback(async () => {
    const doc = published as Record<string, string> | null
    const title = doc?.title
    const excerpt = doc?.excerpt ?? doc?.summary

    if (!title) {
      toast.push({status: 'warning', title: 'Add a title first before generating SEO metadata.'})
      return
    }

    try {
      const seoTitle = await generateContent(
        `Write a compelling SEO title (50-60 chars) for a B2B article titled: "${title}". Company: Tandem Bridge Talent, remote staffing for North American companies.`
      )
      const seoDescription = await generateContent(
        `Write a meta description (120-155 chars) for: "${title}". Excerpt: "${excerpt ?? ''}". Focus on B2B hiring value.`
      )
      patch.execute([{set: {seoTitle: seoTitle.trim(), seoDescription: seoDescription.trim()}}])
      toast.push({status: 'success', title: 'SEO metadata generated!', description: 'Review and adjust before publishing.'})
    } catch {
      toast.push({status: 'error', title: 'AI generation failed', description: 'Check your API key configuration.'})
    }
  }, [published, patch, toast])

  return {label: '✦ Generate SEO', tone: 'primary' as const, onHandle: handleGenerate}
}

// ─── Action: Generate Tags ────────────────────────────────────────────────────
export function GenerateTagsAction(props: DocumentActionProps) {
  const {published, id, type} = props
  const {patch} = useDocumentOperation(id, type)
  const toast = useToast()

  const handleGenerate = useCallback(async () => {
    const title = (published as Record<string, string> | null)?.title
    if (!title) {
      toast.push({status: 'warning', title: 'Add a title first.'})
      return
    }
    try {
      const result = await generateContent(
        `Suggest 5-8 relevant tags for a B2B blog post titled: "${title}". Return as comma-separated lowercase words. No hashtags.`
      )
      const tags = result.split(',').map((t: string) => t.trim()).filter(Boolean)
      patch.execute([{set: {tags}}])
      toast.push({status: 'success', title: `${tags.length} tags generated!`})
    } catch {
      toast.push({status: 'error', title: 'Tag generation failed.'})
    }
  }, [published, patch, toast])

  return {label: '✦ Generate Tags', onHandle: handleGenerate}
}

// ─── Action: Generate Summary ─────────────────────────────────────────────────
export function GenerateSummaryAction(props: DocumentActionProps) {
  const {published, id, type} = props
  const {patch} = useDocumentOperation(id, type)
  const toast = useToast()

  const handleGenerate = useCallback(async () => {
    const doc = published as Record<string, unknown> | null
    const title = doc?.title as string | undefined
    if (!title) {
      toast.push({status: 'warning', title: 'Add a title first.'})
      return
    }
    try {
      const result = await generateContent(
        `Write a 2-sentence professional summary/excerpt (120-180 chars) for a B2B article: "${title}". Brand: Tandem Bridge Talent — remote Latin American staffing.`
      )
      const field = doc?.excerpt !== undefined ? 'excerpt' : 'summary'
      patch.execute([{set: {[field]: result.trim()}}])
      toast.push({status: 'success', title: 'Summary generated!'})
    } catch {
      toast.push({status: 'error', title: 'Summary generation failed.'})
    }
  }, [published, patch, toast])

  return {label: '✦ Generate Summary', onHandle: handleGenerate}
}

// ─── Action: Suggest CTA Copy ────────────────────────────────────────────────
export function GenerateCTAAction(props: DocumentActionProps) {
  const {published, id, type} = props
  const {patch} = useDocumentOperation(id, type)
  const toast = useToast()

  const handleGenerate = useCallback(async () => {
    const title = (published as Record<string, string> | null)?.title
    if (!title) {
      toast.push({status: 'warning', title: 'Add a title first.'})
      return
    }
    try {
      const headline = await generateContent(
        `Write a short CTA headline (under 10 words) for a case study or blog about: "${title}". Goal: drive contact form completions. Brand: Tandem Bridge Talent.`
      )
      const body = await generateContent(
        `Write a 1-sentence CTA body text for: "${title}". Encourage readers to speak with Tandem Bridge Talent about hiring remote talent.`
      )
      patch.execute([{set: {ctaHeadline: headline.trim(), ctaBody: body.trim(), ctaButtonText: 'Talk to Our Team', ctaButtonLink: '/contact'}}])
      toast.push({status: 'success', title: 'CTA copy generated!'})
    } catch {
      toast.push({status: 'error', title: 'CTA generation failed.'})
    }
  }, [published, patch, toast])

  return {label: '✦ Generate CTA', onHandle: handleGenerate}
}
