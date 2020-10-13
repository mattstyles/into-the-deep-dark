
import {action} from '@storybook/addon-actions'

import {App, View, Table} from '../../src'

const RedCell = ({value, meta}) => (
  <div className='Cell'>
    {value}
    <style jsx>{`
      .Cell {
        flex: ${meta.flex || 1};
        color: red;
      }
    `}</style>
  </div>
)
const BlueCell = ({value, meta}) => (
  <div className='Cell'>
    {value}
    <style jsx>{`
      .Cell {
        flex: ${meta.flex || 1};
        color: blue;
      }
    `}</style>
  </div>
)

const columns = {
  name: {
    value: 'name',
    flex: 0.5,
    onClick: action('name'),
    cellComponent: RedCell,
    headerComponent: BlueCell
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

export default () => (
  <App>
    <View main>
      <Table
        showHeader
        columns={columns}
        data={data}
        onRowClick={action('row click')}
      />
    </View>
  </App>
)
