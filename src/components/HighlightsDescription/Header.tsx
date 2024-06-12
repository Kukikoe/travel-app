import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Text } from '../generalComponents';
import { BookmarkSimple, ShareSmall } from 'assets/index';

export const Header: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Text $fontSize={28} $fontWeight={600}>
        Iceland’s Highlights
      </Text>
      <Box display="flex">
        <Button variant="outlined" startIcon={<BookmarkSimple />}>
          Add to wishlist
        </Button>
        <Button variant="outlined" startIcon={<ShareSmall />} sx={{ marginLeft: '8px' }}>
          Share
        </Button>
      </Box>
    </Box>
  );
};
