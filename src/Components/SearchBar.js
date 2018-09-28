import React, { Component } from 'react'

class SearchBar extends Component {

  render() {
    return(
      <div style={{border:'10px solid black'}}>
        <input
          type="text"
          
          onChange={this.props.handleNameSearch}
        />
      </div>

    )}
  }
export default SearchBar;
