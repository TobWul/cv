import {defineField, defineType} from 'sanity'
import {datePreview} from '../previews'

export default defineType({
  type: 'document',
  title: 'Presentation',
  name: 'presentation',
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
      name: 'content',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'date',
      type: 'date',
    }),
  ],
  preview: datePreview({title: 'name', startDate: 'date', locale: true}),
})
