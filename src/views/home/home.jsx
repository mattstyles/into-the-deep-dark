
import List from 'components/list/list'
import View from 'components/view/view'
import {uid} from 'utils/number'

let items = Array.from({length: 25}, () => uid())

const HomeView = props => {
  return (
    <View>
      <List items={items} />
    </View>
  )
}

export default HomeView
