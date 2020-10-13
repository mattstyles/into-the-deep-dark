
const { babel } = require('@itdd/config')

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
