import { Heading } from '../Heading'
import { X } from 'phosphor-react'
import { Text } from '../Text'
import { ToastContainer } from './styles'

export interface ToastProps {
  title: string
  description: string
}

export function Toast({ title, description }: ToastProps) {
  return (
    <ToastContainer>
      <button>
        <X size={20} />
      </button>
      <Heading as="h2">{title}</Heading>
      <Text size="sm">{description}</Text>
    </ToastContainer>
  )
}
