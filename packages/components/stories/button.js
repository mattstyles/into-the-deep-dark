
import React, {Component} from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import oc from 'open-color'
import {App, Button, WorkButton, P, Icon} from '../src'

class DoWork extends Component {
  constructor () {
    super()
    this.state = {
      progress: 0
    }

    this.animate = this.animate.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  animate () {
    if (this.state.progress >= 1) {
      this.setState(state => ({
        ...state,
        progress: 0
      }))
      return
    }

    this.setState(state => {
      const newProgress = this.state.progress + this.props.increment
      return {
        ...state,
        progress: newProgress > 1 ? 1 : newProgress
      }
    })
    window.requestAnimationFrame(this.animate)
  }

  onClick () {
    if (this.state.progress > 0) {
      return
    }
    this.setState(state => ({
      ...state,
      progress: 0
    }))
    this.animate()
  }

  render () {
    const {progress} = this.state
    return (
      <WorkButton
        progress={progress}
        icon={!!progress}
        onClick={this.onClick}
      >
        {progress > 0
          ? <Icon icon='LOADING' spin inline inText styles={{marginRight: 4}} />
          : null
        }
        {progress === 0 || progress === 1
          ? 'Start'
          : 'Working'
        }
      </WorkButton>
    )
  }
}

storiesOf('Button', module)
  .add('simple text', () => (
    <App>
      <Button onClick={action('Button clicked')}>
        Click Me
      </Button>
    </App>
  ))
  .add('standard types', () => (
    <App>
      <div>
        <Button onClick={action('primary clicked')}>
          Primary
        </Button>
        <Button transparent onClick={action('primary clicked')}>
          Transparent
        </Button>
        <style jsx>{`
          div :global(.Btn) {
            margin-left: 20px;
            margin-top: 20px;
          }
        `}</style>
      </div>
    </App>
  ))
  .add('with custom class', () => (
    <App>
      <div>
        <Button
          onClick={action('Button clicked')}
          classes='CustomBtn'
        >
          With custom class
        </Button>
        <style jsx>{`
          div :global(.CustomBtn) {
            background: ${oc.blue[5]};
          }
          div :global(.CustomBtn:hover) {
            background: ${oc.blue[7]};
          }
          div :global(.CustomBtn:active) {
            background: ${oc.blue[8]};
          }
        `}</style>
      </div>
    </App>
  ))
  .add('with custom style', () => (
    <App>
      <Button
        onClick={action('Button clicked')}
        styles={{
          background: `linear-gradient(30deg, ${oc.violet[5]}, ${oc.blue[6]})`
        }}
      >
        With custom styling
      </Button>
    </App>
  ))
  .add('inline', () => (
    <App styles={{padding: 30}}>
      <P>
        <span>This is a sentence with a clickable </span>
        <Button
          inline
          onClick={action('Button clicked')}
        >
           button
        </Button>
        <span>.</span>
      </P>
    </App>
  ))
  .add('circular', () => (
    <App styles={{padding: 30}}>
      <div>
        <Button
          circular
          onClick={action('Button clicked')}
        >
          Circularised button
        </Button>
      </div>
    </App>
  ))
  .add('Basic work button', () => (
    <App styles={{padding: 30}}>
      <div>
        <WorkButton
          progress={0.3}
          onClick={action('Button clicked')}
        >
          Circularised button
        </WorkButton>
      </div>
    </App>
  ))
  .add('Work button', () => (
    <App styles={{padding: 30}}>
      <div><DoWork increment={0.01} /></div>
    </App>
  ))
