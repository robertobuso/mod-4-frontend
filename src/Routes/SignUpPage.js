import React, {Component} from 'react'
import SignUpForm from '../Components/SignUpForm';
import UserCard  from '../Components/UserCard';
import { Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';


class SignUpPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: "",
      mod: "",
      language: "",
      hobby: "",
      description: "",
      img_url: "",
      username: ""
    }
  }

  componentDidMount() {
    axios.get('https://res.cloudinary.com/dav4yqqvv/image/upload/accesslabs.json')
      .then(res => this.setState({img_url: res.data.url }))
  }

  handleUploadWidget = (e) => {
    e.preventDefault()
    let _this = this;
    window.cloudinary.openUploadWidget({ cloud_name: 'dav4yqqvv', upload_preset: 'ggwk24kr', tags:['accesslabs']},
        function(error, result) {
            console.log(result);
            _this.setState({img_url: result[0].url})
        });
}

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    this.props.setCurrentUser(this.state)
  }

  // handleEditOnChange = (e) => {
  //   console.log(e.target.value)
  //   this.setState({e.target.name: e.target.value})
  // }

  handleEditFormSubmit = (e, formState) => {

  }

  handleDelete = (e, formState) => {

  }

  render() {

    return (
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <SignUpForm
              currentUser={this.state}
              currentEditUser={this.props.currentUser}
              handleOnChange={this.handleOnChange}
              handleFormSubmit={this.props.handleFormSubmit}
              handleEditOnChange={this.props.handleEditOnChange}
              handleEditFormSubmit={this.props.handleEditFormSubmit}
              formState={this.state}
              handleUploadWidget={this.handleUploadWidget}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <UserCard img_url={this.state.img_url} currentUser={this.props.currentUser}
              name={this.state.myName} mod={this.state.mod}/>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }

}

export default SignUpPage;
