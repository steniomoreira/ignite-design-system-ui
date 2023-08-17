import { Text, TooltipContainer } from './styles'

export interface TooltipProps {
  text: string
  arrowPosition?: 'left' | 'top' | 'rigth' | 'bottom'
}

export function Tooltip({ text, arrowPosition }: TooltipProps) {
  return (
    <TooltipContainer arrow={arrowPosition}>
      <Text>{text}</Text>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
