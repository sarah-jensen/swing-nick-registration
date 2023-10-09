import React from 'react';

import { CheckRole } from '.';

import { Container, FloatingLabel, Form, Row, Col } from 'react-bootstrap';

export function UserInfo() {
  return (
    <Container fluid>
      <Form>
        <Form.Group
          className='mb-3'
          controlId='formFirstName'
        >
          <FloatingLabel
            controlId='floatingInput'
            label='First Name'
            className='mb-3'
          >
            <Form.Control
              type='username'
              placeholder='First Name'
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group
          className='mb-3'
          controlId='formLastName'
        >
            <FloatingLabel
            controlId='floatingInput'
            label='Last Name'
            className='mb-3'
          >
          <Form.Control
            type='username'
            placeholder='Last Name'
          />
          </FloatingLabel>
        </Form.Group>

        <Form.Group
          className='mb-3'
          controlId='formEmail'
        >
          <FloatingLabel
            controlId='floatingInput'
            label='Email'
            className='mb-3'
          >
          <Form.Control
            type='username'
            placeholder='Email'
          />
          </FloatingLabel>
          <Form.Text className='text-muted'>
            We will never share your email without your permission.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className='mb-3'
          controlId='formPassword'
        >
          <FloatingLabel
            controlId='floatingInput'
            label='Password'
            className='mb-3'
          >
          <Form.Control
            type='username'
            placeholder='Password'
          />
          </FloatingLabel>
          <Form.Text className='text-muted'>
            Passwords must be at least 8 characters and contain: lowercase,
            uppercase, number, special character.
          </Form.Text>
        </Form.Group>
        <p>What is your primary dance role?</p>
        <CheckRole/>

      </Form>
    </Container>
  );
};

export default UserInfo;
