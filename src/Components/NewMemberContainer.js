import React, { Component } from 'react'
import UserThumbnail from './UserThumbnail'
import { Grid, Segment, Header, Icon } from 'semantic-ui-react'

class NewMemberContainer extends Component {

  render() {
    return(
      <Segment>
        <Header size='medium' textAlign='center'>
          The Two Most Recent Members
          Are
        </Header>
        <Grid centered columns={5} relaxed style={{border:'1px solid red'}}>
          {this.props.users.slice(-2).map(user =>
            <Grid.Column key={user.id} >
              <Segment basic>
                <UserThumbnail
                  user={user}
                  handleDoubleClick={this.props.handleDoubleClick}/>
                <br/>
              </Segment>
            </Grid.Column>
          )}
        </Grid>
      </Segment>
            )
          }

  }
export default NewMemberContainer;
