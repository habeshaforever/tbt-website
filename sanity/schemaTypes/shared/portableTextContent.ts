import {defineField} from 'sanity'

export const portableTextContent = defineField({
  name: 'content',
  title: 'Content',
  type: 'array',
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
            title: 'Link',
            fields: [
              defineField({name: 'href', type: 'url', title: 'URL'}),
              defineField({
                name: 'blank',
                type: 'boolean',
                title: 'Open in new tab',
                initialValue: false,
              }),
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
              {title: 'Warning', value: 'warning'},
              {title: 'Success', value: 'success'},
              {title: 'Tip', value: 'tip'},
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
})
