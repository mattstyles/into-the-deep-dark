
import {connect} from 'core/store'

// const App = ({state}) => (
//   <div className='Main'>
//     <TickUI rate={previous}>
//       <Tick disabled />
//     </TickUI>
//     <Navigator state={state}>
//       <HomeView route='/' title='Home' />
//       <SettingsView route='/settings' title='Settings' />
//       <ConfigView route='/config' title='Configuration' />
//       <Page4View route='/page4' title='Page 4' />
//       <Personnel route='/personnel' state={state} />
//     </Navigator>
//   </div>
// )

const App = ({state}) => (
  <div>
    <h1>Hello World</h1>
  </div>
)

export default connect(
  state => state,
  App
)
