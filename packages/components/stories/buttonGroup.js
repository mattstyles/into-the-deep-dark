
import React, {Component} from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import oc from 'open-color'
import {App, ButtonGroup, theme} from '../src'

class SelectableButtonGroup extends Component {
  constructor () {
    super()

    this.state = {
      selectedId: '1'
    }
    this.options = [
      {icon: 'ARROW', id: '1'},
      {icon: 'CHECK', id: '2'},
      {icon: 'SETTINGS', id: '3'}
    ]
  }

  onSelect = option => {
    this.setState(state => ({
      ...state,
      selectedId: option.id
    }))
  }

  render () {
    return (
      <ButtonGroup
        options={this.options}
        selectedId={this.state.selectedId}
        onClick={this.onSelect}
        iconSize={4.4}
      />
    )
  }
}

class SelectableCustomButtonGroup extends Component {
  constructor () {
    super()

    this.state = {
      selectedId: '1'
    }
    this.options = [
      {icon: 'ARROW', id: '1'},
      {icon: 'CHECK', id: '2'},
      {icon: 'SETTINGS', id: '3'}
    ]
  }

  onSelect = option => {
    this.setState(state => ({
      ...state,
      selectedId: option.id
    }))
  }

  render () {
    return (
      <div className='root'>
        <ButtonGroup
          options={this.options}
          selectedId={this.state.selectedId}
          onClick={this.onSelect}
          iconSize={2.8}
          styles={{flex: 0.5}}
          classes='group'
        />
        <style jsx>{`
          .root {
            display: flex;
            flex-direction: row;
          }
          .root :global(.group) {
            background: ${theme.gradients.blue};
          }
          .root :global(li.isSelected .OptionIcon svg) {
            fill: ${oc.white};
          }
          .root :global(li) {
            box-shadow: inset 0px 0px 0px 0px transparent;
            transition: box-shadow ease-out ${theme.transition.main}ms;
          }
          .root :global(li.isSelected) {
            box-shadow: inset 0px 0px 0px 4px ${oc.white};
          }
        `}</style>
      </div>
    )
  }
}

storiesOf('ButtonGroup', module)
  .add('Basic', () => (
    <App>
      <ButtonGroup
        options={[
          {icon: 'ARROW', id: '1'},
          {icon: 'CHECK', id: '2'}
        ]}
        selectedId='2'
      />
    </App>
  ))
  .add('Selectable', () => (
    <App>
      <SelectableButtonGroup />
    </App>
  ))
  .add('Custom', () => (
    <App>
      <SelectableCustomButtonGroup />
    </App>
  ))
