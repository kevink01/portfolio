import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Socials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Social',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Please enter social name')],
    }),
    defineField({
      name: 'url',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required().error('Please enter social URL'),
    }),
  ],
})
