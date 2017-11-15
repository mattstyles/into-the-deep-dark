
import oc from 'open-color'
import {createStructuredSelector} from 'reselect'
import {View, Pane, theme} from '@idd/components'

import {connect} from 'signals'
import {getCurrentPath} from 'core/navigation'
import {getSelectedMessageId, getMessages, getCurrentMessage} from 'core/messages/selectors'
import actions from 'core/messages/actions'
import {Pure} from 'utils'

import MessagePump from 'components/messages/messagePump'
import Marked from 'components/marked'

const CommsOverviewView = ({
  currentPath,
  messages,
  currentMessageId,
  currentMessage
}) => {
  return (
    <View main>
      <Pane split>
        <Pane flex={0.3} styles={{minWidth: '25rem'}}>
          <MessagePump
            messages={messages}
            selectedId={currentMessageId}
            onClick={actions.select.of}
          />
        </Pane>
        <View isPadded>
          <div className='msgMeta'>{currentMessage.title}</div>
          <Marked source={currentMessage.body} />
        </View>
      </Pane>
      <style jsx>{`
        .msgMeta {
          font-size: ${theme.fonts.size.small}rem;
          font-weight: 400;
          font-family: ${theme.fonts.main};
          color: ${oc.gray[6]};
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 4px 0 ${theme.basePadding}rem 0;
        }
      `}</style>
    </View>
  )
}

export default connect(
  createStructuredSelector({
    currentPath: getCurrentPath,
    messages: getMessages,
    currentMessageId: getSelectedMessageId,
    currentMessage: getCurrentMessage
  }),
  Pure(CommsOverviewView)
)
