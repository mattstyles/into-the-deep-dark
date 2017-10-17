
import oc from 'open-color'
import theme from './theme'

export const H1 = ({children}) => (
  <h1>
    {children}
    <style jsx>{`
      h1 {
        font-size: ${theme.baseFontSize * 2.5}rem;
        font-weight: 300;
        color: ${oc.gray[7]};
        line-height: 1.1;
        margin-top: 0rem;
        margin-bottom: ${theme.baseFontSize * 1.2}rem;
      }
    `}</style>
  </h1>
)

export const H2 = ({children}) => (
  <h2>
    {children}
    <style jsx>{`
      h2 {
        font-size: ${theme.baseFontSize * 1.6}rem;
        font-weight: 300;
        color: ${oc.gray[7]};
        line-height: 1.2;
        margin-top: 0rem;
        margin-bottom: ${theme.baseFontSize * 0.8}rem;
      }
    `}</style>
  </h2>
)

export const H3 = ({children}) => (
  <h3>
    {children}
    <style jsx>{`
      h3 {
        font-size: ${theme.baseFontSize * 1.1}rem;
        font-weight: 300;
        color: ${oc.gray[6]};
        line-height: 1.2;
        margin-top: 0rem;
        margin-bottom: ${theme.baseFontSize}rem;
        text-transform: uppercase;
      }
    `}</style>
  </h3>
)

export const P = ({children}) => (
  <p>
    {children}
    <style jsx>{`
      p {
        font-size: ${theme.baseFontSize}rem;
        color: ${oc.gray[7]};
        line-height: ${theme.baseLineHeight};
        margin-bottom: ${theme.baseFontSize * 0.6}rem;
        margin-top: 0;
      }
    `}</style>
  </p>
)

export const TextBlock = ({children, styles}) => (
  <div style={styles}>
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

export const Text = ({children, styles}) => (
  <span style={styles}>
    {children}
    <style jsx>{`
      span {
        font-size: ${theme.baseFontSize}rem;
        line-height: ${theme.baseLineHeight};
        color: ${oc.gray[7]};
      }
    `}</style>
  </span>
)
