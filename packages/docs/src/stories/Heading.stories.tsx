import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Tipography/Heading',
  component: Heading,

  tags: ['autodocs'],

  args: {
    children: 'Custon title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustonTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre setá um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
