
export {default as App} from './app'
export {default as View} from './view'
export {default as Pane} from './pane'
export {default as Scrollable} from './scrollable'

export * from './button'
export {default as ButtonGroup} from './buttonGroup'
export * from './text'
export {default as Icon} from './icon'
export {default as Badge} from './badge'
export {default as Well} from './well'
export {default as OptionSelected} from './optionSelected'
export * from './optionList'
export {default as Table} from './table'
export {default as Input} from './form/input'
export {default as FilterList} from './filterList'

export {default as theme} from './theme'

export const isIosSafari = () => {
  const {userAgent} = window.navigator
  // Mobile Safari targets ios
  // CriOS differentiates iosSafari and iosChrome
  if (/Mobile.*Safari/.test(userAgent) && !/CriOS/.test(userAgent)) {
    document.documentElement.classList.add('isIosSafari')
  }
}
