
import oc from 'open-color'
import PropTypes from 'prop-types'
import {createSelector} from 'reselect'
import {connect, signal} from 'signals'
import {Navigator, push, back, forward} from 'raid-navigator'
import {theme, Icon, Button} from '@idd/components'
import navTheme from 'components/navigation/theme'

export const getNavigation = state => state.navigation
const getCurrentStackIndex = ({navigation}) => navigation.index
const getStack = ({navigation}) => navigation.stack
const isFirst = (index) => ({
  isDisabled: index === 0
})
const isLast = (index, stack) => ({
  isDisabled: index === stack.length - 1
})
export const getCurrentRoute = createSelector(
  getCurrentStackIndex,
  getStack,
  (index, stack) => stack[index]
)
export const getCurrentPath = createSelector(
  getCurrentStackIndex,
  getStack,
  (index, stack) => stack[index].pathname
)

export const Navigation = connect(
  createSelector(
    getNavigation,
    navigation => ({
      navigation,
      signal
    })
  ),
  Navigator
)

export const Link = ({
  children,
  route,
  state
}) => {
  return (
    <a
      href={route}
      onClick={event => {
        event.preventDefault()
        push(route, state)
      }}
    >
      {children}
      <style jsx>{`
        a {
          text-decoration: none;
          border-bottom: 1px solid ${oc.gray[6]};
          transition: color ${theme.transition.main}ms, border-color ${theme.transition.main}ms;
          cursor: pointer;
          color: inherit;
        }
        a:visited {
          color: inherit;
        }
        a:hover {
          color: ${oc.green[4]};
          border-color: ${oc.green[7]};
        }
      `}</style>
    </a>
  )
}

const onNavClick = (isDisabled, onClick) => event => {
  if (isDisabled) {
    return
  }
  onClick()
}
const NavButton = ({isDisabled, rotation, onClick}) => (
  <span>
    <Button
      classes='Btn'
      onClick={onNavClick(isDisabled, onClick)}
      inline
      icon
    >
      <Icon
        icon='ARROW'
        rotate={rotation}
        classes='Icon'
        small />
    </Button>
    <style jsx>{`
      span {
        display: inline-block;
      }
      span :global(.Btn) {
        display: inline-block;
        padding: ${navTheme.linkPadding}rem;
        border-bottom: none;
      }
      span :global(.Icon) {
        width: ${navTheme.height - navTheme.linkPadding * 2}rem;
        height: ${navTheme.height - navTheme.linkPadding * 2}rem;
      }
      span :global(.Icon svg) {
        fill: ${isDisabled ? oc.gray[6] : oc.white}
      }
    `}</style>
  </span>
)
NavButton.defaultProps = {
  isDisabled: false,
  rotation: 0
}
NavButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export const Back = connect(
  createSelector(
    getCurrentStackIndex,
    getStack,
    isFirst
  ),
  ({isDisabled}) => (
    <NavButton
      isDisabled={isDisabled}
      onClick={back}
    />
  )
)

export const Forward = connect(
  createSelector(
    getCurrentStackIndex,
    getStack,
    isLast
  ),
  ({isDisabled}) => (
    <NavButton
      isDisabled={isDisabled}
      onClick={forward}
      rotation={180}
    />
  )
)
