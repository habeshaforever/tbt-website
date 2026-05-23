import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'color',
      title: 'Label Color',
      type: 'string',
      description: 'Used to color-code category pills in the UI.',
      options: {
        list: [
          {title: 'Blue', value: 'blue'},
          {title: 'Green', value: 'green'},
          {title: 'Purple', value: 'purple'},
          {title: 'Orange', value: 'orange'},
          {title: 'Red', value: 'red'},
          {title: 'Gray', value: 'gray'},
        ],
        layout: 'radio',
      },
      initialValue: 'blue',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'description'},
  },
})
