import {defineField, defineType} from 'sanity'
import sorting from './sorting'

export default defineType({
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    sorting,
    defineField({
      name: 'name',
      type: 'localeString',
    }),
    defineField({
      name: 'level',
      type: 'localeString',
    }),
  ],
})
