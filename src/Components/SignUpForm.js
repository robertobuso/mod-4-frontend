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
          <option value='mod_1' onChange={props.handleOnChange}>Mod 1</option>
          <option value='mod_2' onChange={props.handleOnChange}>Mod 2</option>
          <option value='mod_3' onChange={props.handleOnChange}>Mod 3</option>
          <option value='mod_4' onChange={props.handleOnChange}>Mod 4</option>
          <option value='mod_5' onChange={props.handleOnChange}>Mod 5</option>
        </Form.Field>
      </Form.Group>
      <Form.Group name="language" onChange={props.handleRadioOnChange} grouped >
        <label>Favorite Coding Language</label>
        <Form.Field name='javascript' label='JavaScript' control='input' type='radio' onChange={props.handleRadioOnChange}  />
        <Form.Field name='ruby' label='Ruby' control='input' type='radio' onChange={props.handleRadioOnChange} />
        <Form.Field name='rails' label='Rails' control='input' type='radio' onChange={props.handleRadioOnChange}  />
        <Form.Field name='python' label='Python' control='input' type='radio' onChange={props.handleRadioOnChange} />
        <Form.Field name='assembly' label='Assembly' control='input' type='radio' onChange={props.handleRadioOnChange} />
      </Form.Group>
      <Form.Group name="hobby" grouped>
        <label>Choose your favorite hobby</label>
        <Form.Field label='Card Games' control='input' type='radio' />
        <Form.Field label='Dancing' control='input' type='radio' />
        <Form.Field label='Singing' control='input' type='radio' />
        <Form.Field label='Coding' control='input' type='radio' />
        <Form.Field label='Rock Climbing' control='input' type='radio' />
        <Form.Field label='Board Games' control='input' type='radio' />
      </Form.Group>
      <Form.Field name="description" label='Tell us a bit about yourself?' control='textarea' rows='3' />
      <Form.Button content='Submit' />
    </Form>
  )

  export default SignUpForm
