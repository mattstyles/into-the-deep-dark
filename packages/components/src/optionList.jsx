
import React from 'react'
import oc from 'open-color'
import cx from 'classnames'
import PropTypes from 'prop-types'

import get from './icons'
import {Text} from './text'
import Icon from './icon'
import theme from './theme'
import OptionSelected from './optionSelected'

const OptionIcon = ({icon, iconSet, iconSize, inline}) => (
  <Icon
    icon={icon}
    width={iconSize}
    height={iconSize}
    from={iconSet}
    inline={inline}
  />
)
OptionIcon.defaultProps = {
  icon: '_default',
  iconSet: get,
  iconSize: 2.2,
  inline: true
}
OptionIcon.propTypes = {
  icon: PropTypes.string,
  iconSet: PropTypes.func,
  iconSize: PropTypes.number,
  inline: PropTypes.bool
}

export const NavOption = ({
  text,
  icon,
  iconSet,
  iconSize,
  route,
  isSelected,
  isHorizontal,
  onClick,
  height,
  margin
}) => (
  <li key={`${text}-${route}`} className={cx({
    isSelected,
    isHorizontal
  })}>
    <a href={route} onClick={event => {
      if (!onClick) return
      event.preventDefault()
      if (isSelected) return
      onClick(route)
    }}>
      <OptionSelected isSelected={isSelected} isHorizontal={isHorizontal} />
      {icon && <OptionIcon icon={icon} iconSet={iconSet} iconSize={iconSize} />}
      {text && <Text classes='Option'>{text}</Text>}
    </a>
    <style jsx>{`
      a {
        text-decoration: none;
        display: block;
        width: 100%;
      }
      a :global(.Icon) {
        transform-origin: center;
        transform: scale(0.8);
        transition: transform ${theme.transition.main}ms;
        margin-left: ${theme.basePadding * 0.5}rem;
        margin-right: ${theme.basePadding * 0.5}rem;
      }
      a:hover :global(i) {
        transform-origin: center;
        transform: scale(1);
        transition: transform ${theme.transition.main}ms;
      }
      a :global(.Option) {
        display: inline-block;
        line-height: ${height}rem;
        margin-left: ${theme.basePadding * (icon ? 0.5 : 1)}rem;
        margin-right: ${theme.basePadding * 4}rem;
        font-size: ${theme.baseFontSize * 0.8}rem;
        vertical-align: middle;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${oc.gray[5]};
        transition: color ${theme.transition.main}ms;
      }
      a:hover :global(.Option) {
        color: ${oc.gray[0]};
      }
      li {
        position: relative;
        padding-left: 2px;
        background: rgba(0, 0, 0, 0);
        transition: background ease-out ${theme.transition.main}ms;
      }
      li:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      li.isSelected {
        background: rgba(0, 0, 0, 0.2);
      }
      li.isSelected :global(.Option) {
        color: ${oc.gray[0]};
      }
      li.isHorizontal :global(.Option) {
        margin-left: ${theme.basePadding * (icon ? 0.5 : margin)}rem;
        margin-right: ${theme.basePadding * margin}rem;
        text-align: center;
      }
      li.isHorizontal :global(.Icon) {
        margin-left: 0;
      }
      li.isSelected.isHorizontal {
        background: rgba(0, 0, 0, 0);
      }
      li:hover.isHorizontal {
        background: rgba(0, 0, 0, 0);
      }
    `}</style>
  </li>
)
NavOption.defaultProps = {
  icon: null,
  text: '',
  iconSet: get,
  iconSize: 2.6,
  isSelected: false,
  isHorizontal: false,
  onClick: null,
  height: 4.4,
  margin: 1
}
NavOption.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  iconSet: PropTypes.func,
  iconSize: PropTypes.number,
  route: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  onClick: PropTypes.func,
  height: PropTypes.number,
  margin: PropTypes.number
}

export const IconOption = ({
  icon,
  iconSet,
  iconSize,
  isSelected,
  route,
  height,
  onClick
}) => (
  <li key={`${route}`} className={cx({
    isSelected
  })}>
    <a href={route} onClick={event => {
      if (!onClick) return
      event.preventDefault()
      if (isSelected) return
      onClick(route)
    }}>
      <OptionIcon
        icon={icon}
        iconSet={iconSet}
        iconSize={iconSize}
        inline={false}
      />
    </a>
    <style jsx>{`
      a {
        text-decoration: none;
        display: block;
        padding: ${(height - iconSize) * 0.5}rem 0;
        box-sizing: border-box;
      }
      a :global(i) {
        display: block;
        margin: auto;
      }
      a:hover :global(i) {
        fill: ${oc.white};
      }
      li {
        position: relative;
        flex: 1;
        height: ${height}rem;
        background: rgba(0, 0, 0, 0);
        transition: background ease-out ${theme.transition.main}ms;
      }
      li:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      li :global(svg) {
        fill: ${oc.gray[5]};
        transition: fill ease-out ${theme.transition.main}ms;
      }
      li:hover :global(svg) {
        fill: ${oc.white};
      }
      li.isSelected :global(svg) {
        fill: ${theme.color.primary};
      }
    `}</style>
  </li>
)
IconOption.defaultProps = {
  icon: null,
  iconSet: get,
  iconSize: 2.6,
  isSelected: false,
  onClick: null,
  height: 4.4
}
IconOption.propTypes = {
  icon: PropTypes.string,
  iconSet: PropTypes.func,
  iconSize: PropTypes.number,
  route: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  height: PropTypes.number
}

// @TODO
export const DropdownOption = () => (
  <div />
)

export const OptionList = ({children, height, isHorizontal, margin}) => (
  <nav>
    <ul>
      {React.Children.map(children, child => React.cloneElement(child, {
        height,
        isHorizontal,
        margin
      }))}
    </ul>
    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: ${isHorizontal ? 'row' : 'column'};
      }
    `}</style>
  </nav>
)
OptionList.defaultProps = {
  isHorizontal: false,
  height: 4.4,
  margin: 1
}
OptionList.propTypes = {
  isHorizontal: PropTypes.bool,
  height: PropTypes.number,
  margin: PropTypes.number
}
