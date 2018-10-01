import React, {Component} from 'react'
import SignUpForm from '../Components/SignUpForm';
import UserCard  from '../Components/UserCard'
import { Grid, Segment } from 'semantic-ui-react'


class SignUpPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      myName: "",
      mod: "",
      favoriteLanguage: "",
      hobbies: [],
      description: ""
    }
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    // console.log(e.target.value);
  }



  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <SignUpForm currentUser={this.props.currentUser} handleOnChange={this.handleOnChange}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <UserCard currentUser={this.props.currentUser} name={this.state.myName}/>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }

}

export default SignUpPage;