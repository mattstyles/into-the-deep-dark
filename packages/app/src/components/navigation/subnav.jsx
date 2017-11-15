
import {createStructuredSelector} from 'reselect'
import {push} from 'raid-navigator'
import {OptionList, NavOption, theme} from '@idd/components'

import {connect} from 'signals'
import {getCurrentPath} from 'core/navigation'
import {Pure} from 'utils'

const SubNav = ({currentPath, options}) => (
  <div>
    <OptionList isHorizontal height={3.6}>
      {
        options.map(opt => (
          <NavOption
            key={opt.text}
            route={opt.route}
            text={opt.text}
            isSelected={currentPath === opt.route}
            onClick={push}
          />
        ))
      }
    </OptionList>
    <style jsx>{`
      div {
        background: ${theme.color.header};
      }
      div :global(.Option) {
        text-transform: none;
        letter-spacing: 0;
        font-size: 1.2rem;
      }
    `}</style>
  </div>
)

export default connect(
  createStructuredSelector({
    currentPath: getCurrentPath
  }),
  Pure(SubNav)
)
