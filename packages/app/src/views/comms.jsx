
import {View, OptionList, NavOption, theme, H1} from '@idd/components'
import {push} from 'raid-navigator'

import {connect} from 'signals'
import {getCurrentPath} from 'core/navigation'

const options = [
  {text: 'Inbox', route: '/comms'},
  {text: 'Diplomacy', route: '/comms/diplomacy'}
]

const CommsNav = ({currentPath}) => (
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

const CommsView = ({currentPath}) => (
  <View main>
    <CommsNav currentPath={currentPath} />
    <View isPadded>
      <H1>{`Comms ${currentPath} ${currentPath === options[0].route}`}</H1>
    </View>
  </View>
)

export default connect(
  getCurrentPath,
  CommsView
)
