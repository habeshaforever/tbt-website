import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'
import {seoFields} from './shared/seoFields'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  icon: CaseIcon,
  groups: [
    {name: 'overview', title: 'Overview', default: true},
    {name: 'story', title: 'Story'},
    {name: 'results', title: 'Results & Metrics'},
    {name: 'sections', title: 'Page Sections'},
    {name: 'media', title: 'Media'},
    {name: 'cta', title: 'CTA'},
    {name: 'seo', title: 'SEO'},
  ],

  fields: [
    // ─── Overview ────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Case Study Title',
      type: 'string',
      group: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'overview',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      group: 'overview',
      description: 'Short punchy summary shown on listing cards. 120–200 characters.',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'companyType',
      title: 'Company Type',
      type: 'string',
      group: 'overview',
      description: 'e.g. Financial Services Firm, Healthcare Organization',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      group: 'overview',
      options: {
        list: [
          {title: 'Financial Services', value: 'financial-services'},
          {title: 'Healthcare', value: 'healthcare'},
          {title: 'Legal', value: 'legal'},
          {title: 'IT & Software', value: 'it-software'},
          {title: 'Marketing & Creative', value: 'marketing'},
          {title: 'Logistics & Supply Chain', value: 'logistics'},
          {title: 'Manufacturing & Engineering', value: 'manufacturing'},
          {title: 'Professional Services', value: 'professional-services'},
          {title: 'Customer Service', value: 'customer-service'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'companySize',
      title: 'Company Size',
      type: 'string',
      group: 'overview',
      options: {
        list: [
          {title: '1–10 employees', value: '1-10'},
          {title: '11–50 employees', value: '11-50'},
          {title: '51–200 employees', value: '51-200'},
          {title: '201–500 employees', value: '201-500'},
          {title: '500+ employees', value: '500+'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'rolesHired',
      title: 'Roles Hired',
      type: 'array',
      of: [{type: 'string'}],
      group: 'overview',
      options: {layout: 'tags'},
      description: 'e.g. Medical Biller, Accountant, Legal Assistant',
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      group: 'overview',
      options: {dateFormat: 'MMMM D, YYYY'},
    }),

    // ─── Story ───────────────────────────────────────────────────
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'array',
      group: 'story',
      description: 'What problem was the client facing before working with TBT?',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 3', value: 'h3'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
          },
          lists: [{title: 'Bullet', value: 'bullet'}],
        },
      ],
    }),
    defineField({
      name: 'solution',
      title: 'The Solution',
      type: 'array',
      group: 'story',
      description: 'How did Tandem Bridge Talent solve the problem?',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 3', value: 'h3'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
          },
          lists: [{title: 'Bullet', value: 'bullet'}],
        },
      ],
    }),
    defineField({
      name: 'timeline',
      title: 'Engagement Timeline',
      type: 'array',
      group: 'story',
      description: 'Key milestones — e.g. "Week 1: Kickoff call", "Week 3: First hire placed".',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'milestone', title: 'Milestone', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', title: 'Description', type: 'string'}),
          ],
          preview: {select: {title: 'milestone', subtitle: 'description'}},
        },
      ],
    }),

    // ─── Results & Metrics ───────────────────────────────────────
    defineField({
      name: 'resultsContent',
      title: 'Results Narrative',
      type: 'array',
      group: 'results',
      description: 'Describe the outcomes achieved in detail.',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 3', value: 'h3'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
          },
          lists: [{title: 'Bullet', value: 'bullet'}],
        },
      ],
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      group: 'results',
      description: 'Highlight 2–4 quantified outcomes.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string', description: 'e.g. 65%', validation: (Rule) => Rule.required()}),
            defineField({name: 'label', title: 'Label', type: 'string', description: 'e.g. Cost Reduction', validation: (Rule) => Rule.required()}),
          ],
          preview: {select: {title: 'value', subtitle: 'label'}},
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'beforeAfter',
      title: 'Before & After',
      type: 'object',
      group: 'results',
      description: 'Contrast the situation before and after TBT.',
      fields: [
        defineField({
          name: 'before',
          title: 'Before',
          type: 'array',
          of: [{type: 'string'}],
          options: {layout: 'tags'},
          description: 'e.g. "Manual billing process", "3-month backlog"',
        }),
        defineField({
          name: 'after',
          title: 'After',
          type: 'array',
          of: [{type: 'string'}],
          options: {layout: 'tags'},
          description: 'e.g. "Automated pipeline", "Zero backlog in 30 days"',
        }),
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Client Testimonials',
      type: 'array',
      group: 'results',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'quote', title: 'Quote', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
            defineField({name: 'name', title: 'Client Name', type: 'string'}),
            defineField({name: 'role', title: 'Client Role / Title', type: 'string'}),
            defineField({name: 'company', title: 'Company', type: 'string'}),
            defineField({name: 'photo', title: 'Photo', type: 'image', options: {hotspot: true}}),
          ],
          preview: {select: {title: 'name', subtitle: 'quote', media: 'photo'}},
        },
      ],
    }),

    // ─── Media ───────────────────────────────────────────────────
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'media',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alt Text', type: 'string', validation: (Rule) => Rule.required()}),
        defineField({name: 'caption', title: 'Caption', type: 'string'}),
      ],
    }),
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', type: 'string', title: 'Alt Text'}),
            defineField({name: 'caption', type: 'string', title: 'Caption'}),
          ],
        },
      ],
    }),

    // ─── Page Sections (Page Builder) ────────────────────────────
    defineField({
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      group: 'sections',
      description: 'Drag and drop modular sections to extend this case study page.',
      of: [
        {type: 'richTextSectionBlock'},
        {type: 'imageGallerySectionBlock'},
        {type: 'fullWidthImageBlock'},
        {type: 'ctaBannerBlock'},
        {type: 'testimonialSectionBlock'},
        {type: 'statsSectionBlock'},
        {type: 'faqSectionBlock'},
        {type: 'quoteBlock'},
        {type: 'timelineSectionBlock'},
        {type: 'comparisonTableBlock'},
        {type: 'videoEmbedBlock'},
        {type: 'splitImageTextBlock'},
        {type: 'logoCloudBlock'},
        {type: 'downloadableResourceBlock'},
      ],
    }),

    // ─── CTA ─────────────────────────────────────────────────────
    defineField({
      name: 'ctaHeadline',
      title: 'CTA Headline',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaBody',
      title: 'CTA Body',
      type: 'text',
      rows: 2,
      group: 'cta',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Button Text',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'Button Link',
      type: 'string',
      group: 'cta',
      description: 'e.g. /contact',
    }),

    // ─── SEO ─────────────────────────────────────────────────────
    ...seoFields.map((f) => ({...f, group: 'seo'})),
  ],

  preview: {
    select: {
      title: 'title',
      companyType: 'companyType',
      media: 'featuredImage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare({title, companyType, media}: Record<string, any>) {
      return {title, subtitle: companyType, media}
    },
  },
})
