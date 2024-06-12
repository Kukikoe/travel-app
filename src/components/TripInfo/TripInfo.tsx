import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { InfoBox } from './InfoBox';

export const TripInfo: React.FC = () => {
  const onClick = (): void => {
    const element = document?.getElementById('scrollto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderRadius="16px"
      boxShadow="0px 0px 0px 0.5px #9797974D"
      padding="16px"
      alignItems="center"
      my="32px"
    >
      <Box display="flex" justifyContent="space-between" width="65%">
        <InfoBox title="Trip duration" description="7 days" />
        <InfoBox title="Exploration" description="4 regions" />
        <InfoBox title="Flight" description="7h 20m from SFO" />
      </Box>
      <Box display="flex" px="12px">
        <Button variant="text" onClick={onClick}>
          View itinerary
        </Button>
      </Box>
    </Box>
  );
};
