import {defineField, defineType} from 'sanity'
export default defineType({
  type: 'document',
  title: 'Referanse',
  name: 'referencePerson',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'localeString',
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
