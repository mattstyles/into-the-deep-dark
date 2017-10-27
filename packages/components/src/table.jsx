
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import oc from 'open-color'

import theme from './theme'
import {noop} from './utils'
import Scrollable from './scrollable'

const StyledCell = ({value, meta}) => (
  <div className='Cell'>
    {value}
    <style jsx>{`
      .Cell {
        flex: ${meta.flex || 1};
      }
    `}</style>
  </div>
)

const Cell = ({value, meta, component: Element}) => {
  return (
    <Element value={value} meta={meta} />
  )
}
Cell.defaultProps = {
  value: '',
  meta: {},
  component: StyledCell
}
Cell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  meta: PropTypes.object
}

const Row = ({
  data,
  columns,
  classes,
  isHeader,
  onClick
}) => (
  <div
    className={cx('Row', {
      'Header': isHeader,
      'Row--isClickable': onClick !== noop
    }, classes)}
    onClick={event => onClick(data)}
  >
    {
      Object
        .keys(columns)
        .map(key => (
          <Cell
            key={key}
            value={data[key]}
            meta={columns[key]}
            component={isHeader
              ? columns[key].headerComponent
              : columns[key].cellComponent
            }
          />
        ))
    }
    <style jsx>{`
      .Row {
        display: flex;
        flex-direction: row;
        padding: ${theme.basePadding * 0.5}rem ${theme.basePadding * 2}rem;
      }
      .Row:hover,
      .Striped:nth-child(2n + 1):hover {
        background: rgba(255, 255, 255, 0.05);
      }
      .Row--isClickable {
        cursor: pointer;
      }
      .Striped:nth-child(2n + 1) {
        background: rgba(0, 0, 0, 0.15);
      }
      .Header {
        background: ${oc.gray[9]};
        color: ${oc.gray[6]};
        text-transform: uppercase;
        font-size: ${theme.baseFontSize * 0.7}rem;
        font-weight: 500;
        border-bottom: 2px solid rgba(0, 0, 0, 0.25);
        cursor: auto;
      }
      .Header:hover {
        background: ${oc.gray[9]};
      }
    `}</style>
  </div>
)
Row.defaultProps = {
  data: {},
  meta: {},
  onClick: noop,
  isHeader: false
}
Row.propTypes = {
  data: PropTypes.object,
  meta: PropTypes.object,
  onClick: PropTypes.func,
  isHeader: PropTypes.bool
}

class Table extends Component {
  static defaultProps = {
    isStriped: false,
    showHeader: false,
    onRowClick: noop,
    bodyHeight: null
  }
  static propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired,
    isStriped: PropTypes.bool,
    showHeader: PropTypes.bool,
    onRowClick: PropTypes.func
  }

  constructor () {
    super()
    this.headers = []
    this.rows = []
  }

  // These calculations are performed to reduce rendering time
  prepareHeaders (props) {
    const {columns} = props
    let headerData = Object
      .keys(columns)
      .reduce((headers, key) => ({
        ...headers,
        [key]: columns[key].value
      }), {})

    this.headers = (
      <Row
        isHeader
        data={headerData}
        columns={columns}
      />
    )
  }

  // These calculations are performed to reduce rendering time
  prepareRows (props) {
    const {columns, data, isStriped, onRowClick} = props
    this.rows = data.map((row, i) => (
      <Row
        key={`row${i}`}
        classes={cx({
          'Striped': isStriped
        })}
        data={row}
        columns={columns}
        onClick={onRowClick}
      />
    ))
  }

  componentWillMount () {
    this.prepareHeaders(this.props)
    this.prepareRows(this.props)
  }

  componentWillReceiveProps (next) {
    // console.log('will receive props', this.props, next, this.props === next)
    // @TODO only recalculate rows and headers if they change
    // if (this.props.data === next.data && this.props.columns === next.columns) {
    //   return
    // }

    this.prepareHeaders(next)
    this.prepareRows(next)
  }

  render () {
    const {
      styles,
      classes,
      showHeader,
      bodyHeight
    } = this.props

    return (
      <div
        style={styles}
        className={cx('Table', classes)}
      >
        {showHeader && this.headers}
        <Scrollable
          hidden={!bodyHeight}
          vertical
          styles={{
            height: bodyHeight
          }}
        >
          {this.rows}
        </Scrollable>

        <style jsx>{`
          .Table {
            font-family: ${theme.fonts.main};
            font-size: ${theme.baseFontSize}rem;
            color: ${oc.gray[0]};
            line-height: ${theme.baseLineHeight};
          }
        `}</style>
      </div>
    )
  }
}

export default Table
