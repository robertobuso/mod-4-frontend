import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './Routes/MainPage'

class App extends Component {

  constructor() {
    super()
    this.state = {
      users: [],
      currentUser: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
    .then(r => r.json())
    .then(users => this.setState({users: users, currentUser: users[(users.length - 2)]}))
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
                <Route path="/mainpage" render={this.renderMainPage}/>
              </Router>
            </div>
    );
  }
}

export default App;
