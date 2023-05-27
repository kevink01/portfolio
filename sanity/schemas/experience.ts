import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Please enter your job title')],
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Please enter your job title')],
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'M/D/YYYY',
      },
      validation: (Rule) => Rule.required().error('Please enter a start date'),
    }),
    defineField({
      name: 'isWorkingHere',
      title: 'Currently Working',
      type: 'boolean',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'M/D/YYYY',
      },
      hidden: ({parent}) => parent?.isWorkingHere,
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    }),
    defineField({
      name: 'points',
      title: 'Summary',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (Rule) => [
            Rule.required().error('Please enter a validation'),
            Rule.min(10).error('Minimum of 10 characters'),
            Rule.max(100).warning("Whoa, that's interesting, but keep it 100 characters"),
          ],
        },
      ],
    }),
  ],
  initialValue: {
    isWorkingHere: false,
  },
})
