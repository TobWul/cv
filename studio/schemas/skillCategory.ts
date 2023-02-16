import {defineType} from 'sanity'
import {supportedLanguages} from '../languages'

export default defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  fields: [
    defineType({
      name: 'name',
      type: 'localeString',
    }),
    ...supportedLanguages.map((lang) =>
      defineType({
        title: `Skill (${lang.title})`,
        name: `skills_${lang.id}`,
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags',
        },
        fieldset: lang.isDefault ? null : 'translations',
      })
    ),
  ],
  preview: {
    select: {title: 'name.no'},
  },
})
