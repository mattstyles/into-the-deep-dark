
import {createSelector} from 'reselect'

import {connect} from 'core/store'

import {white} from 'core/styles/modules/colors'
import {fonts} from 'core/styles/modules/fonts'
import {headerHeight} from 'core/styles/theme'

const selector = createSelector(
  ({base}) => base,
  ({title, star, planet}) => ({
    title,
    star,
    planet
  })
)

const Title = ({title, star, planet}) => (
  <div>
    <h1>{`${title} ・ ${planet}`}</h1>
    <style jsx>{`
      div {
        flex: 1;        
      }
      h1 {
        font-family: ${fonts.heading}, ${fonts.fallback.join(',')};
        font-weight: 300;
        color: ${white[0]};
        font-size: 21px;
        line-height: ${headerHeight}px;
        margin: 0 12px;
      }
    `}</style>
  </div>
)

export default connect(
  selector,
  Title
)
