
import Enzyme from 'enzyme'
import Adaptor from 'enzyme-adapter-react-16'
import {JSDOM} from 'jsdom'

Enzyme.configure({
  adaptor: new Adaptor()
})

const jsdom = new JSDOM(`<!doctype html><html><body></body></html>`)

global.window = jsdom.window
global.document = jsdom.window.document
