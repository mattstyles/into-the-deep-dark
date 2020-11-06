
import { connect } from 'kunai'
import { routes } from '@itdd/router'
import { createStructuredSelector } from 'reselect'

import { NavLink, NavBadge } from '../common'

import { selectors } from '@comms/core'

const { getNumUnreadMessages } = selectors

const CommsComponent = ({
  currentPath,
  numUnreadMessages
}) => {
  return (
    <NavLink align route={routes.comms} currentPath={currentPath}>
      <span>Comms</span>
      {numUnreadMessages > 0 && <NavBadge>{numUnreadMessages}</NavBadge>}
    </NavLink>
  )
}

export const CommsLink = connect(
  createStructuredSelector({
    numUnreadMessages: getNumUnreadMessages
  }),
  CommsComponent
)
