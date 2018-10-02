import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

// class WelcomePage extends Component {
//   import React from 'react'

  const WelcomePage = (props) => (
    <div className='login-form'>
      {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://image.spreadshirtmedia.com/image-server/v1/compositions/102772023/views/1,width=650,height=650,appearanceId=2,version=1439181421/who-needs-facebook-when-you-can-have-beerbook-social-networking-done-the-right-way-nothing-beats-an-ice-cool-beer-between-friends.jpg' /> Log-in to your account
          </Header>
          <Form size='large' onSubmit={props.handleOnSubmit}>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='username' onChange={props.handleOnChange} />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={props.handlePassword}
              />

              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <NavLink to='/signup'>Sign Up</NavLink>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
export default WelcomePage



// export default LoginForm

// render () {
//   // this.props.history.push('/mainpage')
//
//   return (
//     <div>
//       <WelcomeForm users={this.props.render} handleOnSubmit={this.props.handleOnSubmit}
//         handleOnChange={this.props.handleOnChange}
//       />
//     </div>
//   )
// }
// }
