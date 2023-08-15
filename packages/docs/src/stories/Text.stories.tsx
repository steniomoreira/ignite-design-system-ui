import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@stn-ignite-ui/react'

export default {
  title: 'Tipography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illo? Quam velit fuga veritatis eius? Tempora facilis sapiente cumque magni explicabo, fugit exercitationem quibusdam? Provident explicabo temporibus enim dolores delectus.',
    size: 'md',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustonTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
