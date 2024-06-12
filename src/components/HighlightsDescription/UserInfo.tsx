import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { avatarImg } from 'assets/index';

import { Text } from '../generalComponents';

export const UserInfo: React.FC = () => {
  return (
    <Box display="flex" my="16px" alignItems="center">
      <Avatar alt="avatar" src={avatarImg} sx={{ width: 32, height: 32 }} />
      <Box display="flex" flexDirection="column" ml="16px">
        <Text $fontSize={16} $fontWeight={600}>
          Curated by Sandra
        </Text>
        <Text $color="#3C3C43CC">Fyno expert</Text>
      </Box>
    </Box>
  );
};
