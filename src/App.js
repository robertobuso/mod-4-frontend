import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomePage from './Routes/WelcomePage'
import SignUpForm from './Routes/SignUpForm'

class App extends Component {

  constructor() {
    super()
    this.state = {
      users: [],
      usernameValue: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
    .then(r => r.json())
    .then(users => this.setState({users}))
  }

  
  handleOnChange = (e) => {
    this.setState({usernameValue: e.target.value})
  } 
  
  renderWelcomePage = () => {
    return (
      <WelcomePage users={this.state.users} handleOnChange={this.handleOnChange} />
        )
  }

  renderSignUpForm = () => {
    return (
      <SignUpForm currentUser={this.state.usernameValue} />
    )
  }

  findUsernameValue = () => {
    return this.state.users.find( user => user.username === this.state.usernameValue )
  }

  renderPage = () => {
    if (this.findUsernameValue === undefined){
      return this.renderSignUpForm
    }
  }


  render() {
    console.log(this.state.usernameValue)
    return (
            <div className="App">
              <Router>
                <Switch>
                <Route path="/welcome" render={this.renderWelcomePage}/>
                <Route path="/signup" render={this.renderPage}/>
                </Switch>
              </Router>
            </div>


    );
  }
}

export default App;