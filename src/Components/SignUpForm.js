import React from 'react';
import { Form } from 'semantic-ui-react'

const SignUpForm = (props) => (
    <Form onSubmit={(event) => props.handleFormSubmit(event, props.formState)}>
      <Form.Group widths='equal'>
        <Form.Field name="name" label='Name' control='input' onChange={props.handleOnChange} value={props.name}/>
        <Form.Field label='Username' control='input' placeholder={props.currentUser} onChange={props.handleOnChange}/>
      </Form.Group>
      <Form.Group grouped>
        <Form.Field name="mod" label='Mod' control='select' widths='equal' onChange={props.handleOnChange}>
          <option value="" disabled >Choose your Mod</option>
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
        <Form.Field name='balloons' label='Balloons' control='input' type='radio' />
        <Form.Field name='chess' label='Chess' control='input' type='radio' />
        <Form.Field name='darts' label='Darts' control='input' type='radio' />
        <Form.Field name='music' label='Music' control='input' type='radio' />
        <Form.Field name='unity' label='Unity' control='input' type='radio' />
      </Form.Group>
      <Form.Field name="description" label='Tell us a bit about yourself?' control='textarea' rows='3' />
      <Form.Button content='Submit' />
    </Form>
  )

  export default SignUpForm
