
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import oc from 'open-color'

import theme from './theme'

const Cell = ({value, meta}) => (
  <div className='Cell'>
    {value}
    <style jsx>{`
      .Cell {
        flex: ${meta.flex || 1};
      }
    `}</style>
  </div>
)
Cell.defaultProps = {
  value: '',
  meta: {}
}
Cell.propTypes = {
  value: PropTypes.string,
  meta: PropTypes.object
}

const Row = ({data, header, classes}) => (
  <div className={cx('Row', classes)}>
    {
      Object.keys(data)
        .map(key => (
          <Cell
            key={key}
            value={data[key]}
            meta={header[key]}
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
      }
    `}</style>
  </div>
)
Row.defaultProps = {
  data: {},
  header: {}
}
Row.propTypes = {
  data: PropTypes.object,
  header: PropTypes.header
}

class Table extends Component {
  static defaultProps = {
    data: [],
    headers: {},
    isStriped: false
  }
  static propTypes = {
    data: PropTypes.array,
    headers: PropTypes.object,
    isStriped: PropTypes.bool
  }

  render () {
    const {
      styles,
      classes,
      data,
      headers,
      isStriped
    } = this.props

    return (
      <div
        style={styles}
        className={cx('Table', classes)}
      >
        {
          <Row
            classes='Header'
            data={Object.keys(headers)
              .reduce((obj, key) => ({
                ...obj,
                [key]: headers[key].value
              }), {})
            }
            header={headers}
          />
        }
        {
          data.map((item, n) =>
            <Row
              classes={cx({
                'Striped': isStriped
              })}
              key={`item${n}`}
              data={item}
              header={headers}
            />
          )
        }
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
