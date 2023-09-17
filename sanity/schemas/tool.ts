import {defineField, defineType} from 'sanity/lib/exports';

export default defineType({
  name: 'tools',
  title: 'Tools',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tool',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Please enter tool name')],
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
  ],
})
