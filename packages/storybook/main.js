
const addons = [
  '@storybook/addon-actions',
  '@storybook/addon-links',
  '@storybook/addon-knobs',
  '@storybook/addon-backgrounds',
  '@storybook/addon-viewport'
]

module.exports = {
  stories: [
    '../packages/components/**/*.stories.js'
  ],
  addons: addons
}
