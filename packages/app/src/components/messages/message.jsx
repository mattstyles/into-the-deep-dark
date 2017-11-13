
import cx from 'classnames'
import oc from 'open-color'

import {theme} from '@idd/components'

const Message = ({
  id,
  title,
  short,
  isRead,
  isSelected,
  onClick
}) => (
  <li
    className={cx('root', {
      'isSelected': isSelected
    })}
    onClick={event => onClick(id)}
  >
    <div className='status'>
      <div className={cx('indicator', {
        'isRead': isRead
      })} />
    </div>
    <div className='content'>
      <h2>{title}</h2>
      <div className='body'>{short}</div>
    </div>
    <style jsx>{`
      .root {
        display: flex;
        padding: ${theme.basePadding * 1.6}rem ${theme.basePadding}rem;
        padding-left: 0;
        /*border-bottom: 1px solid rgba(255, 255, 255, 0.1);*/
        background: transparent;
        transition: background ease-out ${theme.transition.main}ms;
      }
      .root:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.05);
      }
      .root.isSelected {
        background: ${theme.color.primaryDark};
        text-shadow: ${theme.fonts.onLightShadow};
      }
      .root.isSelected h2 {
        color: ${oc.gray[3]};
      }
      .root.isSelected .body {
        color: ${oc.gray[0]};
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
        transition: background ease-out ${theme.transition.main}ms;
      }
      .isRead {
        background: ${theme.color.primary};
      }
      .content {
        flex: 1;
      }
      h2 {
        font-family: ${theme.fonts.main};
        font-size: ${theme.fonts.size.small}rem;
        font-weight: 400;
        letter-spacing: 1px;
        color: ${oc.gray[6]};
        text-transform: uppercase;
        margin: 0rem 0 0.8rem 0;
      }
      .body {
        font-family: ${theme.fonts.main};
        font-size: ${theme.fonts.size.base}rem;
        color: ${oc.gray[2]};
        line-height: ${theme.baseLineHeight};
      }
    `}</style>
  </li>
)

export default Message
