import {defineField} from 'sanity'

export const seoFields = [
  defineField({
    name: 'seoTitle',
    title: 'SEO Title',
    type: 'string',
    description: 'Overrides the page title in search results. 50–60 characters recommended.',
    validation: (Rule) => Rule.max(70).warning('SEO titles over 70 characters may be truncated.'),
  }),
  defineField({
    name: 'seoDescription',
    title: 'Meta Description',
    type: 'text',
    rows: 3,
    description: 'Summary shown in search results. 120–160 characters recommended.',
    validation: (Rule) =>
      Rule.max(200).warning('Meta descriptions over 200 characters may be truncated.'),
  }),
  defineField({
    name: 'ogImage',
    title: 'Social Share Image (OG Image)',
    type: 'image',
    description: 'Used when shared on social media. Recommended: 1200×630px.',
    options: {hotspot: true},
  }),
  defineField({
    name: 'noIndex',
    title: 'Hide from search engines',
    type: 'boolean',
    description: 'Check to prevent this page from appearing in search results.',
    initialValue: false,
  }),
]
