import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = (props) => (
    <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
        <Card.Content>
        <Card.Header placeholder="name">{props.name}</Card.Header>
        <Card.Meta>Joined in 2016</Card.Meta>
        <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='user' />
                {props.mod}
        </a>
        </Card.Content>
    </Card>
)



export default UserCard