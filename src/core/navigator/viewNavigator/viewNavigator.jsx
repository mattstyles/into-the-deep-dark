
import Component from 'inferno-component'

import Icon from 'components/icon/icon'
import {Link} from '../link'

const getActive = (link, route) => {
  let re = new RegExp(link)
  return re.test(route.split('/').slice(1)[0])
}

// const ViewNavigator = ({route}) => {
//   console.log('VN:', route)
//   return (
//     <div className='NavView'>
//       <div className='NavView-background u-fit'></div>
//       <Link
//         classes={{'NavView--isActive': getActive('personnel', route.route)}}
//         route='/personnel/all'
//       >
//         <Icon icon='VIEW_PERSONNEL' />
//       </Link>
//       <Link route='/'>
//         <Icon icon='VIEW_COMMS' />
//       </Link>
//       <Link route='/'>
//         <Icon icon='VIEW_STOCK' />
//       </Link>
//       <Link route='/'>
//         <Icon icon='VIEW_ENGINEERING' />
//       </Link>
//       <Link route='/'>
//         <Icon icon='VIEW_EXPLORE' />
//       </Link>
//     </div>
//   )
// }

class ViewNavigator extends Component {
  componentWillMount () {
    const {route} = this.props
    this.setState({
      text: this.getRoot(route.route)
    })
  }

  getRoot (route) {
    return route
      .split('/')
      .slice(1)[0]
      .replace(/^./, ch => ch.toUpperCase())
  }

  onMouseOver = text => {
    return event => {
      this.setState({
        text
      })
    }
  }

  onMouseOut = () => {
    return event => {
      this.setState({
        text: null
      })
    }
  }

  render () {
    const {route} = this.props
    return (
      <div className='NavView'>
        <div className='NavView-background u-fit'></div>
        <span className='NavView-id'>{this.state.text || this.getRoot(route.route)}</span>
        <Link
          classes={{'NavLink--isActive': getActive('personnel', route.route)}}
          route='/personnel/all'
          onHover={this.onMouseOver('Personnel')}
          onUnhover={this.onMouseOut()}
        >
          <Icon icon='VIEW_PERSONNEL' />
        </Link>
        <Link
          classes={{'NavLink--isActive': getActive('comms', route.route)}}
          route='/comms'
          onHover={this.onMouseOver('Comms')}
          onUnhover={this.onMouseOut()}
        >
          <Icon icon='VIEW_COMMS' />
        </Link>
        <Link
          classes={{'NavLink--isActive': getActive('stock', route.route)}}
          route='/stock'
          onHover={this.onMouseOver('Stock')}
          onUnhover={this.onMouseOut()}
        >
          <Icon icon='VIEW_STOCK' />
        </Link>
        <Link
          classes={{'NavLink--isActive': getActive('engineering', route.route)}}
          route='/engineering'
          onHover={this.onMouseOver('Engineering')}
          onUnhover={this.onMouseOut()}
        >
          <Icon icon='VIEW_ENGINEERING' />
        </Link>
        <Link
          classes={{'NavLink--isActive': getActive('exploration', route.route)}}
          route='/exploration'
          onHover={this.onMouseOver('Exploration')}
          onUnhover={this.onMouseOut()}
        >
          <Icon icon='VIEW_EXPLORE' />
        </Link>
      </div>
    )
  }
}

export default ViewNavigator
