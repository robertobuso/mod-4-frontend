import React, { Component } from 'react'

class CurrentUserThumbnail extends Component {

  render() {
    return(
      <div onDoubleClick={()=>
        this.props.handleDoubleClick(this.props.user.id)}>
        The Current User is:
        <br/>
        <br/>
        <img src={this.props.user.img_url} height="50" width="50" alt='current user'/>
        {this.props.user.name}
      </div>

    )}
  }
export default CurrentUserThumbnail;
