import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@stn-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  argTypes: {
    arrowPosition: {
      options: ['left', 'top', 'rigth', 'bottom'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    text: '16/08/2023 - Disponível',
    arrowPosition: 'bottom',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
