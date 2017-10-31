
import {Scrollable} from '@idd/components'

import Message from './message'

// @TODO should scroll selected message to visible on mount?
// possibly not though, not sure, maybe it should always be at the top on
// mount as that is where new messages will come in.
const MessagePump = ({
  messages,
  selectedId,
  onClick
}) => (
  <Scrollable vertical styles={{
    height: '100%',
    background: 'rgba(0, 0, 0, 0.1)'
  }}>
    <ul>
      {
        messages.map(msg => (
          <Message
            key={msg.id}
            {...msg}
            onClick={onClick}
            isSelected={msg.id === selectedId}
          />
        ))
      }
    </ul>
    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </Scrollable>
)

export default MessagePump
