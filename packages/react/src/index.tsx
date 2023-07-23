import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$10',
})

export function App() {
  return <Button>Simab is my dog</Button>
}
