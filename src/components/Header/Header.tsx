import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { PlusSmall } from 'assets/icons';

import { ButtonGroup } from '../generalComponents';

export const Header: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between" py="20px">
      <ButtonGroup />
      <Button variant="outlinedRound" startIcon={<PlusSmall />} sx={{ padding: '8px 12px' }}>
        Create
      </Button>
    </Box>
  );
};
