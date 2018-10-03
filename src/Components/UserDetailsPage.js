import React, { Component } from 'react'
import { Header, Icon, Button, Card, Image, Grid } from 'semantic-ui-react'

class UserDetailsPage extends Component {

  render() {
    return (
      <div>
        <Header as='h2' icon inverted>
          <Icon name='beer' />
        </Header>
        <Card >
          <Card.Content>
            <Image src={this.props.user.img_url} />
            <br/>
            <Card.Header >
              {this.props.user.name}
            </Card.Header>
            <br/>
            <Card.Meta>
              I'm in {(this.props.user.mod).charAt(0).toUpperCase() + (this.props.user.mod).substr(1)}!!!
            </Card.Meta>
            <br/>
            <Card.Description>
              My Favorite Hobby is {(this.props.user.hobby).charAt(0).toUpperCase() + (this.props.user.hobby).substr(1)}.
            </Card.Description>
            <br/>
            <Card.Description>
              I love programming in  {(this.props.user.language).charAt(0).toUpperCase() + (this.props.user.language).substr(1)}.
            </Card.Description>
            <br/>
            <Card.Description>
              {this.props.user.description}
            </Card.Description>
          </Card.Content>
          <Grid centered columns={3}>
            <Grid.Column>
              <Button size ='tiny' icon='minus' onClick={this.props.hideCard}
              label="hide"/>
            </Grid.Column>
            <Grid.Column>
              {this.props.user === this.props.currentUser ?
                <Button size ='tiny' icon='minus' onClick={this.props.handleEdit}
                label="edit" floated='right'/>
              : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user === this.props.currentUser ?
                <Button size ='tiny' icon='minus' onClick={this.props.handleDelete}
                label="delete" floated='right'/>
              : null}
            </Grid.Column>
          </Grid>
        </Card>
      </div>
    )
    }
}

export default UserDetailsPage;
