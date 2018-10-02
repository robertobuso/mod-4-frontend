import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
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
    .then(res => res.json())
    .then(users => this.setState({users: users}))
  }

  handleOnChange = (e) => {
    this.setState({usernameValue: e.target.value}, () => console.log(this.state.usernameValue))
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

    const currentUser =  this.state.users.find( user => user.username === this.state.usernameValue )

    if (currentUser === undefined) {

      this.props.history.push('/signup')
    } else {this.setState({currentUser: currentUser}, () => this.props.history.push('/mainpage'))}
  }

  handleFormSubmit = (e, formState) => {
    e.preventDefault()

    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
    .then(r => r.json())
    .then(user => this.setState({currentUser: user}))
    .then(user => this.props.history.push('/signup'))
  }

  renderWelcomePage = (props) => {
    return (
      <WelcomePage {...props}
        users={this.state.users}
        handleOnChange={this.handleOnChange}
        handleOnSubmit={this.handleOnSubmit}/>
        )
  }

  renderSignUpPage = () => {
    return (
      <SignUpPage
        currentUser={this.state.usernameValue}
        handleFormSubmit={this.handleFormSubmit} />
    )
  }

  renderPage = () => {
    if (this.state.currentUser.length < 1 ){
      return this.renderSignUpPage()
    } else return this.renderMainPage()
  }

  renderMainPage = () => {
    return (
      <MainPage
        app={this.state}
        currentUser={this.state.currentUser}
      />
    )
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/welcome" render={this.renderWelcomePage}
          />
          <Route path="/signup" render={this.renderPage}/>
          <Route path="/mainpage" render={this.renderMainPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;
