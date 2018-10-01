import React, { Component } from 'react'
import { Grid, Segment, Header, Image } from 'semantic-ui-react'

class CurrentUserThumbnail extends Component {

  render() {
    return(
      <Segment>
        <Header size='medium' textAlign='left'>
          Current User
        </Header>
        <Grid centered columns={1} relaxed>
          <Grid.Column floated='left' width={5} onDoubleClick={()=>
            this.props.handleDoubleClick(this.props.user.id)}>
            <Image src={this.props.user.img_url} height="50" width="50" alt='current user' circular/>
            {this.props.user.name}
          </Grid.Column>
        </Grid>
      </Segment>
        )}
      }

export default CurrentUserThumbnail;
