import React, { Component } from 'react'
import UserThumbnail from './UserThumbnail'
import { Grid, Segment, Header } from 'semantic-ui-react'

class SearchResultsContainer extends Component {

  render() {
    const sortedArray = this.props.users.sort((a, b) => a.name.localeCompare(b.name))

    return(
      <Segment>
        <Header size='medium' textAlign='center'>
          {this.props.users.length > 0 ? "These Users Match Your Query" : "No Users Match Your Query"}
        </Header>
        <Grid centered columns={5} relaxed>
          {this.props.users ?
            sortedArray.map(user => {
            return <Grid.Column key={user.id}>
              <Segment basic>
                <UserThumbnail
                  user={user}
                  key={user.id}
                  handleDoubleClick={this.props.handleDoubleClick}/>
              </Segment>
            </Grid.Column>
          })
          : null
          }
        </Grid>
        </Segment>

    )}
  }
export default SearchResultsContainer;
