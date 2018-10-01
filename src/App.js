import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomePage from './Routes/WelcomePage'
import MainPage from './Routes/MainPage'
import SignUpPage from './Routes/SignUpPage'

class App extends Component {

  constructor() {
    super()
    this.state = {
      users: [],
      usernameValue: "",
      currentUser: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
    .then(r => r.json())
    .then(users => this.setState({users: users, currentUser: users[(users.length - 2)]}))
  }

  handleOnChange = (e) => {
    this.setState({usernameValue: e.target.value})
  }

  renderWelcomePage = () => {
    return (
      <WelcomePage users={this.state.users} handleOnChange={this.handleOnChange} />
        )
  }

  renderSignUpPage = () => {
    return (
      <SignUpPage currentUser={this.state.usernameValue} />
    )
  }

  findUsernameValue = () => {
    return this.state.users.find( user => user.username === this.state.usernameValue )
  }

  renderPage = () => {
    if (this.findUsernameValue === undefined){
      return this.renderSignUpPage
    }
  }

  renderMainPage = () => {
    return (
      <MainPage
        app={this.state}
      />
    )
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/welcome" render={this.renderWelcomePage}/>
            <Route path="/mainpage" render={this.renderMainPage}/>
            <Route path="/signup" render={this.renderSignUpPage}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
