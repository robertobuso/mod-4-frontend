import React, { Component } from 'react'
import CurrentUserThumbnail from '../Components/CurrentUserThumbnail'
import NewMemberContainer from '../Components/NewMemberContainer'
import SearchBar from '../Components/SearchBar'
import SearchResultsContainer from '../Components/SearchResultsContainer'
import UserDetailsPage from '../Components/UserDetailsPage'

class MainPage extends Component {

  state = {nameSearchQuery: '', clickedUser: ''}

  handleNameSearch = (event) => {
    this.setState({nameSearchQuery: event.target.value}, () => this.filterByName())
  }

  filterByName = () => {
    return this.props.app.users.filter(user => user.name.toLowerCase().includes(this.state.nameSearchQuery.toLowerCase()))
  }

  handleDoubleClick= (id) => {
    console.log(id)
    return (
      <UserDetailsPage
        user={this.state}
      />
    )
  }

  filterBy = (event, data) => {
 console.log(data.id)
  }

  render() {
    return(
      <div>
        <SearchBar handleNameSearch={this.handleNameSearch}
          filterBy={this.filterBy}/>
        <CurrentUserThumbnail       user={this.props.app.currentUser}
          handleDoubleClick={this.handleDoubleClick}
        />
        <NewMemberContainer
          users={this.props.app.users}
          handleDoubleClick={this.handleDoubleClick}/>
        <SearchResultsContainer
          users={this.filterByName()}
          handleDoubleClick={this.handleDoubleClick}/>
      </div>
    )
  }
}
export default MainPage;
