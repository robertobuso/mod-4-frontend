import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const SearchByHobby = (props) => {

  const subjects = [
    {text: "Balloons", id: "balloons"},
    {text: "Chess", id: "chess"},
    {text: "Darts", id: "darts"},
    {text: "Games", id: "games"},
    {text: "Music", id: "music"},
    {text: "Unity", id: "unity"}
  ]

  return(
    <Dropdown
      text="Hobbies"
      icon="beer"
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

export default SearchByHobby
