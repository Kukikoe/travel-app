import React from 'react';
import { Box } from '@mui/material';
import { Text } from '../generalComponents';
import { CalendarSmall, PersonSmall, PlaneSmall } from 'assets/icons';

import { Select } from '../generalComponents';

const numberOfPeople = ['1', '2', '3', '4', '5', '6'];
const departure = ['Reykjavík, KEF', 'Budapest, BUD', 'Spain, BCN'];
const arrival = ['San Francisco, SFO', 'Paris, ORY', 'Poloand, WAW'];

export const Route: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" py="16px">
      <Text $fontSize={22} $fontWeight={600}>
        Iceland itinerary
      </Text>
      <Box
        display="flex"
        border="1px solid #CCD7F1"
        alignItems="center"
        gap="16px"
        borderRadius="16px"
        p="24px"
        mt="24px"
        boxShadow="0px 2px 3px 0px #DCE3F680"
        sx={{ backgroundColor: '#F0F4FD' }}
      >
        <Box display="flex" alignItems="center" sx={{ width: '70%' }}>
          <Box sx={{ width: '100%' }}>
            <Select options={departure} selectedOption={departure[0]} />
          </Box>
          <PlaneSmall sx={{ width: '32px', height: '32px' }} />
          <Box sx={{ width: '100%' }}>
            <Select options={arrival} selectedOption={arrival[0]} />
          </Box>
        </Box>
        <Box sx={{ minWidth: '100px', width: '24%' }}>
          <Select
            options={['Jul 03 – Jul 11']}
            selectedOption="Jul 03 – Jul 11"
            icon={<CalendarSmall sx={{ width: '32px', height: '32px' }} />}
          />
        </Box>
        <Box sx={{ width: 70 }}>
          <Select
            options={numberOfPeople}
            selectedOption={numberOfPeople[1]}
            icon={<PersonSmall sx={{ width: '32px', height: '32px' }} />}
          />
        </Box>
      </Box>
    </Box>
  );
};
