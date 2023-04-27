import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Please enter skill name')],
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
      name: 'progress',
      title: 'Progress',
      type: 'number',
      validation: (Rule) => [
        Rule.required().error('Please enter progress number'),
        Rule.integer().error('Please round to nearest integer'),
        Rule.min(0).error('Must be greater than 0'),
        Rule.max(100).error('Must be less than 100'),
      ],
    }),
    defineField({
      name: 'skillColor',
      title: 'Color',
      type: 'color',
    }),
  ],
})
