import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primaty: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
