import React from 'react';
import { CheckRole } from '.';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material';

export function CheckClassLevel(response)  {
    const classLevel = ['Beginner-Intermediate', 'Intermediate-Advanced'];
    classLevel.forEach(<CheckRole/>);

return( 

    <>
{['Beginner-Intermediate', 'Intermediate-Advanced'].map((response) => (
    <FormControl>
      <FormLabel id='level-check'>Level</FormLabel>
      <RadioGroup
        aria-labelledby='level-check'
        defaultValue='Beginner-Intermediate'
        name='level-check-group'
        >
          <FormControlLabel value='Beginner-Intermediate' control={<Radio />} label='Beginner-Intermediate' />
          <FormControlLabel value='Intermediate-Advanced' control={<Radio />} label='Intermediate-Advanced' />
        </RadioGroup>  
    </FormControl>
   
   
  ))}
  </>


)
};

export default CheckClassLevel;