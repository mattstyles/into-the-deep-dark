
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import oc from 'open-color'

import {App, View, Table} from '../src'

const headers = {
  name: {
    value: 'name',
    flex: 0.5,
    onClick: action('name')
  },
  age: {
    value: 'age',
    flex: 0.25,
    onClick: action('age')
  },
  occupation: {
    value: 'occupation',
    flex: 1,
    onClick: action('occupation')
  }
}
const data = [
  {
    name: 'Dave',
    age: 23,
    occupation: 'Part-time Chiropractor 3rd Degree Dan Master of Economics and Advanced Machine Learning'
  },
  {
    name: 'Susan',
    age: 54,
    occupation: 'Psychiatrist'
  },
  {
    name: 'Thelma-Louise',
    age: 27,
    occupation: 'Travelling Merchant'
  },
  {
    name: 'Alton',
    age: 36,
    occupation: 'Psychiatrist'
  }
]

const headers2 = {
  inf: {
    value: 'inf',
    flex: 1
  },
  name: {
    value: 'name',
    flex: 3
  },
  assignment: {
    value: 'assignment',
    flex: 3
  },
  health: {
    value: 'health',
    flex: 1
  },
  morale: {
    value: 'morale',
    flex: 1
  }
}
const data2 = [
  {
    inf: null,
    name: 'Daegon Armhaemer',
    assignment: 'Power Plant',
    health: 'Good',
    morale: 'Great'
  },
  {
    inf: null,
    name: 'Al Urz-ziz',
    assignment: 'Engineering',
    health: 'Good',
    morale: 'Moderate'
  },
  {
    inf: null,
    name: 'Alice Nagrin',
    assignment: '-',
    health: 'Poor',
    morale: 'Low'
  },
  {
    inf: null,
    name: 'Pete Toombs',
    assignment: '-',
    health: 'Enhanced',
    morale: 'Great'
  },
  {
    inf: null,
    name: 'Stonefist Arkin',
    assignment: 'Hydroponics',
    health: 'Decent',
    morale: 'Great'
  },
  {
    inf: null,
    name: 'Walker Tarys',
    assignment: 'Engineering',
    health: 'Great',
    morale: 'Great'
  },
  {
    inf: null,
    name: 'Ricon Nanwe',
    assignment: '-',
    health: 'Good',
    morale: 'Low'
  },
  {
    inf: null,
    name: 'Everast Nightstar',
    assignment: 'Medical',
    health: 'Great',
    morale: 'Good'
  }
]

storiesOf('Table', module)
  .add('Basic table', () => (
    <App>
      <View main>
        <Table
          headers={headers}
          data={data}
          onRowClick={action('row click')}
        />
      </View>
    </App>
  ))
  .add('Larger table', () => (
    <App>
      <View main>
        <Table
          isStriped
          showHeader
          headers={headers2}
          data={data2}
        />
      </View>
    </App>
  ))
