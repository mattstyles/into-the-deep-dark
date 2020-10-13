
import React, {Component} from 'react'
import {storiesOf} from '@storybook/react'
import oc from 'open-color'

import {App, theme, Pane, View, H1} from '../src'

const Square = ({styles, size}) => (
  <div style={styles}>
    <style jsx>{`
      width: ${size}px;
      height: ${size}px;
    `}</style>
  </div>
)
Square.defaultProps = {
  size: 44
}

const Rect = ({styles, width, height}) => (
  <div style={styles}>
    <style jsx>{`
      width: ${width}px;
      height: ${height}px;
    `}</style>
  </div>
)
Rect.defaultProps = {
  width: 500,
  height: 44
}

const Swatch = ({gradient, name}) => (
  <div className='root'>
    <H1>{name}</H1>
    <Pane split>
      <Pane className='left'>
        <Square size={300} styles={{
          background: gradient
        }} />
      </Pane>
      <Pane className='right'>
        <Square size={44} styles={{
          background: gradient
        }} />
        <div className='outer'>
          <div className='border' />
          <div className='body' />
        </div>
      </Pane>
    </Pane>
    <div className='footer'>
      <Rect width={500} height={44} styles={{
        background: gradient
      }} />
    </div>
    <style jsx>{`
      .root {
        padding: 8px;
      }
      .footer {
        margin-top: 8px;
      }
      .outer {
        margin-top: 8px;
        box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.75);
        width: 200px;
      }
      .border {
        background: ${gradient};
        width: 200px;
        height: 4px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .body {
        background: rgba(255, 255, 255, 0.1);
        width: 200px;
        height: 196px;
      }
    `}</style>
  </div>
)

class AnimatedGradient extends Component {
  constructor () {
    super()
    this.state = {
      progress: 0
    }
    this.frame = null
    this.pauseTimeout = null
    this.speed = 1 / 200
  }

  componentDidMount () {
    this.frame = window.requestAnimationFrame(this.onAnimate)
  }

  componentWillUnmount () {
    window.cancelAnimationFrame(this.frame)
    window.clearTimeout(this.pauseTimeout)
  }

  onAnimate = () => {
    if (this.state.paused) {
      return
    }
    if (this.state.progress > 2) {
      this.pauseTimeout = window.setTimeout(
        this.onUnpause,
        1000 + Math.random() * 2000
      )
      window.cancelAnimationFrame(this.frame)
    }
    // This is a linear progress
    this.setState(state => ({
      ...state,
      progress: state.progress > 2 ? 0 : state.progress + this.speed,
      paused: state.progress > 2
    }))
    this.frame = window.requestAnimationFrame(this.onAnimate)
  }

  onUnpause = () => {
    this.setState(state => ({
      ...state,
      paused: false
    }))
    this.frame = window.requestAnimationFrame(this.onAnimate)
    this.speed = 1 / (100 + Math.random() * 200)
  }

  render () {
    const {progress} = this.state
    return (
      <div>
        <style jsx>{`
          width: 400px;
          height: 60px;
          margin: 30px;
          background: linear-gradient(50deg,
            ${oc.teal[4]} ${(-2 + progress) * 100}%,
            ${oc.green[7]} ${(-1 + progress) * 100}%,
            ${oc.teal[4]} ${(0 + progress) * 100}%,
            ${oc.green[7]} ${(1 + progress) * 100}%
          )
        `}</style>
      </div>
    )
  }
}

storiesOf('Gradients', module)
  .add('Swatches', () => (
    <App>
      <View>
        <Swatch name='Background' gradient={theme.gradients.background} />
        <Swatch name='Background Subtle' gradient={theme.gradients.backgroundSubtle} />
        <Swatch name='Primary Radial' gradient={theme.gradients.primaryRadial} />
        <Swatch name='Primary' gradient={theme.gradients.primary} />
        <Swatch name='Primary Shift' gradient={theme.gradients.primaryShift} />
        <Swatch name='Primary Light' gradient={theme.gradients.primaryLight} />
        <Swatch name='Blue' gradient={theme.gradients.blue} />
        <Swatch name='Sunset' gradient={theme.gradients.sunset} />
      </View>
    </App>
  ))
  .add('Animated gradient', () => (
    <App>
      <AnimatedGradient />
    </App>
  ))
