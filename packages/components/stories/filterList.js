
import React, {Component} from 'react'

import {storiesOf} from '@storybook/react'

// import oc from 'open-color'
import {App, View, FilterList, Text, theme} from '../src'

const data = ['foo', 'bar', 'baz', 'quux', 'fred', 'coriolis', 'antlion',
  'lol', 'sketch', 'world', 'fantasy', 'riot', 'raid', 'gang', 'july',
  'mathis', 'warrior', 'goo', 'sun', 'igloo', 'person', 'light', 'notch']
  .map((v, i) => ({id: i, text: v}))

const Item = ({
  text
}) => (
  <li className='root'>
    <Text>{text}</Text>
    <style jsx>{`
      .root {
        padding: 6px 10px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.35);
        /*text-shadow: ${theme.fonts.onLightShadow};*/
      }
      .root:first-of-type {
        border-top: none;
      }
      .root:last-of-type {
        border-bottom: none;
      }
    `}</style>
  </li>
)

class Controlled extends Component {
  constructor () {
    super()

    this.state = {
      searchTerm: ''
    }
  }

  onChange = value => this.setState(state => ({
    ...state,
    searchTerm: value
  }))

  render () {
    const {searchTerm} = this.state
    return (
      <FilterList
        data={data.filter(({text}) => text.match(searchTerm))}
        ItemComponent={Item}
        searchPlaceholder='Search term'
        searchTerm={searchTerm}
        onChange={this.onChange}
      />
    )
  }
}

storiesOf('FilterList', module)
  .add('Filterable and Searchable List', () => (
    <App>
      <View main>
        <Controlled />
      </View>
    </App>
  ))
