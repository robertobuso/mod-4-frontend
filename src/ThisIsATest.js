import React, { Component } from 'react'

class ThisIsATest extends Component {

  render() {
    return(
      <div>
        {this.props.users.map(user =>
          <span key={user.id}>
            <p>{user.name}</p>
            <p>{user.hobby}</p>
          </span>)}
          </div>

    )}
  }
export default ThisIsATest;
