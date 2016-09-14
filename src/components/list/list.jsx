
import {def} from 'utils/component'

const List = def(({items, Component}) => {
  let children = items.map(item => Component({item}))
  return (
    <ul className='u-nakedList List'>
      {children}
    </ul>
  )
}, {
  Component: ({item}) => <li>{item}</li>
})

export default List
