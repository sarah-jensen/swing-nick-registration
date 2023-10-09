import React from 'react';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material'; 

export  function CheckRole(response) {
  return (
    <>
      {['Follow', 'Lead', 'Switch'].map((response) => (
        <FormControl>
        
        <RadioGroup
          aria-labelledby='role-check'
          defaultValue='Follow'
          name='role-check-group'
          >
            <FormControlLabel value='Follow' control={<Radio />} label='Follow' />
            <FormControlLabel value='Lead' control={<Radio />} label='Lead' />
            <FormControlLabel value='Switch' control={<Radio />} label='Switch' />
          </RadioGroup>  
      </FormControl>
      ))}
    </>
  );
};

export default CheckRole;
