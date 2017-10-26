
import {App, View, Table} from '../../src'

const columns = {
  name: {
    value: 'name',
    flex: 0.5
  },
  age: {
    value: 'age',
    flex: 0.25
  },
  occupation: {
    value: 'occupation',
    flex: 1
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
        columns={columns}
        data={data}
      />
    </View>
  </App>
)
