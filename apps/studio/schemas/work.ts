import {defineField, defineType} from 'sanity'
import {datePreview} from '../previews'
export default defineType({
  type: 'document',
  title: 'Work',
  name: 'work',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      type: 'localeText',
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
  preview: datePreview({title: 'name', startDate: 'startDate', endDate: 'endDate', locale: false}),
})
