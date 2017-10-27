
import {App, Table, Pane, H1} from '../../src'

const columns = {
  name: {
    value: 'Name',
    flex: 1
  },
  age: {
    value: 'Current Age',
    flex: 0.5
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
    name: 'Gretal',
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
    <Pane split>
      <Pane flex={0.5}>
        <Table
          isStriped
          showHeader
          columns={columns}
          data={data}
        />
      </Pane>
      <Pane styles={{padding: 20}}>
        <H1>The columns config can map visible fields from the data entries</H1>
      </Pane>
    </Pane>
  </App>
)
