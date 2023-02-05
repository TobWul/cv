import {defineField} from 'sanity'
import {supportedLanguages} from '../languages'

export default {
  name: 'highlighted',
  title: 'Highlighted',
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
      name: 'projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
    }),
    defineField({
      name: 'language',
      type: 'string',
      options: {list: supportedLanguages.map(({id, title}) => ({value: id, title: title}))},
    }),
  ],
}
