import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const SearchByHobby = (props) => {
  return(
    <Dropdown text='Hobbies' icon='beer' floating labeled button className='icon'>
      <Dropdown.Menu>
        <Dropdown.Header content='Filter by Hobby' />
        <Dropdown.Item text="Balloons" />
        <Dropdown.Item text="Chess" />
        <Dropdown.Item text="Darts" />
        <Dropdown.Item text="Games" />
        <Dropdown.Item text="Music" />
        <Dropdown.Item text="Unity" />
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SearchByHobby
