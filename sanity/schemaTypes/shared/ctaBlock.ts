import {defineField, defineType} from 'sanity'

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'CTA Block',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'body', title: 'Body Text', type: 'text', rows: 2}),
    defineField({name: 'buttonText', title: 'Button Text', type: 'string'}),
    defineField({name: 'buttonLink', title: 'Button Link', type: 'string', description: 'e.g. /contact or https://...'}),
    defineField({
      name: 'variant',
      title: 'Style Variant',
      type: 'string',
      options: {
        list: [
          {title: 'Primary (Blue)', value: 'primary'},
          {title: 'Light (Card)', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {title: 'headline', subtitle: 'buttonText'},
  },
})
