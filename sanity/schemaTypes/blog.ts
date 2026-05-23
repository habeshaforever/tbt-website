import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'
import {seoFields} from './shared/seoFields'

export const blog = defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'sections', title: 'Page Sections'},
    {name: 'meta', title: 'Post Details'},
    {name: 'media', title: 'Media'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    // ─── Content Group ───────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Short summary shown on listing pages and in search results. 120–200 characters.',
      validation: (Rule) => Rule.required().max(300),
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
                title: 'External Link',
                fields: [
                  defineField({name: 'href', type: 'url', title: 'URL'}),
                  defineField({name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true}),
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal Link',
                fields: [
                  defineField({name: 'path', type: 'string', title: 'Path (e.g. /contact)'}),
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', type: 'string', title: 'Alt Text', validation: (Rule) => Rule.required()}),
            defineField({name: 'caption', type: 'string', title: 'Caption'}),
          ],
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Callout Box',
          fields: [
            defineField({
              name: 'tone',
              type: 'string',
              title: 'Tone',
              options: {
                list: [
                  {title: 'Info', value: 'info'},
                  {title: 'Tip', value: 'tip'},
                  {title: 'Warning', value: 'warning'},
                  {title: 'Success', value: 'success'},
                ],
                layout: 'radio',
              },
              initialValue: 'info',
            }),
            defineField({name: 'text', type: 'text', title: 'Text', rows: 3}),
          ],
          preview: {select: {title: 'text', subtitle: 'tone'}},
        },
      ],
    }),

    // ─── Post Details Group ──────────────────────────────────────
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      group: 'meta',
      description: 'Schedule a future publish date or backdate existing posts.',
      options: {dateFormat: 'MMMM D, YYYY', timeFormat: 'h:mm A'},
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      group: 'meta',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      group: 'meta',
      description: 'Assign one or more categories.',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      group: 'meta',
      options: {layout: 'tags'},
      description: 'Freeform tags for filtering and discovery.',
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      group: 'meta',
      description: 'Estimated reading time. Leave blank to auto-calculate.',
      validation: (Rule) => Rule.min(1).max(60),
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'blog'}]}],
      group: 'meta',
      validation: (Rule) => Rule.max(3),
      description: 'Up to 3 related posts shown at the bottom of the article.',
    }),

    // ─── Media Group ─────────────────────────────────────────────
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
      description: 'Additional images for this post.',
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

    // ─── Page Sections (Page Builder) ──────────────────────────
    defineField({
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      group: 'sections',
      description: 'Drag and drop modular content sections. These render below the main article body.',
      of: [
        {type: 'heroSectionBlock'},
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

    // ─── SEO Group ───────────────────────────────────────────────
    ...seoFields.map((f) => ({...f, group: 'seo'})),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'publishDate',
      media: 'featuredImage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare({title, author, date, media}: Record<string, any>) {
      return {
        title,
        subtitle: `${author ? `By ${author}` : 'No author'} · ${date ? date.slice(0, 10) : 'Undated'}`,
        media,
      }
    },
  },
})
