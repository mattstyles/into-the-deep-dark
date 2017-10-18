
export {default as App} from './app'
export {default as View} from './view'

export {default as Button} from './button'
export * from './text'
export {default as Icon} from './icon'

export const isIosSafari = () => {
  const {userAgent} = window.navigator
  // Mobile Safari targets ios
  // CriOS differentiates iosSafari and iosChrome
  if (/Mobile.*Safari/.test(userAgent) && !/CriOS/.test(userAgent)) {
    document.documentElement.classList.add('isIosSafari')
  }
}
