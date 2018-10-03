import React, { Component } from 'react'
import { Header, Icon, Button, Card, Image } from 'semantic-ui-react'

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
            <Card.Header>
              {this.props.user.name}
            </Card.Header>
            <br/>
            <Card.Meta>
              I'm in {(this.props.user.mod).charAt(0).toUpperCase() + (this.props.user.mod).substr(1)}!!!
            </Card.Meta>
            <br/>
            <Card.Meta>
              My Favorite Hobby is {(this.props.user.hobby).charAt(0).toUpperCase() + (this.props.user.hobby).substr(1)}.
            </Card.Meta>
            <br/>
            <Card.Meta>
              I love programming in  {(this.props.user.language).charAt(0).toUpperCase() + (this.props.user.language).substr(1)}.
            </Card.Meta>
            <br/>
            <Card.Description>
              {this.props.user.description}
            </Card.Description>
          </Card.Content>
          <Button icon='minus' onClick={this.props.hideCard}
          label="hide"/>
        </Card>
      </div>
    )
    }
}

export default UserDetailsPage;
