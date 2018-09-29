import React, { Component } from 'react'
import WelcomeForm from '../Components/WelcomeForm'

//What is this.props.render?
class WelcomePage extends Component {
  render () {
    return (
      <div>
        <WelcomeForm users={this.props.render} handleOnChange={this.props.handleOnChange}/>
      </div>
    )
  }
}

export default WelcomePage
