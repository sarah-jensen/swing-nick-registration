import React from 'react';

import { Form } from 'react-bootstrap';

export  function CheckRole(response) {
  return (
    <>
      {['Follow', 'Lead', 'Switch'].map((response) => (
        <Form.Check
          type='radio'
          id={`${response}`}
          label={`${response}`}
        />
      ))}
    </>
  );
};

export default CheckRole;
