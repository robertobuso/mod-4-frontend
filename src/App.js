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
      username: "",
      password:"",
      currentUser: []
    }
  }

  handleOnChange = (e) => {
    this.setState({username: e.target.value})
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

    const data = {
      username: this.state.username,
      password: this.state.password
    }

    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(r => r.ok ?
      r.json()
      .then( r => this.setState(
        {users: r
        }))
        .then(users => this.setState({ currentUser: this.state.users.find( user => user.username === this.state.username )
        }))
      .then(user => console.log(this.state))
      .then(user => this.props.history.push('/mainpage'))
      :
      r.json()
      .then(r => alert(r.errors))
    )
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
    .then(user => this.props.history.push('/mainpage'))
  }

  renderWelcomePage = (props) => {
    return (
      <WelcomePage {...props}
        users={this.state.users}
        handleOnChange={this.handleOnChange}
        handleOnSubmit={this.handleOnSubmit}
        handlePassword={this.handlePassword}/>
        )
  }

  renderSignUpPage = () => {
    return (
      <SignUpPage
        currentUser={this.state.username}
        handleFormSubmit={this.handleFormSubmit} />
    )
  }

  // renderPage = () => {
  //   if (this.state.currentUser === undefined ){
  //     return this.renderSignUpPage()
  //   } else return this.renderMainPage()
  // }

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
          <Route path="/signup" render={this.renderSignUpPage}/>
          <Route path="/mainpage" render={this.renderMainPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;
