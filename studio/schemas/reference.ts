import {defineField, defineType} from 'sanity'
import sorting from './sorting'
export default defineType({
  type: 'document',
  title: 'Referanse',
  name: 'referencePerson',
  fields: [
    sorting,
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'localeText',
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
  ],
})
