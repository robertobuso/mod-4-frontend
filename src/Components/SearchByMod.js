import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const SearchByMod = (props) => {

  const subjects = [
    {text: "Mod 1", id: "mod_1"},
    {text: "Mod 2", id: "mod_2"},
    {text: "Mod 3", id: "mod_3"},
    {text: "Mod 4", id: "mod_4"},
    {text: "Mod 5", id: "mod_5"},
    {text: "Staff", id: "staff"}
  ]

  return(
    <Dropdown
      text="Mods"
      icon="smile outline"
      floating
      labeled
      button
      className='icon'
    >
      <Dropdown.Menu>
        {subjects.map(item =>
          <Dropdown.Item text={item.text}
            id={item.id}
            onClick={props.filterBy}
            key={item.id}
          />
        )}
      </Dropdown.Menu>
    </Dropdown>
      )
}

export default SearchByMod
