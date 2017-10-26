
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import oc from 'open-color'

import theme from './theme'
import {noop} from './utils'

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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  meta: PropTypes.object
}

const Row = ({
  data,
  meta,
  classes,
  onClick
}) => (
  <div
    className={cx('Row', classes)}
    onClick={event => onClick(data)}
  >
    <pre>{JSON.stringify(meta)}</pre>
    {
      Object
        .keys(data)
        .map(key => (
          <Cell
            key={key}
            value={data[key]}
            meta={meta[key]}
          />
        ))
    }
    <style jsx>{`
      .Row {
        display: flex;
        flex-direction: row;
        padding: ${theme.basePadding * 0.5}rem ${theme.basePadding * 2}rem;
        cursor: pointer;
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
  meta: {},
  onClick: noop
}
Row.propTypes = {
  data: PropTypes.object,
  meta: PropTypes.object,
  onClick: PropTypes.func
}

class Table extends Component {
  static defaultProps = {
    isStriped: false,
    showHeader: false,
    onRowClick: noop
  }
  static propTypes = {
    data: PropTypes.array.isRequired,
    headers: PropTypes.object.isRequired,
    isStriped: PropTypes.bool,
    showHeader: PropTypes.bool,
    onRowClick: PropTypes.func
  }

  render () {
    const {
      styles,
      classes,
      data,
      headers,
      showHeader,
      isStriped,
      onRowClick
    } = this.props

    return (
      <div
        style={styles}
        className={cx('Table', classes)}
      >
        {
          showHeader && <Row
            classes='Header'
            data={Object
              .keys(headers)
              .reduce((obj, key) => ({
                ...obj,
                [key]: headers[key].value
              }), {})
            }
            meta={headers}
          />
        }
        {
          data
            .map((item, n) =>
              <Row
                classes={cx({
                  'Striped': isStriped
                })}
                key={`item${n}`}
                data={item}
                meta={headers}
                onClick={onRowClick}
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
