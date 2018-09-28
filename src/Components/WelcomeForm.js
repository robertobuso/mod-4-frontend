import React, { Component } from 'react'

class WelcomeForm extends Component {

    render () {
        return (
            <div>
                <form>
                    <label>
                        Username:
                    <input onChange={this.props.handleOnChange} type="text" name="usernameValue" placeholder="username" ></input>
                    </label>
                </form>
            </div>
        )
    }
}

export default WelcomeForm