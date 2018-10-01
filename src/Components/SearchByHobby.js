import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const SearchByHobby = (props) => {

  const subjects = [
    {text: "Balloons", id: {hobby: "ballons"}},
    {text: "Chess", id: {hobby: "chess"}},
    {text: "Darts", id: {hobby: "darts"}},
    {text: "Games", id: {hobby: "games"}},
    {text: "Music", id: {hobby: "music"}},
    {text: "Unity", id: {hobby: "unity"}}
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
            key={item.id["hobby"]}
          />
        )}
      </Dropdown.Menu>
    </Dropdown>
      )
}

export default SearchByHobby
