import React, { Component } from 'react'
import { Input, Sticky, Dropdown } from 'semantic-ui-react'
import SearchByName from '../Components/SearchByName'
import SearchByHobby from '../Components/SearchByHobby'

class SearchBar extends Component {
  render() {
    return(
      <Sticky>
        <div style={{border:'10px solid black'}}>
          <SearchByName
            nameSearchQuery={this.props.nameSearchQuery}
            handleNameSearch={this.props.handleNameSearch}
          />
          <SearchByHobby />
        </div>
      </Sticky>
    )}
  }
export default SearchBar;
