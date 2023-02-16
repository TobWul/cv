import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioSlide',
  title: 'Portfolio slide',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'title',
      type: 'localeString',
    }),
    defineField({
      name: 'text',
      type: 'localeText',
    }),
    defineField({
      name: 'position',
      type: 'string',
      options: {
        list: ['left', 'right'],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title.no',
      media: 'image',
    },
  },
})
