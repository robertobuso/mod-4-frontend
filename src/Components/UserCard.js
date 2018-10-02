import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { CloudinaryContext } from 'cloudinary-react';

const UserCard = (props) => (
    <Card>
        <Image src={props.image}>
            {/* <CloudinaryContext cloudName="dav4yqqvv">
                {props.image}
            </CloudinaryContext> */}
        </Image>
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