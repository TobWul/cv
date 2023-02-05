import {defineField, defineType} from 'sanity'
import {datePreview} from '../previews'

export default defineType({
  type: 'document',
  title: 'Education',
  name: 'education',
  fields: [
    defineField({
      name: 'name',
      type: 'localeString',
    }),
    defineField({
      name: 'school',
      type: 'localeString',
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
  preview: datePreview({
    title: 'name',
    locale: true,
    startDate: 'startDate',
    endDate: 'endDate',
  }),
})
