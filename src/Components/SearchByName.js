import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchByName = (props) => {
  return(
    <Input
      type="text"
      value={props.nameSearchQuery}
      onChange={props.handleNameSearch}
      icon='users' iconPosition='left' placeholder='Search users...'
    />
  )
}

export default SearchByName
