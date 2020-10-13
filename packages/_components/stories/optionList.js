
import React, {Component} from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import {App, OptionList, NavOption, Button} from '../src'

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

class BadgeSelectableList extends Component {
  constructor () {
    super()
    this.state = {
      value: 0
    }
  }

  onSelect (amount) {
    return event => {
      this.setState(state => ({
        ...state,
        value: state.value + amount
      }))
    }
  }

  render () {
    const {value} = this.state
    return (
      <App>
        <OptionList>
          <NavOption text='Inbox' route='#' badge={value} />
        </OptionList>
        <div><Button onClick={this.onSelect(1)}>Add</Button></div>
        <div><Button onClick={this.onSelect(-1)}>Subtract</Button></div>
        <div><Button onClick={this.onSelect(20)}>Add 20</Button></div>
        <div><Button onClick={this.onSelect(-20)}>Subtract 20</Button></div>
        <style jsx>{`
          div {
            width: 200px;
            margin: 12px;
          }
        `}</style>
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
    <SelectableList />
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
    <SelectableList isHorizontal />
  ))
  .add('Vertical w/ badge', () => (
    <App>
      <OptionList>
        <NavOption text='foo' icon='LOADING' route='#' badge='23' />
        <NavOption text='two words' icon='ARROW' route='#' isSelected />
        <NavOption text='verylongword' icon='CHECK' route='#' badge='1' />
      </OptionList>
    </App>
  ))
  .add('Change badge', () => (
    <BadgeSelectableList />
  ))
