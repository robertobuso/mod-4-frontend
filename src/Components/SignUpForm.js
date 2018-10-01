import React from 'react';
import { Form } from 'semantic-ui-react'

const SignUpForm = (props) => (
    <Form>
      <Form.Group widths='equal'>
        <Form.Field name="myName" label='Name' control='input' onChange={props.handleOnChange}/>
        <Form.Field label='Username' control='input' value={props.currentUser}/>
      </Form.Group>
      <Form.Group grouped>
        <Form.Field name="mod" label='Mod' control='select' widths='equal' >
          <option value="" disabled selected>Choose your Mod</option>
          <option value='mod 1'>Mod 1</option>
          <option value='mod 2'>Mod 2</option>
          <option value='mod 3'>Mod 3</option>
          <option value='mod 4'>Mod 4</option>
          <option value='mod 5'>Mod 5</option>
        </Form.Field>
      </Form.Group>
      <Form.Group name="favoriteLanguage" grouped>
        <label>Favorite Coding Language</label>
        <Form.Field label='JavaScript' control='input' type='radio' name='htmlRadios' />
        <Form.Field label='Ruby' control='input' type='radio' name='htmlRadios' />
        <Form.Field label='Rails' control='input' type='radio' name='htmlRadios' />
        <Form.Field label='Ruby' control='input' type='radio' name='htmlRadios' />
        <Form.Field label='React' control='input' type='radio' name='htmlRadios' />
      </Form.Group>
      <Form.Group name="hobbies" grouped>
      <label>Choose your hobbies</label>
        <Form.Field label='Card Games' control='input' type='checkbox' />
        <Form.Field label='Dancing' control='input' type='checkbox' />
        <Form.Field label='Singing' control='input' type='checkbox' />
        <Form.Field label='Coding' control='input' type='checkbox' />
        <Form.Field label='Rock Climbing' control='input' type='checkbox' />
        <Form.Field label='Board Games' control='input' type='checkbox' />
      </Form.Group>
      <Form.Field name="description" label='Tell us a bit about yourself?' control='textarea' rows='3' />
      <Form.Field control='button'>
        Create Card
      </Form.Field>
    </Form>
  )
  
  export default SignUpForm