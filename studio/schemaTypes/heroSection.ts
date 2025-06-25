import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Seção Hero',
  type: 'document',

  fieldsets: [
    {
      name: 'buttonConfig',
      title: 'Configuração dos Botões',
    },
  ],

  fields: [
    defineField({
      name: 'internalName',
      title: 'Nome Interno',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImages',
      title: 'Imagens de Fundo',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Título Estruturado',
      type: 'array',
      of: [
        defineField({
          name: 'textSegment',
          title: 'Segmento de Texto',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Texto',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'isHighlighted',
              title: 'Destacado?',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'button1Text',
      title: 'Texto do Botão 1',
      type: 'string',
      fieldset: 'buttonConfig',
    }),
    defineField({
      name: 'button1Url',
      title: 'Link do Botão 1',
      type: 'string',
      fieldset: 'buttonConfig',
    }),
    defineField({
      name: 'button2Text',
      title: 'Texto do Botão 2',
      type: 'string',
      fieldset: 'buttonConfig',
    }),
    defineField({
      name: 'button2Url',
      title: 'Link do Botão 2',
      type: 'string',
      fieldset: 'buttonConfig',
    }),
  ],
})