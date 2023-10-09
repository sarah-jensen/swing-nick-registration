import React from 'react';
import { CheckRole } from '.';

import {Form} from 'react-bootstrap';

export function CheckClassLevel(response)  {
    const classLevel = ['Beginner-Intermediate', 'Intermediate-Advanced'];
    classLevel.forEach(<CheckRole/>);

return( 

    <>
{['Beginner-Intermediate', 'Intermediate-Advanced'].map((response) => (
    <Form.Check
    type='checkbox'
      id={`${response}`}
      label={`${response}`}
    />
   
  ))}
  </>


)
};

export default CheckClassLevel;