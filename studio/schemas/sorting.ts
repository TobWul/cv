import {defineField} from 'sanity'

export default defineField({
  name: 'sorting',
  title: 'sorting',
  type: 'number',
  options: {
    list: [...new Array(10).keys()],
  },
})
