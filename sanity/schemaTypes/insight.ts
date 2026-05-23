import {defineField, defineType} from 'sanity'
import {TrendUpwardIcon} from '@sanity/icons'
import {seoFields} from './shared/seoFields'

export const insight = defineType({
  name: 'insight',
  title: 'Insight',
  type: 'document',
  icon: TrendUpwardIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'sections', title: 'Page Sections'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', group: 'content', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', group: 'content', options: {source: 'title', maxLength: 96}, validation: (Rule) => Rule.required()}),
    defineField({name: 'stat', title: 'Key Stat', type: 'string', group: 'content', description: 'The headline data point, e.g. 70%, 2%, 72hrs, Top 1%', validation: (Rule) => Rule.required()}),
    defineField({name: 'summary', title: 'Summary', type: 'text', rows: 3, group: 'content', validation: (Rule) => Rule.required().max(300)}),
    defineField({name: 'publishDate', title: 'Publish Date', type: 'datetime', group: 'content'}),
    defineField({
      name: 'featuredImage', title: 'Featured Image', type: 'image', group: 'content',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt Text', type: 'string'}), defineField({name: 'caption', title: 'Caption', type: 'string'})],
    }),
    defineField({
      name: 'content', title: 'Body Content', type: 'array', group: 'content',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}, {title: 'Heading 2', value: 'h2'}, {title: 'Heading 3', value: 'h3'}, {title: 'Quote', value: 'blockquote'}],
          lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Numbered', value: 'number'}],
          marks: {
            decorators: [{title: 'Bold', value: 'strong'}, {title: 'Italic', value: 'em'}, {title: 'Underline', value: 'underline'}],
            annotations: [{name: 'link', type: 'object', title: 'Link', fields: [defineField({name: 'href', type: 'url', title: 'URL'}), defineField({name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true})]}],
          },
        },
        {type: 'image', options: {hotspot: true}, fields: [defineField({name: 'alt', type: 'string', title: 'Alt Text'}), defineField({name: 'caption', type: 'string', title: 'Caption'})]},
      ],
    }),
    defineField({
      name: 'pageSections', title: 'Page Sections', type: 'array', group: 'sections',
      description: 'Add modular drag-and-drop sections below the insight content.',
      of: [
        {type: 'richTextSectionBlock'}, {type: 'imageGallerySectionBlock'}, {type: 'ctaBannerBlock'},
        {type: 'testimonialSectionBlock'}, {type: 'statsSectionBlock'}, {type: 'faqSectionBlock'},
        {type: 'quoteBlock'}, {type: 'videoEmbedBlock'}, {type: 'splitImageTextBlock'}, {type: 'downloadableResourceBlock'},
      ],
    }),
    ...seoFields.map((f) => ({...f, group: 'seo'})),
  ],
  preview: {
    select: {title: 'title', subtitle: 'stat', media: 'featuredImage'},
  },
})
