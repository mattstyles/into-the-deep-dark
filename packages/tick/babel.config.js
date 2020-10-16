
const { babel } = require('@itdd/configBuild')

babel.plugins.push('@babel/plugin-proposal-class-properties')

module.exports = babel
