
import oc from 'open-color'
import PropTypes from 'prop-types'
import {createSelector} from 'reselect'
import {connect, signal} from 'signals'
import {Navigator, push, back, forward} from 'raid-navigator'
import {Icon, Button} from '@idd/components'

const getNavigation = state => state.navigation
const getNavParts = ({navigation}) => ({
  index: navigation.index,
  stack: navigation.stack
})

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

export const Link = ({children, route, state}) => (
  <Button
    onClick={event => push(route, state)}
    inline
  >
    {children}
  </Button>
)

export const getCurrentPath = createSelector(
  getNavigation,
  ({index, stack}) => ({
    currentPath: stack[index].pathname
  })
)

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
      span :global(.Btn) {
        display: inline-block;
        padding: 0.4rem;
        border-bottom: none;
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
    getNavParts,
    ({index}) => ({
      isDisabled: index === 0
    })
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
    getNavParts,
    ({index, stack}) => ({
      isDisabled: index === stack.length - 1
    })
  ),
  ({isDisabled}) => (
    <NavButton
      isDisabled={isDisabled}
      onClick={forward}
      rotation={180}
    />
  )
)
