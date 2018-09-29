import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const SearchByLanguage = (props) => {
  return(
    <Dropdown text='Languages' icon='code' floating labeled button className='icon' onChange={() => props.filterBy('language')}>
      <Dropdown.Menu>
        <Dropdown.Header content='Filter by Language' />
        <Dropdown.Item text="Ruby" />
        <Dropdown.Item text="Javascript" />
        <Dropdown.Item text="Python" />
        <Dropdown.Item text="Logo" />
        <Dropdown.Item text="Assembly" />
        <Dropdown.Item text="Spanish" />
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SearchByLanguage
