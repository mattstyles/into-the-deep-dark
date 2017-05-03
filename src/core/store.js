
import {Signal} from 'raid'
import {adaptor} from 'raid-addons'

// import {initial as nav} from 'core/navigator/model'

// var initialState = {
//   counter: 0,
//   nav
// }
//
// var initialState = Object.assign({}, ...[
//   nav,
//   { base: {
//     title: 'Tannhauser Gate',
//     type: 'Grade II Starbase',
//     codename: 'Copperhead',
//     star: 'Achenar',
//     planet: 'Achenar IV'
//   }}
// ])

export const signal = new Signal({
  navigation: {
    stack: {},
    index: 0
  },
  base: {
    title: 'Tannhauser Gate',
    type: 'Grade II Starbase',
    codename: 'Copperhead',
    star: 'Achenar',
    planet: 'Achenar IV'
  }
})

export const connect = adaptor(signal)
