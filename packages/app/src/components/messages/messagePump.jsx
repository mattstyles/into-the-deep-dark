
import {Scrollable} from '@idd/components'

import Message from './message'

const MessagePump = ({
  messages,
  onClick
}) => (
  <Scrollable vertical styles={{
    height: '100%',
    background: 'rgba(0, 0, 0, 0.1)'
  }}>
    <ul>
      <Message
        title='Warning'
        body='Power reserves at critical levels'
        onClick={onClick}
      />
      <Message
        title='Engineering'
        body='Shipyard upgrade has been completed. Engineers are now able to manufacture grade III craft and components.'
        onClick={onClick}
        isRead
      />
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
