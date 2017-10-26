
import React from 'react'
import { storiesOf } from '@storybook/react'
// import oc from 'open-color'

import {App, View, Table} from '../src'

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
        <Table data={data} />
      </View>
    </App>
  ))
  .add('Larger table', () => (
    <App>
      <View main>
        <Table
          isStriped
          headers={headers2}
          data={data2}
        />
      </View>
    </App>
  ))
