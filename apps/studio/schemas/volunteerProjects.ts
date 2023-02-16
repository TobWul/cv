import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'volunteerProjects',
  title: 'Volunteer projects',
  type: 'document',
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
      name: 'startDate',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      type: 'date',
    }),
  ],
})
