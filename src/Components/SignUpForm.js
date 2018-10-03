import React from 'react';
import { Form, TextArea, Button, Radio } from 'semantic-ui-react'


const SignUpForm = (props) => (
    <Form onSubmit={(event) => props.handleFormSubmit(event, props.formState)}>
      <Form.Group widths='equal'>
        <Form.Field name="name" label='Name' control='input' onChange={props.handleOnChange} value={props.currentUser.name} placeholder={props.currentUser.name}/>

        <Form.Field
          required name='username'
          label='Username' control='input'
          value={props.currentUser.username}
          placeholder={props.currentUser.username}
          onChange={props.handleOnChange}/>

        {props.currentUser ?  null :
        <Form.Field
          required name='password'
          label='Password'
          control='input'
          type='password'
          onChange={props.handleOnChange}/>
        }
      </Form.Group>

      <Form.Group grouped>
        <Form.Field required name="mod" label='Mod' control='select' widths='equal' onChange={props.handleOnChange}
          value={props.currentUser.mod}>
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
        <Form.Field>
          <Radio
            label='Javascript'
            name='language'
            value='javascript'
            checked={props.currentUser.language === 'javascript'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Ruby'
            name='language'
            value='ruby'
            checked={props.currentUser.language === 'ruby'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Rails'
            name='language'
            value='rails'
            checked={props.currentUser.language === 'rails'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Python'
            name='language'
            value='python'
            checked={props.currentUser.language === 'python'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Assembly'
            name='language'
            value='assembly'
            checked={props.currentUser.language === 'assembly'}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group name="hobby" onChange={props.handleOnChange} grouped>
        <label>Choose your favorite hobby</label>
        <Form.Field>
          <Radio
            label='Balloons'
            value='balloons'
            checked={props.currentUser.hobby === 'balloons'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Chess'
            value='chess'
            checked={props.currentUser.hobby === 'chess'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Darts'
            value='darts'
            checked={props.currentUser.hobby === 'darts'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Music'
            value='music'
            checked={props.currentUser.hobby === 'music'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Unity'
            value='unity'
            checked={props.currentUser.hobby === 'unity'}
          />
        </Form.Field>
      </Form.Group>
      <TextArea name='description' label='Description' control='input' type='textarea' rows={2}  placeholder={props.currentUser.description} onChange={props.handleOnChange}
        value={props.currentUser.description}/>
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
