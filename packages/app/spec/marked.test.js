
import tape from 'tape'
import {shallow, configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Marked from '../src/components/marked.jsx'

configure({
  adapter: new Adapter()
})

tape('Should allow custom renderers to be applied', t => {
  t.plan(1)

  const source = `# Heading`
  const renderer = props => {}
  const renderers = {
    htmlblock: renderer
  }
  const dom = shallow(
    <Marked source={source} renderers={renderers} />
  )

  t.equal(dom.props().renderers.htmlblock, renderer,
    'custom element renderer is applied')
})

tape('Should output the markdown as react components', t => {
  t.plan(2)
  const source = `# Heading\nparagraph`
  const renderer = props => {}
  const renderers = {
    htmlblock: renderer
  }
  const dom = mount(
    <Marked source={source} renderers={renderers} />
  )

  t.equal(
    dom.find('H1').text(),
    'Heading',
    'components/H1 node is rendered'
  )
  t.equal(
    dom.find('P').text(),
    'paragraph',
    'components/P node is rendered'
  )
})

tape('Should output the markdown as react components', t => {
  t.plan(3)
  const customText = 'foobarbaz'
  const custom = `<div><Custom /></div>`
  const source = `# Heading\nparagraph\n${custom}`
  const renderer = ({isBlock, literal}) => {
    t.ok(isBlock, 'custom component must be a block')
    t.equal(literal, custom, 'custom literal is correct')
    return <h3>{customText}</h3>
  }
  const renderers = {
    htmlblock: renderer
  }
  const dom = mount(<Marked source={source} renderers={renderers} />)

  t.equal(
    dom.find('h3').text(),
    customText,
    'Custom function is rendered'
  )
})
