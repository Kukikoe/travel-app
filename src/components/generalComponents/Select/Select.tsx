import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';

import { SelectProps } from './types';

export const Select: React.FC<SelectProps> = (props) => {
  const { options, selectedOption, icon } = props;

  const [value, setValue] = useState(selectedOption);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <FormControl fullWidth size="small">
      <MuiSelect
        value={value}
        displayEmpty
        onChange={handleChange}
        input={
          icon ? (
            <OutlinedInput
              startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
              sx={{ paddingLeft: '4px' }}
            />
          ) : undefined
        }
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
