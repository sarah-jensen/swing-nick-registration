import React from 'react';
import { CheckClassLevel, CheckRole } from '.';

import { Container, FormControl, FormLabel } from '@mui/material';

export function StudentInfo() {
  return (
    <Container fluid>
      <FormControl>
        <FormLabel id='role-check'>
          Which level are you registering for?
        </FormLabel>
        <CheckClassLevel />
        <FormLabel id='role-check'>Which role will you be dancing?</FormLabel>
        <CheckRole />
      </FormControl>
    </Container>
  );
}

export default StudentInfo;
