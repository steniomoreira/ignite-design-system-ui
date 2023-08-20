import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  width: '360px',
  padding: '$3 $5',
  background: '$gray800',

  border: '1px solid $gray600',
  borderRadius: '$sm',

  h2: {
    color: '$white',
    fontSize: '$xl',
  },

  p: {
    color: '$gray200',
  },

  button: {
    all: 'unset',

    position: 'absolute',
    top: '$5',
    right: '$4',

    width: '$5',
    height: '$5',

    cursor: 'pointer',

    svg: {
      color: '$gray200',
    },
  },
})
