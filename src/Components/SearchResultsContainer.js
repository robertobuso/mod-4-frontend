import React, { Component } from 'react'
import UserThumbnail from './UserThumbnail'
import { Grid, Segment, Header } from 'semantic-ui-react'

class SearchResultsContainer extends Component {

  sendEmail = () => {
    // var templateParams = {
    //     name: 'Roberto',
    //     notes: 'Test Email!'
    // };
    //
    // emailjs.send('gmail', 'template_J1Y8fIlv', templateParams)
    //     .then(function(response) {
    //        console.log('SUCCESS!', response.status, response.text);
    //     }, function(error) {
    //        console.log('FAILED...', error);
    //     });

    var template_params = {
     "to_email": "jhuscript@gmail.com",
     "reply_to": "robertobuso@gmail.com",
     "to_name": "Kevin",
     "from_name": "Roberto",
     "message_html": "Free Martinis!"
   }

    var service_id = "gmail";
    var template_id = "template_J1Y8fIlv";

    emailjs.send(service_id,template_id,template_params);

    }

  render() {
    return(
      <Segment>
        <Header size='medium' textAlign='center'>
          These Users Match Your Query
        </Header>
        <Grid centered columns={5} relaxed>
          {this.props.users ? this.props.users.map(user => {

            return <Grid.Column key={user.id}>
              <Segment basic>
                <UserThumbnail
                  user={user}
                  key={user.id}
                  handleDoubleClick={this.props.handleDoubleClick}/>
              </Segment>
            </Grid.Column>
          })
          : null
          }
        </Grid>
        </Segment>

    )}
  }
export default SearchResultsContainer;
