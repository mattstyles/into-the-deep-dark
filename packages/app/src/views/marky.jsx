
import ReactMarkdown from 'react-markdown'
import Markdown from 'react-remarkable'
import {H1, P} from '@idd/components'

import {Link} from 'core/navigation'

const input = `
  # title element

  A paragraph with some _emphasised_ text

  How about a cheeky little [home]('/stock') link?
`

const MarkLink = ({
  href,
  children
}) => (
  <Link route={href.replace(/'/g, '')}>{children}</Link>
)

const elements = {
  heading: H1,
  paragraph: P,
  link: MarkLink
}

export default () => {
  return (
    <div>
      <ReactMarkdown
        source={input}
        renderers={elements}
      />
      <hr />
      <Markdown source={input} />
    </div>
  )
}
