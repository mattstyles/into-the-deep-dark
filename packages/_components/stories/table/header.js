
import { action } from '@storybook/addon-actions'

import {App, View, Table} from '../../src'

const columns = {
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
const data = [
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

export default () => (
  <App>
    <View main>
      <Table
        isStriped
        showHeader
        columns={columns}
        data={data}
        onRowClick={action('row click')}
      />
    </View>
  </App>
)
