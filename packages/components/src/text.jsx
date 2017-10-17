
import oc from 'open-color'
import theme from './theme'

export const H1 = ({children}) => (
  <h1>
    {children}
    <style jsx>{`
      h1 {
        font-size: ${theme.baseFontSize * 2.4}rem;
        font-weight: 300;
        color: ${oc.gray[7]};
        line-height: 1.1;
        margin-top: 2.4rem;
        margin-bottom: 1.4rem;
      }
    `}</style>
  </h1>
)

export const H2 = ({children}) => (
  <h2>
    {children}
    <style jsx>{`
      h2 {
        font-size: ${theme.baseFontSize * 1.8}rem;
        font-weight: 300;
        color: ${oc.gray[7]};
        line-height: 1.2;
        margin-top: 2.4rem;
        margin-bottom: 1rem;
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
        margin-top: 1.8rem;
        margin-bottom: 1.2rem;
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
        line-height: 1.4;
        margin-bottom: 0.6rem;
        margin-top: 0;
      }
    `}</style>
  </p>
)
