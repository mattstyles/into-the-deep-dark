
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
    main: `Raleway`,
    heading: `League Gothic`
  },

  color: {
    primary: oc.green[5],
    primaryDark: oc.green[7],
    primaryLight: oc.green[4]
  }
}

export default theme
