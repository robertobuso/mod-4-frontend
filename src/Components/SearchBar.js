import React, { Component } from 'react'
import { Grid, Segment, Input, Sticky, Dropdown } from 'semantic-ui-react'
import SearchByName from '../Components/SearchByName'
import SearchByHobby from '../Components/SearchByHobby'
import SearchByMod from '../Components/SearchByMod'
import SearchByLanguage from '../Components/SearchByLanguage'

class SearchBar extends Component {
  render() {
    return(
      <Segment>
        <Sticky>
          <Grid centered columns={5} relaxed>
            <Grid.Column>
              <SearchByHobby />
            </Grid.Column>
            <Grid.Column>
              <SearchByMod />
            </Grid.Column>
            <Grid.Column>
              <SearchByLanguage filterBy={this.props.filterBy}/>
            </Grid.Column>
            <Grid.Column>
              <SearchByName
                nameSearchQuery={this.props.nameSearchQuery}
                handleNameSearch={this.props.handleNameSearch}
              />
            </Grid.Column>
          </Grid>

        </Sticky>
      </Segment>
        )}
  }
export default SearchBar;
