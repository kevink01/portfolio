import {defineField, defineType} from 'sanity/lib/exports';


export default defineType({
  name: 'pageInfo',
  title: 'Portfolio Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Please enter your name'),
        Rule.max(50).warning("Whoa! You're name is long, but keep it to 50 characters"),
      ],
    }),
    defineField({
      name: 'typings',
      title: 'Typings',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (Rule) => [
            Rule.required().min(5).error('Minimum 5 characters'),
            Rule.max(50).warning('Very interesting typing, but maximum of 50 characters'),
          ],
        },
      ],
    }),
    defineField({
      name: 'profilePic',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Please upload Profile picture'),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (Rule) => [Rule.required().error('Make yourself interesting!')],
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email().error('Please enter a valid email'),
    }),
    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'file',
      validation: (Rule) => Rule.required().error('Please upload your resume'),
    }),
    defineField({
      name: 'figmaURL',
      title: 'Figma URL',
      type: 'url',
      validation: (Rule) => Rule.required().error('Please enter Figma URL'),
    }),
    defineField({
      name: 'sourceCodeURL',
      title: 'Source Code URL',
      type: 'url',
      validation: (Rule) => Rule.required().error('Please enter Source Code URL'),
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'socials'}}],
    }),
  ],
})
