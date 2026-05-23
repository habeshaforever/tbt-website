import {defineField, defineType} from 'sanity'

// ─── Shared rich text definition ─────────────────────────────────────────────
const richTextOf = [
  {
    type: 'block',
    styles: [
      {title: 'Normal', value: 'normal'},
      {title: 'Heading 2', value: 'h2'},
      {title: 'Heading 3', value: 'h3'},
      {title: 'Heading 4', value: 'h4'},
      {title: 'Quote', value: 'blockquote'},
    ],
    lists: [
      {title: 'Bullet', value: 'bullet'},
      {title: 'Numbered', value: 'number'},
    ],
    marks: {
      decorators: [
        {title: 'Bold', value: 'strong'},
        {title: 'Italic', value: 'em'},
        {title: 'Underline', value: 'underline'},
        {title: 'Code', value: 'code'},
      ],
      annotations: [
        {
          name: 'link',
          type: 'object',
          title: 'Link',
          fields: [
            defineField({name: 'href', type: 'url', title: 'URL'}),
            defineField({name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true}),
          ],
        },
      ],
    },
  },
  {
    type: 'image',
    options: {hotspot: true},
    fields: [
      defineField({name: 'alt', type: 'string', title: 'Alt Text'}),
      defineField({name: 'caption', type: 'string', title: 'Caption'}),
    ],
  },
]

// ─── 1. Hero Section ──────────────────────────────────────────────────────────
export const heroSectionBlock = defineType({
  name: 'heroSectionBlock',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'subheadline', title: 'Subheadline', type: 'text', rows: 2}),
    defineField({name: 'buttonText', title: 'Button Text', type: 'string'}),
    defineField({name: 'buttonLink', title: 'Button Link', type: 'string'}),
    defineField({name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string'}),
    defineField({name: 'secondaryButtonLink', title: 'Secondary Button Link', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Background / Hero Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alt Text'})],
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Centered', value: 'centered'},
          {title: 'Left + Image Right', value: 'split-right'},
          {title: 'Left aligned', value: 'left'},
        ],
        layout: 'radio',
      },
      initialValue: 'centered',
    }),
  ],
  preview: {select: {title: 'headline', subtitle: 'layout'}},
})

// ─── 2. Rich Text Section ─────────────────────────────────────────────────────
export const richTextSectionBlock = defineType({
  name: 'richTextSectionBlock',
  title: 'Rich Text Section',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Section Title (optional)', type: 'string'}),
    defineField({name: 'body', title: 'Body Content', type: 'array', of: richTextOf}),
    defineField({
      name: 'width',
      title: 'Content Width',
      type: 'string',
      options: {
        list: [
          {title: 'Narrow (readable prose)', value: 'narrow'},
          {title: 'Medium', value: 'medium'},
          {title: 'Full Width', value: 'full'},
        ],
        layout: 'radio',
      },
      initialValue: 'narrow',
    }),
  ],
  preview: {
    select: {title: 'sectionTitle'},
    prepare({title}: {title?: string}) {
      return {title: title ?? 'Rich Text Section', subtitle: 'Rich Text'}
    },
  },
})

// ─── 3. Image Gallery Section ─────────────────────────────────────────────────
export const imageGallerySectionBlock = defineType({
  name: 'imageGallerySectionBlock',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Section Title (optional)', type: 'string'}),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
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
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {list: [2, 3, 4]},
      initialValue: 3,
    }),
    defineField({
      name: 'enableLightbox',
      title: 'Enable Lightbox on Click',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'sectionTitle', images: 'images'},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare({title, images}: {title?: string; images?: any[]}) {
      return {
        title: title ?? 'Image Gallery',
        subtitle: `${images?.length ?? 0} image(s)`,
      }
    },
  },
})

// ─── 4. Full Width Image Section ──────────────────────────────────────────────
export const fullWidthImageBlock = defineType({
  name: 'fullWidthImageBlock',
  title: 'Full Width Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({name: 'alt', type: 'string', title: 'Alt Text'}),
        defineField({name: 'caption', type: 'string', title: 'Caption'}),
      ],
    }),
    defineField({name: 'maxHeight', title: 'Max Height (px)', type: 'number', initialValue: 500}),
    defineField({name: 'roundedCorners', title: 'Rounded Corners', type: 'boolean', initialValue: true}),
  ],
  preview: {
    select: {media: 'image', caption: 'image.caption'},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare({media, caption}: {media?: any; caption?: string}) {
      return {title: 'Full Width Image', subtitle: caption, media}
    },
  },
})

// ─── 5. CTA Banner Section ────────────────────────────────────────────────────
export const ctaBannerBlock = defineType({
  name: 'ctaBannerBlock',
  title: 'CTA Banner',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'body', title: 'Body Text', type: 'text', rows: 2}),
    defineField({name: 'buttonText', title: 'Primary Button Text', type: 'string'}),
    defineField({name: 'buttonLink', title: 'Primary Button Link', type: 'string'}),
    defineField({name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string'}),
    defineField({name: 'secondaryButtonLink', title: 'Secondary Button Link', type: 'string'}),
    defineField({
      name: 'variant',
      title: 'Visual Style',
      type: 'string',
      options: {
        list: [
          {title: 'Primary Blue', value: 'primary'},
          {title: 'Light Card', value: 'light'},
          {title: 'Dark / Gradient', value: 'dark'},
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
    }),
  ],
  preview: {select: {title: 'headline', subtitle: 'variant'}},
})

// ─── 6. Testimonial Section ───────────────────────────────────────────────────
export const testimonialSectionBlock = defineType({
  name: 'testimonialSectionBlock',
  title: 'Testimonials',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Section Title (optional)', type: 'string'}),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'quote', title: 'Quote', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
            defineField({name: 'name', title: 'Name', type: 'string'}),
            defineField({name: 'role', title: 'Role / Title', type: 'string'}),
            defineField({name: 'company', title: 'Company', type: 'string'}),
            defineField({name: 'photo', title: 'Photo', type: 'image', options: {hotspot: true}}),
            defineField({name: 'rating', title: 'Rating (1–5)', type: 'number', validation: (Rule) => Rule.min(1).max(5)}),
          ],
          preview: {select: {title: 'name', subtitle: 'quote', media: 'photo'}},
        },
      ],
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'Carousel', value: 'carousel'},
          {title: 'Single Featured', value: 'featured'},
        ],
        layout: 'radio',
      },
      initialValue: 'grid',
    }),
  ],
  preview: {
    select: {title: 'sectionTitle'},
    prepare({title}: {title?: string}) {
      return {title: title ?? 'Testimonials', subtitle: 'Testimonial Section'}
    },
  },
})

// ─── 7. Stats / Metrics Section ───────────────────────────────────────────────
export const statsSectionBlock = defineType({
  name: 'statsSectionBlock',
  title: 'Stats / Metrics',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Section Title (optional)', type: 'string'}),
    defineField({name: 'sectionSubtitle', title: 'Subtitle (optional)', type: 'string'}),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      validation: (Rule) => Rule.min(1).max(6),
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string', description: 'e.g. 65%, $2M, 200+', validation: (Rule) => Rule.required()}),
            defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', title: 'Short Description', type: 'string'}),
          ],
          preview: {select: {title: 'value', subtitle: 'label'}},
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'sectionTitle'},
    prepare({title}: {title?: string}) {
      return {title: title ?? 'Stats Section', subtitle: 'Stats / Metrics'}
    },
  },
})

// ─── 8. FAQ Accordion Section ─────────────────────────────────────────────────
export const faqSectionBlock = defineType({
  name: 'faqSectionBlock',
  title: 'FAQ Accordion',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Section Title', type: 'string', initialValue: 'Frequently Asked Questions'}),
    defineField({
      name: 'faqs',
      title: 'FAQ Items',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
          ],
          preview: {select: {title: 'question', subtitle: 'answer'}},
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'sectionTitle', faqs: 'faqs'},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare({title, faqs}: {title?: string; faqs?: any[]}) {
      return {title: title ?? 'FAQ', subtitle: `${faqs?.length ?? 0} question(s)`}
    },
  },
})

// ─── 9. Quote Block ───────────────────────────────────────────────────────────
export const quoteBlock = defineType({
  name: 'quoteBlock',
  title: 'Pull Quote',
  type: 'object',
  fields: [
    defineField({name: 'quote', title: 'Quote Text', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
    defineField({name: 'attribution', title: 'Attribution (Name, Role, Company)', type: 'string'}),
    defineField({
      name: 'size',
      title: 'Quote Size',
      type: 'string',
      options: {
        list: [
          {title: 'Large Pull Quote', value: 'large'},
          {title: 'Standard', value: 'standard'},
        ],
        layout: 'radio',
      },
      initialValue: 'large',
    }),
  ],
  preview: {
    select: {title: 'quote', subtitle: 'attribution'},
  },
})

// ─── 10. Timeline Section ─────────────────────────────────────────────────────
export const timelineSectionBlock = defineType({
  name: 'timelineSectionBlock',
  title: 'Timeline',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Section Title', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Timeline Items',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label / Step', type: 'string', description: 'e.g. Week 1, Step 3, Day 30', validation: (Rule) => Rule.required()}),
            defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
          ],
          preview: {select: {title: 'title', subtitle: 'label'}},
        },
      ],
    }),
    defineField({
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      options: {
        list: [
          {title: 'Vertical', value: 'vertical'},
          {title: 'Horizontal', value: 'horizontal'},
        ],
        layout: 'radio',
      },
      initialValue: 'vertical',
    }),
  ],
  preview: {
    select: {title: 'sectionTitle'},
    prepare({title}: {title?: string}) {
      return {title: title ?? 'Timeline', subtitle: 'Timeline Section'}
    },
  },
})

// ─── 11. Team Showcase Section ────────────────────────────────────────────────
export const teamSectionBlock = defineType({
  name: 'teamSectionBlock',
  title: 'Team Showcase',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Section Title', type: 'string'}),
    defineField({name: 'sectionSubtitle', title: 'Subtitle', type: 'string'}),
    defineField({
      name: 'members',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'role', title: 'Role / Title', type: 'string'}),
            defineField({name: 'bio', title: 'Short Bio', type: 'text', rows: 2}),
            defineField({name: 'photo', title: 'Photo', type: 'image', options: {hotspot: true}}),
            defineField({name: 'linkedin', title: 'LinkedIn URL', type: 'url'}),
          ],
          preview: {select: {title: 'name', subtitle: 'role', media: 'photo'}},
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'sectionTitle'},
    prepare({title}: {title?: string}) {
      return {title: title ?? 'Team Showcase', subtitle: 'Team Section'}
    },
  },
})

// ─── 12. Comparison Table Section ────────────────────────────────────────────
export const comparisonTableBlock = defineType({
  name: 'comparisonTableBlock',
  title: 'Comparison Table',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Section Title', type: 'string'}),
    defineField({name: 'columnALabel', title: 'Column A Label', type: 'string', initialValue: 'Traditional Hiring', validation: (Rule) => Rule.required()}),
    defineField({name: 'columnBLabel', title: 'Column B Label', type: 'string', initialValue: 'Tandem Bridge', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'rows',
      title: 'Comparison Rows',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'feature', title: 'Feature / Category', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'columnA', title: 'Column A Value', type: 'string'}),
            defineField({name: 'columnB', title: 'Column B Value', type: 'string'}),
            defineField({name: 'highlight', title: 'Highlight This Row', type: 'boolean', initialValue: false}),
          ],
          preview: {select: {title: 'feature', subtitle: 'columnB'}},
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'sectionTitle'},
    prepare({title}: {title?: string}) {
      return {title: title ?? 'Comparison Table', subtitle: 'Comparison'}
    },
  },
})

// ─── 13. Video / Embed Section ────────────────────────────────────────────────
export const videoEmbedBlock = defineType({
  name: 'videoEmbedBlock',
  title: 'Video / Embed',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Section Title (optional)', type: 'string'}),
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo, or Loom URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'caption', title: 'Caption', type: 'string'}),
    defineField({
      name: 'thumbnail',
      title: 'Custom Thumbnail (optional)',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alt Text'})],
    }),
  ],
  preview: {
    select: {title: 'sectionTitle', url: 'url'},
    prepare({title, url}: {title?: string; url?: string}) {
      return {title: title ?? 'Video / Embed', subtitle: url}
    },
  },
})

// ─── 14. Split Image + Text Section ──────────────────────────────────────────
export const splitImageTextBlock = defineType({
  name: 'splitImageTextBlock',
  title: 'Split Image + Text',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
      fields: [defineField({name: 'alt', type: 'string', title: 'Alt Text'})],
    }),
    defineField({name: 'headline', title: 'Headline', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'array', of: richTextOf}),
    defineField({name: 'buttonText', title: 'Button Text', type: 'string'}),
    defineField({name: 'buttonLink', title: 'Button Link', type: 'string'}),
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          {title: 'Image Left', value: 'left'},
          {title: 'Image Right', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    }),
  ],
  preview: {
    select: {title: 'headline', media: 'image'},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare({title, media}: {title?: string; media?: any}) {
      return {title: title ?? 'Split Image + Text', subtitle: 'Split Section', media}
    },
  },
})

// ─── 15. Logo Cloud Section ───────────────────────────────────────────────────
export const logoCloudBlock = defineType({
  name: 'logoCloudBlock',
  title: 'Logo Cloud',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Label Above Logos', type: 'string', initialValue: 'Trusted by companies across North America'}),
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'logo',
              title: 'Logo Image',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            }),
            defineField({name: 'companyName', title: 'Company Name', type: 'string'}),
            defineField({name: 'url', title: 'Website URL (optional)', type: 'url'}),
          ],
          preview: {
            select: {title: 'companyName', media: 'logo'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'sectionTitle', logos: 'logos'},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare({title, logos}: {title?: string; logos?: any[]}) {
      return {title: title ?? 'Logo Cloud', subtitle: `${logos?.length ?? 0} logo(s)`}
    },
  },
})

// ─── 16. Downloadable Resource Section ───────────────────────────────────────
export const downloadableResourceBlock = defineType({
  name: 'downloadableResourceBlock',
  title: 'Downloadable Resource',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Resource Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {accept: '.pdf,.docx,.xlsx,.zip'},
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail / Preview Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alt Text'})],
    }),
    defineField({name: 'buttonText', title: 'Download Button Text', type: 'string', initialValue: 'Download Free Guide'}),
    defineField({name: 'requiresEmail', title: 'Require Email to Download', type: 'boolean', initialValue: false}),
  ],
  preview: {
    select: {title: 'title', media: 'thumbnail'},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare({title, media}: {title?: string; media?: any}) {
      return {title: title ?? 'Downloadable Resource', subtitle: 'Resource Block', media}
    },
  },
})

// ─── Exported array of all block types ───────────────────────────────────────
export const allPageBlocks = [
  heroSectionBlock,
  richTextSectionBlock,
  imageGallerySectionBlock,
  fullWidthImageBlock,
  ctaBannerBlock,
  testimonialSectionBlock,
  statsSectionBlock,
  faqSectionBlock,
  quoteBlock,
  timelineSectionBlock,
  teamSectionBlock,
  comparisonTableBlock,
  videoEmbedBlock,
  splitImageTextBlock,
  logoCloudBlock,
  downloadableResourceBlock,
]
