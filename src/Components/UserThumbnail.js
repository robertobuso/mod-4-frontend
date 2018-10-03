import React, { Component } from 'react'
import { Button, Popup, Image } from 'semantic-ui-react'

class UserThumbnail extends Component {

  render() {
    return(
      <div>
        <Popup
          trigger={<Button text-align='center' onDoubleClick={() => this.props.handleDoubleClick(this.props.user.id)}>
            <Image src={this.props.user.img_url} height="50" width="50" alt='current user' circular/>
            {this.props.user.name}
          </Button>}
          content='Click Me!'
          style={{borderRadius: 0,
            opacity: 0.7,
          padding: '2em'}}
          inverted
        />

        </div>

        )}
  }
export default UserThumbnail;
