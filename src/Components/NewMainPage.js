render() {
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
        </Dimmer>
      </Dimmer.Dimmable>
    </div>
  )
