
import oc from 'open-color'
import {createStructuredSelector} from 'reselect'
import {View, Pane, OptionList, NavOption, theme} from '@idd/components'
import {push} from 'raid-navigator'

import {connect} from 'signals'
import {getCurrentPath} from 'core/navigation'
import {getSelectedMessageId, getMessages, getCurrentMessage} from 'core/messages/selectors'
import actions from 'core/messages/actions'

import MessagePump from 'components/messages/messagePump'
import Marked from 'components/marked'

const options = [
  {text: 'Overview', route: '/comms'},
  {text: 'Diplomacy', route: '/comms/diplomacy'}
]

const CommsNav = ({currentPath}) => (
  <div>
    <OptionList isHorizontal height={3.6}>
      {
        options.map(opt => (
          <NavOption
            key={opt.text}
            route={opt.route}
            text={opt.text}
            isSelected={currentPath === opt.route}
            onClick={push}
          />
        ))
      }
    </OptionList>
    <style jsx>{`
      div {
        background: ${theme.color.header};
      }
      div :global(.Option) {
        text-transform: none;
        letter-spacing: 0;
        font-size: 1.2rem;
      }
    `}</style>
  </div>
)

const CommsView = ({
  currentPath,
  messages,
  currentMessageId,
  currentMessage
}) => (
  <View main>
    <CommsNav currentPath={currentPath} />
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

export default connect(
  createStructuredSelector({
    currentPath: getCurrentPath,
    messages: getMessages,
    currentMessageId: getSelectedMessageId,
    currentMessage: getCurrentMessage
  }),
  CommsView
)
