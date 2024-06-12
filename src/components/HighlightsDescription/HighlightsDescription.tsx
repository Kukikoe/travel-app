import React from 'react';
import Box from '@mui/material/Box';

import { Text } from '../generalComponents';
import { Header } from './Header';
import { UserInfo } from './UserInfo';

export const HighlightsDescription: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" py="32px">
      <Header />
      <UserInfo />
      <Text $fontSize={16}>
        Welcome to Iceland, a land of breathtaking landscapes and unspoiled natural beauty. From its
        majestic waterfalls and geothermal wonders to the vibrant culture and rich history, Iceland
        promises an unforgettable adventure for every traveler.
      </Text>
    </Box>
  );
};
