import React from 'react';

import { CheckRole } from '.';

import { 
  Box,
  Container, 
  FormLabel,
  TextField,
} from '@mui/material';

export function UserInfo() {
  return (
    <Container fluid>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Email address"
          defaultValue=""
          helperText="I will never share your email without your permission."
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue=""
          helperText="Passwords must be at least 8 characters and contain: lowercase,
          uppercase, number, special character."
        />
        <FormLabel>What is your primary dance role?</FormLabel>
        <CheckRole/>
      </Box>
     
       
    </Container>
  );
};

export default UserInfo;
