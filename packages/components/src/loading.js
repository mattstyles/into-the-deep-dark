
import styled, { css, keyframes } from 'styled-components'
import { Center, Box } from '@raid/kit'
import { Hexagon } from '@raid-ui/icons/Hexagon'
import { css as themedCss } from '@styled-system/css'

const pulse = keyframes({
  '0%': {
    transform: 'scale(1)',
    opacity: 1
  },
  '5%': {
    transform: 'scale(0.95)',
    opacity: 1
  },
  '70%': {
    transform: 'scale(1.8)',
    opacity: 0
  },
  '90%': {
    transform: 'scale(0.95)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(0.95)',
    opacity: 0
  }
})

const innerPulse = keyframes({
  '0%': {
    transform: 'scale(0.45)',
    opacity: 0.35
  },
  '5%': {
    transform: 'scale(0.42)',
    opacity: 0.30
  },
  '20%': {
    transform: 'scale(0.45)',
    opacity: 0.35
  }
})

const duration = '2000ms'

const Inner = styled(Hexagon)(
  props => themedCss({
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'scale(0.45)',
    opacity: 0.35,
    svg: {
      fill: 'primary',
      stroke: 'primary'
    }
  }),
  props => {
    return css`
      animation: ${innerPulse} ${duration} ease-in-out infinite;
    `
  }
)

const Pulse = styled(Hexagon)(
  props => themedCss({
    position: 'absolute',
    top: 0,
    left: 0
  }),
  props => {
    return css`
      animation: ${pulse} ${duration} ease-in-out infinite;
    `
  }
)

export const Loading = (props) => {
  return (
    <Center {...props}>
      <Box position='relative'>
        <Hexagon
          color='primary'
        />
        <Inner />
        <Pulse
          color='primary'
        />
      </Box>
    </Center>
  )
}

export const LoadModal = () => {
  return (
    <Center sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, bg: 'hsla(0, 0%, 100%, 0.85)', zIndex: 'floating' }}>
      <Loading />
    </Center>
  )
}
