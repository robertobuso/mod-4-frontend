import React, { Component } from 'react'
import CurrentUserThumbnail from '../Components/CurrentUserThumbnail'
import NewMemberContainer from '../Components/NewMemberContainer'
import SearchBar from '../Components/SearchBar'
import SearchResultsContainer from '../Components/SearchResultsContainer'
import UserDetailsPage from '../Components/UserDetailsPage'

class MainPage extends Component {

  constructor(props) {
    super(props)
    this.state = {nameSearchQuery: '', filterQuery: {}, clickedUser: ''}
  }

  handleNameSearch = (event) => {
    this.setState({nameSearchQuery: event.target.value}, () => this.filterByType())
  }

  filterByType = () => {
    const searchArray = [...this.props.app.users]

    const firstKey = Object.keys(this.state.filterQuery)[0]

    const firstValue = this.state.filterQuery[firstKey]

    const nameQuery =  searchArray.filter(user => user.name.toLowerCase().includes(this.state.nameSearchQuery.toLowerCase()))

    const otherQueries = nameQuery.filter(user => user[firstKey] === firstValue)

    return Object.keys(this.state.filterQuery).length === 0 ? nameQuery : otherQueries
  }

  filterBy = (event, data) => {
    this.setState({filterQuery: data.id}, () => this.filterByType())
  }

  handleDoubleClick= (id) => {
    console.log(id)
    return (
      <UserDetailsPage
        user={this.state}
      />
    )
  }

  render() {

    return(

      <div>
        <SearchBar handleNameSearch={this.handleNameSearch}
          filterBy={this.filterBy}/>
        <CurrentUserThumbnail       user={this.props.app.currentUser}
          handleDoubleClick={this.handleDoubleClick}
        />
        <SearchResultsContainer
          users={this.filterByType()}
          handleDoubleClick={this.handleDoubleClick}/>
        <NewMemberContainer
          users={this.props.app.users}
          handleDoubleClick={this.handleDoubleClick}/>

      </div>
    )
  }
}
export default MainPage;
