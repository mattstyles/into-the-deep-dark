
import {createSelector} from 'reselect'
import {compose} from 'lodash/fp'

import {connect} from 'core/store'
import {Link} from 'core/navigator'
import {basepath} from 'utils/path'
import {capitalise} from 'utils/string'

import {Icon} from 'components'

import {white, black} from 'core/styles/modules/colors'
import {headerHeight} from 'core/styles/theme'
import {fit} from 'core/styles/mixins'

const selector = createSelector(
  ({navigation: {stack, index}}) => ({stack, index}),
  ({stack, index}) => {
    const route = stack[index] || {}
    return {
      stack,
      index,
      route,
      path: compose(
        capitalise,
        basepath
      )(route.pathname)
    }
  }
)

const ICON_SIZE = 40

const ViewNavigator = ({route, path}) => (
  <div className='NavView'>
    <span className='Slip' />
    <h2>{path}</h2>
    <Link
      route='/personnel'
      classes='Btn--isViewNav'
      onMouseEnter={() => {
        console.log('enter')
      }}
      onMouseLeave={() => {
        console.log('leave')
      }}
    >
      <Icon icon='VIEW_PERSONNEL' classes='Icon--isViewNav' />
    </Link>
    <style jsx>{`
      .NavView {
        display: flex;
        flex-direction: row;
        position: relative;
        height: ${headerHeight}px;
        background: transparent;
      }
      .NavView :global(.Btn--isViewNav) {
        position: relative;
        width: ${ICON_SIZE}px;
        height: ${ICON_SIZE}px;
      }
      .NavView :global(.Icon--isViewNav) {
        ${fit}
        transform-origin: center;
        transform: scale(0.8);
        transition: transform 200ms ease-out;
      }
      .NavView :global(.Icon--isViewNav:hover) {
        transform: scale(1);
      }
      .Slip {
        ${fit}
        background: ${black[3]};
        transform: skewX(15deg);
        width: 110%;
        border-bottom-left-radius: 6px;
      }
      h2 {
        transform: translate3d(0px,0px,0px);
        margin: 0 16px 0 24px;
        line-height: ${headerHeight}px;
        font-size: 14px;
        font-weight: 400;
        color: ${white[1]};
      }
    `}</style>
  </div>
)

export default connect(
  selector,
  ViewNavigator
)
