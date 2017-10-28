
import cx from 'classnames'
import oc from 'open-color'

import {theme} from '@idd/components'

const Message = ({
  title,
  body,
  isRead,
  onClick
}) => (
  <li className='root'>
    <div className='status'>
      <div className={cx('indicator', {
        'isRead': isRead
      })} />
    </div>
    <div className='content'>
      <h2>{title}</h2>
      <div className='body'>{body}</div>
    </div>
    <style jsx>{`
      .root {
        display: flex;
        padding: ${theme.basePadding}rem;
        padding-left: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      .status {
        width: 3rem;
      }
      .indicator {
        border-radius: 200px;
        background: ${theme.color.error};
        width: 0.5rem;
        height: 0.5rem;
        margin: auto;
        margin-top: 0.4rem;
      }
      .isRead {
        background: ${theme.gradients.primaryShift};
      }
      .content {
        flex: 1;
      }
      h2 {
        font-family: ${theme.fonts.main};
        font-size: ${theme.baseFontSize * 0.8}rem;
        font-weight: 400;
        letter-spacing: 1px;
        color: ${oc.gray[6]};
        text-transform: uppercase;
        margin: 0rem 0 0.8rem 0;
      }
      .body {
        font-family: ${theme.fonts.main};
        font-size: ${theme.baseFontSize}rem;
        color: ${oc.gray[2]};
        line-height: ${theme.baseLineHeight};
      }
    `}</style>
  </li>
)

const MessagePump = ({
  messages,
  onClick
}) => (
  <ul>
    <Message
      title='Warning'
      body='Power reserves at critical levels'
    />
    <Message
      title='Engineering'
      body='Shipyard upgrade has been completed. Engineers are now able to manufacture grade III craft and components.'
      isRead
    />
    <Message
      title='Engineering'
      body='Shipyard upgrade has been completed. Engineers are now able to manufacture grade III craft and components.'
      isRead
    />
    <Message
      title='Engineering'
      body='Shipyard upgrade has been completed. Engineers are now able to manufacture grade III craft and components.'
      isRead
    />
    <Message
      title='Engineering'
      body='Shipyard upgrade has been completed. Engineers are now able to manufacture grade III craft and components.'
      isRead
    />
    <Message
      title='Engineering'
      body='Shipyard upgrade has been completed. Engineers are now able to manufacture grade III craft and components.'
      isRead
    />
    <Message
      title='Engineering'
      body='Shipyard upgrade has been completed. Engineers are now able to manufacture grade III craft and components.'
      isRead
    />
    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        background: rgba(0, 0, 0, 0.1);
      }
    `}</style>
  </ul>
)

export default MessagePump
