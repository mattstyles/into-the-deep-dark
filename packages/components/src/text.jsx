
import oc from 'open-color'
import cx from 'classnames'
import PropTypes from 'prop-types'

import theme from './theme'

export const H1 = ({children, styles, classes}) => (
  <h1
    className={cx(classes)}
    style={styles}
  >
    {children}
    <style jsx>{`
      h1 {
        font-family: ${theme.fonts.heading};
        font-size: ${theme.baseFontSize * 2.6}rem;
        font-weight: 500;
        color: ${oc.gray[0]};
        line-height: 1.1;
        margin-top: 0rem;
        margin-bottom: ${theme.baseFontSize * 1.2}rem;
      }
    `}</style>
  </h1>
)

export const H2 = ({children, styles, classes}) => (
  <h2
    className={cx(classes)}
    style={styles}
  >
    {children}
    <style jsx>{`
      h2 {
        font-family: ${theme.fonts.heading};
        font-size: ${theme.baseFontSize * 2}rem;
        font-weight: 500;
        color: ${oc.gray[0]};
        line-height: 1.2;
        margin-top: 0rem;
        margin-bottom: ${theme.baseFontSize * 0.8}rem;
      }
    `}</style>
  </h2>
)

export const H3 = ({children, styles, classes}) => (
  <h3
    className={cx(classes)}
    style={styles}
  >
    {children}
    <style jsx>{`
      h3 {
        font-family: ${theme.fonts.main};
        font-size: ${theme.baseFontSize * 1.1}rem;
        font-weight: 500;
        color: ${oc.gray[4]};
        line-height: 1.3;
        margin-top: 0rem;
        margin-bottom: ${theme.baseFontSize}rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    `}</style>
  </h3>
)

export const P = ({children, styles, classes}) => (
  <p
    className={cx(classes)}
    style={styles}
  >
    {children}
    <style jsx>{`
      p {
        font-family: ${theme.fonts.main};
        font-size: ${theme.baseFontSize}rem;
        color: ${oc.gray[0]};
        line-height: ${theme.baseLineHeight};
        margin-bottom: ${theme.baseFontSize * 0.6}rem;
        margin-top: 0;
      }
    `}</style>
  </p>
)

export const TextBlock = ({children, styles, classes}) => (
  <div
    className={cx(classes)}
    style={styles}
  >
    {children}
    <style jsx>{`
      div :global(p + h1),
      div :global(p + h2),
      div :global(p + h3) {
        margin-top: ${theme.baseFontSize * 2}rem
      }
    `}</style>
  </div>
)

const getTextSize = size => {
  if (typeof size === 'number') {
    return size
  }
  return theme.fonts.size[size] || theme.baseFontSize
}
export const Text = ({children, styles, classes, align, block, size}) => (
  <span
    className={cx({
      align: align,
      block: block
    }, classes)}
    style={styles}
  >
    {children}
    <style jsx>{`
      span {
        font-family: ${theme.fonts.main};
        font-size: ${getTextSize(size)}rem;
        line-height: ${theme.baseLineHeight};
        color: ${oc.gray[0]};
      }
      .align {
        vertical-align: middle;
      }
      .block {
        display: block;
      }
    `}</style>
  </span>
)
Text.defaultProps = {
  align: false,
  block: false,
  size: 'base'
}
Text.propTypes = {
  align: PropTypes.bool,
  block: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['base', 'small', 'vsmall'])
  ])
}

export const Block = ({children, classes, styles}) => (
  <div
    className={cx(classes)}
    style={styles}
  >
    {children}
    <style jsx>{`
      div {
        font-family: ${theme.fonts.main};
        font-size: ${theme.baseFontSize}rem;
        line-height: ${theme.baseLineHeight};
        color: ${oc.gray[0]};
      }
    `}</style>
  </div>
)
