import React, { Component } from 'react'
import UserThumbnail from './UserThumbnail'

class SearchResultsContainer extends Component {

  render() {

    return(
      <div>
        <br/>
        These are Your RESULTS!!!
        <br/>
        {this.props.users ? this.props.users.map(user => {
          return <UserThumbnail user={user}/>
        }) : null
        }

      </div>

    )}
  }
export default SearchResultsContainer;
