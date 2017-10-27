
import oc from 'open-color'

const theme = {
  baseFontSize: 1.4,
  baseLineHeight: 1.6,
  basePadding: 1.2,
  borderRadius: 3,

  baseIconSize: 6,
  baseIconTextSize: 1.6,

  transition: {
    main: 150,
    spin: 1250
  },

  fonts: {
    fb: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
    main: `'Gotham Rounded SSm A', 'Gotham Rounded SSm B', Raleway`,
    heading: `'Tungsten Narrow A', 'Tungsten Narrow B', League Gothic`
  },

  color: {
    primary: oc.green[5],
    primaryDark: oc.green[7],
    primaryLight: oc.green[4],
    header: oc.gray[8],
    error: oc.red[8]
  },

  gradients: {
    background: `radial-gradient(
      circle at 50% 90%,
      rgba(0, 0, 0, 0.1) 0,
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0.4) 100%
    )`
  }
}

export default theme
