import React, { Component } from 'react'
import { Sticky } from 'semantic-ui-react'
class SearchBar extends Component {

  render() {
    return(
      <Sticky>
        <div style={{border:'10px solid black'}}>
          <input
            type="text"
            value={this.props.nameSearchQuery}
            onChange={this.props.handleNameSearch}
          />
        </div>
      </Sticky>

    )}
  }
export default SearchBar;
