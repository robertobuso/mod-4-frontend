import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const SearchByLanguage = (props) => {

  const subjects = [
    {text: "Ruby", id: {language: "ruby"}},
    {text: "Javascript", id: {language: "javascript"}},
    {text: "Python", id: {language: "python"}},
    {text: "Logo", id: {language: "logo"}},
    {text: "Assembly", id: {language: "assembly"}},
    {text: "Spanish", id: {language: "spanish"}}
  ]

  return(
    <Dropdown
      placeholder="Languages"
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
            key={item.id['language']}
          />
        )}
      </Dropdown.Menu>
    </Dropdown>
      )
}

export default SearchByLanguage
