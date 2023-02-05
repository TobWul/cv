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
      name: 'description',
      type: 'localeText',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
    }),
    defineField({
      name: 'content',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'startDate',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      type: 'date',
    }),
  ],
  orderings: [
    {title: 'startDate', name: 'startDateDesc', by: [{field: 'startDate', direction: 'desc'}]},
  ],
  preview: datePreview({title: 'name', startDate: 'startDate', endDate: 'endDate', locale: true}),
})
