import React from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react'


const SignUpForm = (props) => (
    <Form onSubmit={(event) => props.handleFormSubmit(event, props.formState)}>
      <Form.Group widths='equal'>
        <Form.Field name="name" label='Name' control='input' onChange={props.handleOnChange} value={props.name}/>

        <Form.Field required name='username' label='Username' control='input' placeholder={props.currentUser} onChange={props.handleOnChange}/>

        <Form.Field required name='password' label='Password' control='input' type='password' placeholder={props.currentUser} onChange={props.handleOnChange}/>
      </Form.Group>
      <Form.Group grouped>
        <Form.Field required name="mod" label='Mod' control='select' widths='equal' onChange={props.handleOnChange}>
          <option value="" >Choose your Mod</option>
          <option value='mod_1'>Mod 1</option>
          <option value='mod_2'>Mod 2</option>
          <option value='mod_3'>Mod 3</option>
          <option value='mod_4'>Mod 4</option>
          <option value='mod_5'>Mod 5</option>
        </Form.Field>
      </Form.Group>
      <Form.Group name="language" onChange={props.handleOnChange} grouped >
        <label>Favorite Coding Language</label>
        <Form.Field value='javascript' name='language' label='JavaScript' control='input' type='radio' />
        <Form.Field value='ruby' name='language' label='Ruby' control='input' type='radio'/>
        <Form.Field value='rails' name='language' label='Rails' control='input' type='radio' />
        <Form.Field value='python' name='language' label='Python' control='input' type='radio'/>
        <Form.Field value='assembly' name='language' label='Assembly' control='input' type='radio'/>
      </Form.Group>
      <Form.Group name="hobby" onChange={props.handleOnChange} grouped>
        <label>Choose your favorite hobby</label>
        <Form.Field name="hobby" value='balloons' label='Balloons' control='input' type='radio' />
        <Form.Field name="hobby" value='chess' label='Chess' control='input' type='radio' />
        <Form.Field name="hobby" value='darts' label='Darts' control='input' type='radio' />
        <Form.Field name="hobby" value='music' label='Music' control='input' type='radio' />
        <Form.Field name="hobby" value='unity' label='Unity' control='input' type='radio' />
      </Form.Group>
      <TextArea name='description' label='Description' control='input' type='textarea' rows={2}  placeholder='Tell us one interesting thing about you.' onChange={props.handleOnChange}/>
      <Form.Group>
        <div className="upload">
          <br/>
          <Button
            basic color='green'
            content='Add Image' onClick={props.handleUploadWidget} className="upload-button"
          floated="right"/>
        </div>
      </Form.Group>
      <Form.Button content='Submit' />
    </Form>
  )

  export default SignUpForm
