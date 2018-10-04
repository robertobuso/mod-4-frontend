import React from 'react';
import { Form, TextArea, Button, Radio } from 'semantic-ui-react'

const SignUpForm = (props) => (
  <div>
    {props.currentUser.length === 0 ?
      <Form onSubmit={(event) => props.handleFormSubmit(event, props.formState)}>
        <Form.Group widths='equal'>
          <Form.Field
            name="name"
            label='Name'
            control='input'
            onChange={props.handleOnChange}
            value={props.currentUser.name}
            placeholder={props.currentUser.name}/>

          <Form.Field
            required name='username'
            label='Username'
            control='input'
            placeholder={props.currentUser.username}
            value={props.currentUser.username}
            onChange={props.handleOnChange}/>
          <Form.Field
            required name='password'
            label='Password'
            control='input'
            type='password'
            onChange={props.handleOnChange}/>
        </Form.Group>

        <Form.Group grouped>
          <Form.Field
            required name='mod'
            label='Mod'
            control='select'
            widths='equal'
            onChange={props.handleOnChange}>
            <option value=''>
              Choose your Mod
            </option>
            <option value='mod_1'>Mod 1</option>
            <option value='mod_2'>Mod 2</option>
            <option value='mod_3'>Mod 3</option>
            <option value='mod_4'>Mod 4</option>
            <option value='mod_5'>Mod 5</option>
          </Form.Field>
        </Form.Group>
        <Form.Group
          name="language"
          onChange={props.handleOnChange}
        grouped >
          <label>Favorite Coding Language</label>
          <Form.Field
            label='Javascript'
            name='language'
            value='javascript'
            type='radio'
            control='input'
          />
          <Form.Field
            label='Ruby'
            name='language'
            value='ruby'
            type='radio'
            control='input'
          />
          <Form.Field
            label='Rails'
            name='language'
            value='rails'
            type='radio'
            control='input'
          />
          <Form.Field
            label='Python'
            name='language'
            value='python'
            type='radio'
            control='input'
          />
          <Form.Field
            label='Assembly'
            name='language'
            value='assembly'
            type='radio'
            control='input'
          />
        </Form.Group>

        <Form.Group name="hobby" onChange={props.handleOnChange} grouped>
          <label>Choose your favorite hobby</label>
          <Form.Field
            label='Balloons'
            name='hobby'
            value='balloons'
            type='radio'
            control='input'
          />
          <Form.Field
            label='Chess'
            name='hobby'
            value='chess'
            type='radio'
            control='input'
          />
          <Form.Field
            label='Darts'
            name='hobby'
            value='darts'
            type='radio'
            control='input'
          />
          <Form.Field
            label='Music'
            name='hobby'
            value='music'
            type='radio'
            control='input'
          />
          <Form.Field
            label='Unity'
            name='hobby'
            value='unity'
            type='radio'
            control='input'
          />
        </Form.Group>

        <TextArea
          name='description'
          label='Description'
          control='input'
          type='textarea'
          rows={2}  placeholder={props.currentUser.description} onChange={props.handleOnChange}/>
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
    :
    <Form onSubmit={(event) => props.handleEditFormSubmit(event, props.formState)}>
      <Form.Group widths='equal'>
        <Form.Field
          name="name"
          label='Name'
          control='input'
          onChange={props.handleOnChange} value={props.currentUser.name} placeholder={props.currentEditUser.name}/>

        <Form.Field
          required name='username'
          label='Username' control='input'
          value={props.currentUser.username}
          placeholder={props.currentEditUser.username}
          onChange={props.handleOnChange}/>
      </Form.Group>

      <Form.Group grouped>
        <Form.Field required name="mod" label='Mod' control='select' widths='equal' onChange={props.handleOnChange}
          value={props.currentEditUser.mod}>
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
            checked={props.currentEditUser.language === 'javascript'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Ruby'
            name='language'
            value='ruby'
            checked={props.currentEditUser.language === 'ruby'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Rails'
            name='language'
            value='rails'
            checked={props.currentEditUser.language === 'rails'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Python'
            name='language'
            value='python'
            checked={props.currentEditUser.language === 'python'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Assembly'
            name='language'
            value='assembly'
            checked={props.currentEditUser.language === 'assembly'}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group name="hobby" onChange={props.handleOnChange} grouped>
        <label>Choose your favorite hobby</label>
        <Form.Field>
          <Radio
            label='Balloons'
            value='balloons'
            checked={props.currentEditUser.hobby === 'balloons'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Chess'
            value='chess'
            checked={props.currentEditUser.hobby === 'chess'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Darts'
            value='darts'
            checked={props.currentEditUser.hobby === 'darts'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Music'
            value='music'
            checked={props.currentEditUser.hobby === 'music'}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Unity'
            value='unity'
            checked={props.currentEditUser.hobby === 'unity'}
          />
        </Form.Field>
      </Form.Group>
      <TextArea name='description' label='Description' control='input' type='textarea' rows={2}  placeholder={props.currentEditUser.description} onChange={props.handleOnChange}
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
    }
  </div>
  )

  export default SignUpForm
