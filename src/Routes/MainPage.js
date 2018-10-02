import React, { Component } from 'react'
import CurrentUserThumbnail from '../Components/CurrentUserThumbnail'
import NewMemberContainer from '../Components/NewMemberContainer'
import SearchBar from '../Components/SearchBar'
import SearchResultsContainer from '../Components/SearchResultsContainer'
import UserDetailsPage from '../Components/UserDetailsPage'
import { Popup } from 'semantic-ui-react'
import UserCard from '../Components/UserCard'
import EmailGroup from '../Components/EmailGroup'

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
    console.log("This thumbnail belongs to id number ", id)
    return "Hi"
  }

  render() {
    return(
      <div>
        <SearchBar handleNameSearch={this.handleNameSearch}
          filterBy={this.filterBy}/>
        <CurrentUserThumbnail       user={this.props.app.currentUser}
          handleDoubleClick={this.handleDoubleClick}
        />
        <EmailGroup
          users={this.filterByType()}/>
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
