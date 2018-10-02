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
        <Card.Content extra align="center">
        <Card.Header> {props.currentUser.name}</Card.Header>
            <a>
            Hobby: {(props.currentUser.hobby).charAt(0).toUpperCase() + (props.currentUser.hobby).substr(1)}
            </a>
        <br/>
        <Card.Content extra align="center">
            <a>
            Favorite Language: {(props.currentUser.language).charAt(0).toUpperCase() + (props.currentUser.language).substr(1)}
            </a>
        </Card.Content>
        <Card.Meta>
            Mod: {(props.currentUser.mod).charAt(0).toUpperCase() + (props.currentUser.mod).substr(1)}
        </Card.Meta>
        <Card.Description>{props.currentUser.description}</Card.Description>
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



// const UserCard = (props) => (
//   <Card centered>
//     <Image
//       src='https://i2-prod.dailyrecord.co.uk/incoming/article6740022.ece/ALTERNATES/s615/JS75502096.jpg'
//     size='large'  />
//     <Card.Content>
//       <Card.Header> {props.currentUser.name}</Card.Header>

//       <Card.Content extra align="center">
//         <a>
//           Mod: {(props.currentUser.mod).charAt(0).toUpperCase() + (props.currentUser.mod).substr(1)}
//         </a>
//       </Card.Content>
//       <br/>
//       <Card.Content extra align="center">
//         <a>
//           Favorite Language: {(props.currentUser.language).charAt(0).toUpperCase() + (props.currentUser.language).substr(1)}
//         </a>
//       </Card.Content>
//       <br/>
//       <Card.Content extra align="center">

//         <a>
//           Hobby: {(props.currentUser.hobby).charAt(0).toUpperCase() + (props.currentUser.hobby).substr(1)}
//         </a>

//       </Card.Content>
//       <br/>
//       <Card.Description>
//         {props.currentUser.description}
//       </Card.Description>
//     </Card.Content>
//   </Card>
// )

// export default UserCard
