
import classnames from 'classnames'

const View = ({children, classes, scroll, main}) => {
  return (
    <div className={classnames({
      'View': true,
      'MainView': main,
      'ScrollView': scroll
    }, classes)}>
      {children}
    </div>
  )
}

export default View
