
import tape from 'tape'

import {basepath} from 'utils/path'

tape('[path] basepath', t => {
  t.plan(3)

  t.equal(basepath('/foo'), 'foo', 'it should strip a preceeding slash')
  t.equal(basepath('/foo/bar'), 'foo', 'it should return the first path segment')
  t.equal(basepath('foo/bar'), 'foo', 'it should ignore an omitted preceeding slash')
})
