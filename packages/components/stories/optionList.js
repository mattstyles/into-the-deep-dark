
import React, {Component} from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import {App, OptionList, NavOption} from '../src'

class SelectableList extends Component {
  constructor () {
    super()
    this.state = {
      selected: 'foo'
    }
  }

  onSelect (id) {
    return (route) => {
      this.setState(state => ({
        ...state,
        selected: id
      }))
    }
  }

  render () {
    return (
      <App>
        <OptionList
          isHorizontal={this.props.isHorizontal}
          margin={this.props.isHorizontal ? 3 : 1}
        >
          <NavOption
            text='foo'
            route='#'
            isSelected={this.state.selected === 'foo'}
            onClick={this.onSelect('foo')}
          />
          <NavOption
            text='bar'
            route='#'
            isSelected={this.state.selected === 'bar'}
            onClick={this.onSelect('bar')}
          />
          <NavOption
            text='baz'
            route='#'
            isSelected={this.state.selected === 'baz'}
            onClick={this.onSelect('baz')}
          />
        </OptionList>
      </App>
    )
  }
}

storiesOf('Option List', module)
  .add('Vertical', () => (
    <App>
      <OptionList height={2.6}>
        <NavOption text='foo' route='#' isSelected />
        <NavOption text='two words' route='#' />
        <NavOption text='verylongword' route='#' />
      </OptionList>
    </App>
  ))
  .add('Vertical w/ Icons', () => (
    <App>
      <OptionList>
        <NavOption text='foo' icon='LOADING' route='#' />
        <NavOption text='two words' icon='ARROW' route='#' isSelected />
        <NavOption text='verylongword' icon='CHECK' route='#' />
      </OptionList>
    </App>
  ))
  .add('Vertical Selectable', () => (
    <App>
      <SelectableList />
    </App>
  ))
  .add('Horizontal', () => (
    <App>
      <OptionList isHorizontal>
        <NavOption text='foo' route='#' />
        <NavOption text='two words' route='#' />
        <NavOption text='verylongword' route='#' isSelected />
      </OptionList>
    </App>
  ))
  .add('Horizontal w/ Icons', () => (
    <App>
      <OptionList isHorizontal>
        <NavOption text='foo' icon='LOADING' route='#' />
        <NavOption text='two words' icon='ARROW' route='#' isSelected />
        <NavOption text='verylongword' icon='CHECK' route='#' />
      </OptionList>
    </App>
  ))
  .add('Horizontal Selectable', () => (
    <App>
      <SelectableList isHorizontal />
    </App>
  ))
