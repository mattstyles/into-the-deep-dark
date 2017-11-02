
import ReactMarkdown from 'react-markdown'
import {H1, H2, H3, P} from '@idd/components'

import {Link} from 'core/navigation'

const MarkLink = ({
  href,
  children
}) => (
  <Link route={href.replace(/'/g, '')}>{children}</Link>
)

const headMap = {
  'h1': props => <H1 {...props} />,
  'h2': props => <H2 {...props} />,
  'h3': props => <H3 {...props} />
}

const MarkHead = ({
  level,
  children
}) => {
  const heading = headMap['h' + level]
  return (heading && heading({children})) || null
}

const literalEl = {
  open: '<div><',
  close: '/></div>'
}
const CustomElement = ({
  literal
}) => {
  const el = literal
    .slice(
      literalEl.open.length,
      literal.length - literalEl.close.length
    )
    .replace(/\s/, '')
  console.warn(`[marked] unrendered custom element: '${el}'`)
  return null
}

const elements = {
  Heading: MarkHead,
  paragraph: P,
  link: MarkLink,
  htmlblock: CustomElement
}

// @TODO allow adding custom blocks, this adds something to the renderers
// object that matches on htmlblocks. <div><Custom /></div> can then be used,
// the node name is grabbed from literal that the renderer spits out and the
// any custom block function here would take that nodeName, match it to a
// custom react element and pre-pop its props i.e. for a custom message the
// custom block function would add all the current message members as the
// element props.
export default ({source, renderers}) => {
  return <ReactMarkdown
    source={source}
    renderers={Object.assign({}, elements, renderers)}
  />
}
