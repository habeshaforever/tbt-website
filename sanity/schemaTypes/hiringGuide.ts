import {defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'
import {seoFields} from './shared/seoFields'

export const hiringGuide = defineType({
  name: 'hiringGuide',
  title: 'Hiring Guide',
  type: 'document',
  icon: BookIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'sections', title: 'Page Sections'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', group: 'content', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', group: 'content', options: {source: 'title', maxLength: 96}, validation: (Rule) => Rule.required()}),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'content',
      options: {
        list: [
          {title: 'Getting Started', value: 'getting-started'},
          {title: 'Onboarding', value: 'onboarding'},
          {title: 'Management', value: 'management'},
          {title: 'Cost Planning', value: 'cost-planning'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, group: 'content', validation: (Rule) => Rule.required().max(300)}),
    defineField({name: 'publishDate', title: 'Publish Date', type: 'datetime', group: 'content'}),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alt Text', type: 'string'}),
        defineField({name: 'caption', title: 'Caption', type: 'string'}),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Body Content',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Numbered', value: 'number'}],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
            annotations: [
              {name: 'link', type: 'object', title: 'Link', fields: [defineField({name: 'href', type: 'url', title: 'URL'}), defineField({name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true})]},
            ],
          },
        },
        {type: 'image', options: {hotspot: true}, fields: [defineField({name: 'alt', type: 'string', title: 'Alt Text'}), defineField({name: 'caption', type: 'string', title: 'Caption'})]},
      ],
    }),
    defineField({
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      group: 'sections',
      description: 'Add modular drag-and-drop sections to extend this guide.',
      of: [
        {type: 'richTextSectionBlock'}, {type: 'imageGallerySectionBlock'}, {type: 'fullWidthImageBlock'},
        {type: 'ctaBannerBlock'}, {type: 'testimonialSectionBlock'}, {type: 'statsSectionBlock'},
        {type: 'faqSectionBlock'}, {type: 'quoteBlock'}, {type: 'timelineSectionBlock'},
        {type: 'comparisonTableBlock'}, {type: 'videoEmbedBlock'}, {type: 'splitImageTextBlock'},
        {type: 'logoCloudBlock'}, {type: 'downloadableResourceBlock'},
      ],
    }),
    ...seoFields.map((f) => ({...f, group: 'seo'})),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'featuredImage'},
  },
})
