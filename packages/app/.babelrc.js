
const { babel } = require('@itdd/configBuild')

babel.plugins = [
  'styled-components',
  'transform-react-require',
  [
    'module-resolver',
    {
      root: [
        './src'
      ]
    }
  ]
]

module.exports = babel
