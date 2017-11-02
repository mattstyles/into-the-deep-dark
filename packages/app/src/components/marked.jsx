
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

const elements = {
  heading: MarkHead,
  paragraph: P,
  link: MarkLink
}

export default ({source}) => {
  console.log(source)
  return <ReactMarkdown
    source={source}
    renderers={elements}
  />
}
