import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Tipography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illo? Quam velit fuga veritatis eius? Tempora facilis sapiente cumque magni explicabo, fugit exercitationem quibusdam? Provident explicabo temporibus enim dolores delectus.',
  },
} as Meta<TextProps>

export const Primaty: StoryObj<TextProps> = {}

export const CustonTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
