import React, {Component} from 'react'
import SignUpForm from '../Components/SignUpForm';
import UserCard  from '../Components/UserCard'
import { Grid, Segment } from 'semantic-ui-react'


class SignUpPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: "",
      mod: "",
      language: "",
      hobby: "",
      description: ""
    }
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value}, ()=>console.log(this.state.name))
  }

  // handleRadioOnChange = (e) => {
  //   debugger
  //   this.setState({[e.target.parentElement.parentElement.parentElement.__reactEventHandlers$2cr5h150osx.name]: e.target.name}, ()=>console.log(this.state.name))
  // }

  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <SignUpForm currentUser={this.props.currentUser} handleOnChange={this.handleOnChange}  handleFormSubmit={this.props.handleFormSubmit}
              formState={this.state}
              handleRadioOnChange={this.handleRadioOnChange}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <UserCard currentUser={this.props.currentUser} name={this.state.myName} mod={this.state.mod}/>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }

}

export default SignUpPage;
