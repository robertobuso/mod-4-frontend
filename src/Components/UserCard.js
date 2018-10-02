import React from 'react';
import { Card, Image } from 'semantic-ui-react'



const UserCard = (props) => (
  <Card centered>
    <Image
      src='https://i2-prod.dailyrecord.co.uk/incoming/article6740022.ece/ALTERNATES/s615/JS75502096.jpg'
    size='large'  />
    <Card.Content>
      <Card.Header> {props.currentUser.name}</Card.Header>

      <Card.Content extra align="center">
        <a>
          Mod: {(props.currentUser.mod).charAt(0).toUpperCase() + (props.currentUser.mod).substr(1)}
        </a>
      </Card.Content>
      <br/>
      <Card.Content extra align="center">
        <a>
          Favorite Language: {(props.currentUser.language).charAt(0).toUpperCase() + (props.currentUser.language).substr(1)}
        </a>
      </Card.Content>
      <br/>
      <Card.Content extra align="center">

        <a>
          Hobby: {(props.currentUser.hobby).charAt(0).toUpperCase() + (props.currentUser.hobby).substr(1)}
        </a>

      </Card.Content>
      <br/>
      <Card.Description>
        {props.currentUser.description}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default UserCard
