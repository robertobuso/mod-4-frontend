import React, { Component } from 'react'
import WelcomeForm from '../Components/WelcomeForm'

class WelcomePage extends Component {
  render () {
    // this.props.history.push('/mainpage')

    return (
      <div>
        <WelcomeForm users={this.props.render} handleOnSubmit={this.props.handleOnSubmit}
          handleOnChange={this.props.handleOnChange}
        />
      </div>
    )
  }
}

export default WelcomePage
