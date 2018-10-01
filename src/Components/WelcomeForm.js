import React, { Component } from 'react'

class WelcomeForm extends Component {

  render () {

    return (
        <div>
          <form
            onSubmit={this.props.handleOnSubmit}
          >
            <label>
              Username:
              <input
                type="text" name="userName"
                onChange={this.props.handleOnChange} placeholder="username"
              ></input>
            </label>
          </form>

        </div>
    )
  }
}

export default WelcomeForm
