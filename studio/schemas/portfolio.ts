import {defineField} from 'sanity'

export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'companyName'},
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
    }),
    defineField({
      name: 'projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
    defineField({
      name: 'showReferences',
      type: 'boolean',
      initialValue: false,
    }),
  ],
}
