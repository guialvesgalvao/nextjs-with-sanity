import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'customButton',
  title: 'Botão Customizado',
  type: 'object', 
  fields: [
    defineField({
      name: 'text',
      title: 'Texto do Botão',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'link',
    },
  },
})