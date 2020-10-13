
import PropTypes from 'prop-types'
// import cx from 'classnames'
import oc from 'open-color'

// import theme from './theme'
import {noop} from './utils'
import Scrollable from './scrollable'
import Input from './form/input'

const SearchWrapper = ({children}) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: flex;
        padding: 6px;
        background: ${oc.gray[8]};
      }
    `}</style>
  </div>
)

const FilterList = ({
  data,
  filters,
  ItemComponent,
  searchTerm,
  onChange,
  showSearch,
  searchPlaceholder
}) => (
  <div className='root'>
    <div className='header'>
      {showSearch && <Input
        Container={SearchWrapper}
        value={searchTerm}
        onChange={onChange}
        placeholder={searchPlaceholder}
        classes='search'
      />}
    </div>
    <div className='scrollZone'>
      <Scrollable
        classes='scroll'
        vertical
      >
        <ul>
          {data.map(d =>
            <ItemComponent
              key={d.id}
              {...d}
            />)
          }
        </ul>
      </Scrollable>
    </div>
    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      .root {
        display: flex;
        flex-direction: column;
        /*height: 100%;*/
      }
      .scrollZone {
        display: flex;
        flex-direction: column;
      }
      div :global(.scroll) {
        flex: 1;
      }
      div :global(.search) {
        flex: 1;
      }
    `}</style>
  </div>
)

FilterList.defaultProps = {
  onChange: noop,
  searchPlaceholder: null,
  showSearch: true
}
FilterList.propTypes = {
  onChange: PropTypes.func,
  searchPlacholder: PropTypes.string,
  showSearch: PropTypes.bool
}

export default FilterList
