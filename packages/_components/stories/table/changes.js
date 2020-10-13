
import React, {Component} from 'react'
import {action} from '@storybook/addon-actions'
import cx from 'classnames'

import {App, View, Table, Button} from '../../src'

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

class ControlledTable extends Component {
  constructor () {
    super()
    this.state = {
      showHeader: false,
      isStriped: false,
      height: null,
      data,
      columns
    }
  }

  toggle = key => event => {
    this.setState(state => ({
      ...state,
      [key]: !state[key]
    }))
  }

  setValue = (key, value) => event => {
    this.setState(state => ({
      ...state,
      [key]: value
    }))
  }

  sort = key => event => {
    this.setState(state => ({
      ...state,
      data: data.sort((a, b) => {
        return a[key] > b[key]
      })
    }))
  }

  render () {
    const {showHeader, isStriped, columns, data, height} = this.state
    return (
      <View main>
        <div className='Root'>
          <Button
            classes={cx({
              isSelected: showHeader
            })}
            onClick={this.toggle('showHeader')}
          >
            Toggle Table Header
          </Button>
          <Button
            classes={cx({
              isSelected: isStriped
            })}
            onClick={this.toggle('isStriped')}
          >
            Toggle Striped Table
          </Button>
          <Button onClick={this.sort('name')}>Sort by name</Button>
          <Button onClick={this.sort('assignment')}>Sort by assignment</Button>
          <Button
            classes={cx({
              isSelected: height
            })}
            onClick={this.setValue('height', 190)}
          >Set height</Button>
          <Button
            onClick={this.setValue('height', null)}
          >Clear height</Button>
          <style jsx>{`
            .Root {
              padding: 10px;
            }
            .Root :global(.Btn) {
              margin: 10px;
              border: 2px solid rgba(255, 255, 255, 0.1);
              transition: border ease-out 150ms;
            }
            .Root :global(.Btn.isSelected) {
              margin: 10px;
              border-color: rgba(255, 255, 255, 0.9);
            }
          `}</style>
        </div>
        <div className='Root'>
          <Table
            isStriped={isStriped}
            showHeader={showHeader}
            columns={columns}
            data={data}
            onRowClick={action('row click')}
            bodyHeight={height}
          />
          <style jsx>{`
            .Root {
              margin: 20px;
              /*background: linear-gradient(
                30deg,
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.1)
              );*/
              background: radial-gradient(
                circle at 50% 90%,
                rgba(0, 0, 0, 0.1) 0,
                rgba(0, 0, 0, 0.3) 60%,
                rgba(0, 0, 0, 0.4) 100%
              );
              border-radius: 3px;
              border: 1px solid rgba(0, 0, 0, 0.5);
            }
          `}</style>
        </div>
      </View>
    )
  }
}

export default () => (
  <App>
    <ControlledTable />
  </App>
)
