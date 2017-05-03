
import classnames from 'classnames'

import Button from 'components/button/button'

import {back, forward} from '../actions'

const stackNavigator = ({stack, currentIndex}) => {
  let common = 'Btn--isNavStack'
  let backClasses = classnames(common, {
    'Btn--isDisabled': currentIndex === 0
  })

  let forwardClasses = classnames(common, {
    'Btn--isDisabled': currentIndex === stack.length - 1
  })

  return (
    <div className='NavStack'>
      <Button
        icon='ARROW'
        iconClasses='Icon-arrow--left'
        classes={backClasses}
        onClick={e => {
          if (currentIndex === 0) {
            return
          }

          back()
        }}
      />
      <Button
        icon='ARROW'
        iconClasses='Icon-arrow--right'
        classes={forwardClasses}
        onClick={e => {
          if (currentIndex === stack.length - 1) {
            return
          }

          forward()
        }}
      />
    </div>
  )
}
export default stackNavigator
