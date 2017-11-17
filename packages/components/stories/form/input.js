
import React, {Component} from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import {App, Input, theme} from '../../src'

const CustomContainer = ({children}) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: flex;
        padding: 6px 20px;
        background: ${theme.gradients.primaryShift};
      }
    `}</style>
  </div>
)

class ConnectedInput extends Component {
  constructor () {
    super()

    this.state = {
      value: ''
    }
  }

  onChange = (newValue) => {
    this.setState(state => ({
      ...state,
      value: newValue
    }))
  }

  render () {
    const {value} = this.state
    return (
      <Input
        value={value}
        onChange={this.onChange}
        onSubmit={action(`submitted from input`)}
        onBlur={action(`onBlur from input`)}
        onFocus={action(`onFocus from input`)}
        {...this.props}
      />
    )
  }
}

storiesOf('Form', module)
  .add('Connected Input', () => (
    <App>
      <ConnectedInput />
    </App>
  ))
  .add('Input placeholder styling', () => (
    <App>
      <Input
        placeholder='This is some placeholder text'
        value=''
        onChange={() => {}}
      />
    </App>
  ))
  .add('Custom container', () => (
    <App>
      <Input
        Container={CustomContainer}
        styles={{flex: 1}}
        value='foo'
        onChange={() => {}}
      />
    </App>
  ))
