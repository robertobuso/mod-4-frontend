import React, { Component } from 'react'

class UserThumbnail extends Component {

  render() {
    console.log("USER?", this.props.user)
    return(
      <div>
        <span>
          <img src={this.props.user.img_url} height="50" width="50" alt='current user'/>
          {this.props.user.name}
        </span>
        </div>

        )}
  }
export default UserThumbnail;
