import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react'

const UserCard = (props) => (
    <Card>
      <Image src={props.currentUser.img_url}>

      </Image>
      <br/>
      <Card.Content extra align="center">
        <Card.Header> {props.currentUser.name}</Card.Header>
      </Card.Content>
      <Card.Content extra align="center">
        <a>
          Favorite Language: {props.currentUser.language && (props.currentUser.language).charAt(0).toUpperCase() + (props.currentUser.language).substr(1)}
        </a>
      </Card.Content>
      <br/>
      <Card.Content extra align="center">
        <a>
          Hobby: {props.currentUser.hobby && (props.currentUser.hobby).charAt(0).toUpperCase() + (props.currentUser.hobby).substr(1)}
        </a>
      </Card.Content>
      <br/>
      <Card.Content extra align="center">
        <Card.Description>{props.currentUser.description && props.currentUser.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {props.currentUser.mod && (props.currentUser.mod).charAt(0).toUpperCase() + (props.currentUser.mod).substr(1)}
        </a>
        </Card.Content>
    </Card>
)



export default UserCard
