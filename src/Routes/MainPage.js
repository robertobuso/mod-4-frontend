import React, { Component } from 'react'
import CurrentUserThumbnail from '../Components/CurrentUserThumbnail'
import NewMemberContainer from '../Components/NewMemberContainer'
import SearchBar from '../Components/SearchBar'
import SearchResultsContainer from '../Components/SearchResultsContainer'
import UserDetailsPage from '../Components/UserDetailsPage'
import { Popup, Dimmer, Header, Icon, Segment, Button, Card, Image } from 'semantic-ui-react'
import UserCard from '../Components/UserCard'
import EmailGroup from '../Components/EmailGroup'

class MainPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nameSearchQuery: '',
      filterQuery: {},
      clickedUser: {},
      active: false}
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

  handleDoubleClick = (id) => {
    this.setState({
      active: true,
      clickedUser: this.props.app.users.find(user => user.id === id)
    }, () => console.log(this.state.active))
  }

  hideCard = () => {
    this.setState({active: false})
  }

  render() {
    const { active } = this.state
    return(
      <div>
        <Dimmer.Dimmable as={Segment} dimmed={active}>
          <SearchBar handleNameSearch={this.handleNameSearch}
            filterBy={this.filterBy}/>
          <CurrentUserThumbnail       user={this.props.currentUser}
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
          <Dimmer active={active}>
            <Header as='h2' icon inverted>
              <Icon name='beer' />
            </Header>
            <Card >
              <Card.Content>
                <Image src={this.state.clickedUser.img_url} />
                <Card.Header>
                  {this.state.clickedUser.name}
                </Card.Header>
                <Card.Meta>
                  I'm in {this.state.clickedUser.mod}!!
                </Card.Meta>
                <Card.Meta>
                  My Favorite Hobby is {this.state.clickedUser.hobby}.
                </Card.Meta>
                <Card.Meta>
                  I love programming in  {this.state.clickedUser.language}.
                </Card.Meta>
                <Card.Description>
                  {this.state.clickedUser.description}
                </Card.Description>
              </Card.Content>
              <Button icon='minus' onClick={this.hideCard}
              label="hide"/>
          </Card>
              </Dimmer>
        </Dimmer.Dimmable>
      </div>
    )
  }
}
export default MainPage;
