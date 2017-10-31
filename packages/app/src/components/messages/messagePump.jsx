
import {Scrollable} from '@idd/components'

import Message from './message'

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
