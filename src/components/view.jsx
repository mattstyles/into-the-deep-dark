
import classnames from 'classnames'

const View = ({
  children,
  scroll,
  main,
  style
}) => (
  <div
    className={classnames('View', {
      ScrollView: scroll,
      MainView: main
    })}
    style={style}
  >
    {children}
    <style jsx>{`
      .View {
        flex: 1;
        flex-direction: column;
        overflow-x: scroll;
      }

      .MainView {
        display: flex;
      }

      .ScrollView {
        overflow-y: scroll;
      }
    `}</style>
  </div>
)

export default View
