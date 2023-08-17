import { styled } from '../../styles'

export const TooltipContainer = styled('span', {
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',

  width: '210px',
  padding: '$3 $4',

  fontFamily: '$default',
  backgroundColor: '$gray900',
  color: '$gray100',
  borderRadius: '$sm',

  '&::before': {
    content: "''",
    display: 'block',
    position: 'absolute',
  },

  variants: {
    arrow: {
      left: {
        '&::before': {
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderRight: '8px solid $gray900',

          top: '50%',
          transform: 'translateY(-50%)',
          left: '-8px',
        },
      },
      top: {
        '&::before': {
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderBottom: '8px solid $gray900',

          top: '-8px',
          left: '50%',
        },
      },
      rigth: {
        '&::before': {
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderLeft: '8px solid $gray900',

          top: '50%',
          transform: 'translateY(-50%)',
          right: '-8px',
        },
      },
      bottom: {
        '&::before': {
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '8px solid $gray900',

          left: '50%',
          bottom: '-8px',
        },
      },
    },
  },

  defaultVariants: {
    arrow: 'bottom',
  },
})

export const Text = styled('p', {
  lineHeight: '$base',
  textAlign: 'center',
  margin: 0,
})
