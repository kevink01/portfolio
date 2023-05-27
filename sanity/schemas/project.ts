import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Please enter the project title')],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Please upload an image'),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (Rule) => [
        Rule.required().min(30).error('Make it interesting! Minimum 30 characters'),
        Rule.max(500).warning('Whoa! Interesting! But keep it below 500 characters'),
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    }),
    defineField({
      name: 'sourceCodeURL',
      title: 'Source Code URL',
      type: 'url',
      validation: (Rule) => Rule.required().error('Please enter source code URL'),
    }),
    defineField({
      name: 'isInProgress',
      title: 'In Progress',
      type: 'boolean',
    }),
    defineField({
      name: 'liveDemoURL',
      title: 'Live Demo URL',
      type: 'url',
      hidden: ({parent}) => parent?.isInProgress,
    }),
  ],
  initialValue: {
    isInProgress: false,
  },
})
