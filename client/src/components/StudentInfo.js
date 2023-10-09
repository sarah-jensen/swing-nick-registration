import React from 'react';
import { CheckClassLevel, CheckRole } from '.';

import { Container, FloatingLabel, Form } from 'react-bootstrap';

export function StudentInfo() {
  return (
    <Container fluid>
      <Form>
        <h2>Which level are you registering for?</h2>
        <CheckClassLevel/>

        <Form.Group
          className='mb-3'
          controlId='formPrimaryRole'
        >
          <FloatingLabel
            controlId='floatingInput'
            label='Primary Role'
            className='mb-3'
          >
            <Form.Control
              type='username'
              placeholder='Primary Role'
            />
          </FloatingLabel>
          <Form.Text className='text-muted'>
            This is the name your character will use in game.
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default StudentInfo;