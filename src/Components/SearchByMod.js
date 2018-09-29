import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const SearchByMod = (props) => {
  return(
    <Dropdown text='Mods' icon='smile outline' floating labeled button className='icon'>
      <Dropdown.Menu>
        <Dropdown.Header content='Filter by Mod' />
        <Dropdown.Item text="Mod 1" />
        <Dropdown.Item text="Mod 2" />
        <Dropdown.Item text="Mod 3" />
        <Dropdown.Item text="Mod 4" />
        <Dropdown.Item text="Mod 5" />
        <Dropdown.Item text="Staff" />
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SearchByMod
