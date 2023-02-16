import {defineField, defineType} from 'sanity'
import {datePreview} from '../previews'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'localeString',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name.en'},
    }),
    defineField({
      name: 'description',
      title: 'Type of work',
      type: 'localeString',
    }),
    defineField({
      name: 'introduction',
      type: 'localeText',
    }),

    defineField({
      name: 'mainImage',
      type: 'image',
    }),
    defineField({
      name: 'startDate',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      type: 'date',
    }),
    defineField({
      name: 'slides',
      type: 'array',
      of: [{type: 'portfolioSlide'}],
    }),
  ],
  orderings: [
    {title: 'startDate', name: 'startDateDesc', by: [{field: 'startDate', direction: 'desc'}]},
  ],
  preview: datePreview({title: 'name', startDate: 'startDate', endDate: 'endDate', locale: true}),
})
