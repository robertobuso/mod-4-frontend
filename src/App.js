import React, { Component } from 'react';
import './App.css';
import ThisIsATest from './ThisIsATest'

class App extends Component {

  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
    .then(r => r.json())
    .then(users => this.setState({users}))
  }
  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <ThisIsATest users={this.state.users}/>
      </div>
    );
  }
}

export default App;
