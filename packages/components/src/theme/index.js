
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
    heading: `'Tungsten Narrow A', 'Tungsten Narrow B', League Gothic`,
    onLightShadow: `0 1px rgba(0, 0, 0, 0.2)`,

    size: {
      base: 1.4,
      small: 1.2,
      vsmall: 1.1
    }
  },

  color: {
    primary: oc.green[5],
    primaryDark: oc.green[7],
    primaryLight: oc.green[4],
    header: oc.gray[8],
    error: oc.red[8],

    button: {
      primary: oc.green[5],
      primaryHover: oc.green[7],
      primarySelect: oc.green[8],
      transparent: 'transparent',
      transparentHover: 'rgba(0, 0, 0, 0.1)',
      transparentSelect: 'rgba(0, 0, 0, 0.4)'
    }
  },

  gradients: {
    background: `radial-gradient(
      circle at 50% 90%,
      rgba(0, 0, 0, 0.05) 0,
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0.4) 100%
    )`,
    backgroundSubtle: `radial-gradient(
      circle at 50% 90%,
      rgba(0, 0, 0, 0.01) 0,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.15) 100%
    )`,
    primaryRadial: `radial-gradient(
      circle at 50% 90%,
      ${oc.green[5]} 0,
      ${oc.green[7]} 60%,
      ${oc.green[8]} 100%
    )`,
    primary: `linear-gradient(30deg, ${oc.green[8]}, ${oc.green[4]})`,
    primaryShift: `linear-gradient(30deg, ${oc.teal[5]}, ${oc.green[4]})`,
    primaryLight: `linear-gradient(30deg, ${oc.lime[3]}, ${oc.green[7]})`,
    primaryDark: `linear-gradient(30deg, ${oc.green[7]}, ${oc.green[8]})`,
    blue: `linear-gradient(30deg, ${oc.violet[5]}, ${oc.blue[6]})`,
    sunset: `linear-gradient(30deg, ${oc.orange[3]}, ${oc.red[7]} 75%)`
  }
}

export default theme
