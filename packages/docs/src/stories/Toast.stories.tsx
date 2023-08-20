import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@stn-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
