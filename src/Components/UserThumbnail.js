import React, { Component } from 'react'
import { Button, Popup } from 'semantic-ui-react'

class UserThumbnail extends Component {

  render() {
    return(
      <div>
        <Popup
          trigger={<Button onDoubleClick={() => this.props.handleDoubleClick(this.props.user.id)}>
            <img src={this.props.user.img_url} height="50" width="50" alt='current user'/>
            {this.props.user.name}
          </Button>}
          content='This would be the Users Card with User Details'
          style={{borderRadius: 0,
            opacity: 0.7,
          padding: '2em'}}
          inverted
        />

        </div>

        )}
  }
export default UserThumbnail;
