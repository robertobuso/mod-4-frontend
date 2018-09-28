import React, { Component } from 'react'
import CurrentUserThumbnail from '../Components/CurrentUserThumbnail'
import NewMemberContainer from '../Components/NewMemberContainer'
import SearchBar from '../Components/SearchBar'
import SearchResultsContainer from '../Components/SearchResultsContainer'

class MainPage extends Component {

  state = {nameSearchQuery: ''}

  handleNameSearch = (event) => {
    this.setState({nameSearchQuery: event.target.value}, () => this.filterByName())
  }

  filterByName = () => {
    return this.props.app.users.filter(user => user.name.toLowerCase().includes(this.state.nameSearchQuery.toLowerCase()))
  }

  render() {

    return(
      <div>
        <SearchBar handleNameSearch={this.handleNameSearch}/>
        <br/>
        <CurrentUserThumbnail user={this.props.app.currentUser}
        />
        <br/>
        <NewMemberContainer users={this.props.app.users}/>
        <SearchResultsContainer users={this.filterByName()}/>
      </div>
    )
  }
}
export default MainPage;
