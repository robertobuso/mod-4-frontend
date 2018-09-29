import React, { Component } from 'react'
import UserThumbnail from './UserThumbnail'
import { Grid } from 'semantic-ui-react'

class NewMemberContainer extends Component {

  render() {
    return(
      <Grid.Column style={{border:'1px solid red'}}>
        {/* <Menu
          items=
          {this.props.users.slice(-2).map(user =>
            { key: {user.id}, name: {user.name}, content: {<UserThumbnail user={user} />}}) }
          pointing
          secondary
        /> */}

        The Two Most Recent Members Are:
              {this.props.users.slice(-2).map(user =>
                <span key={user.id}>
                  <UserThumbnail user={user} />
          </span>)}
      </Grid.Column>

    )}
  }
export default NewMemberContainer;
