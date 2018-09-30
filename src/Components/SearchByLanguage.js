import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const SearchByLanguage = (props) => {

  const subjects = [
    {text: "Ruby", id: "ruby"},
    {text: "Javascript", id: "javascript"},
    {text: "Python", id: "python"},
    {text: "Logo", id: "logo"},
    {text: "Assembly", id: "assembly"},
    {text: "Spanish", id: "spanish"}
  ]

  return(
    <Dropdown
      placeholder='Languages'
      name="subject"
      text="Languages"
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

export default SearchByLanguage
