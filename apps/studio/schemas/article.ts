import {defineField, defineType} from 'sanity'
import {datePreview} from '../previews'

export default defineType({
  type: 'document',
  title: 'Article',
  name: 'article',
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
      name: 'url',
      type: 'url',
    }),
    defineField({
      name: 'date',
      type: 'date',
    }),
  ],
  preview: datePreview({title: 'name', startDate: 'date', locale: true}),
})
