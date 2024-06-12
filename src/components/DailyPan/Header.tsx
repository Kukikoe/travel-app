import React from 'react';
import { Box } from '@mui/material';
import { Text } from 'components/generalComponents';
import { Direction, EllipsisSmall } from 'assets/icons';

import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = (props) => {
  const { title, fullDuration } = props;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="10px"
      pl="45px"
      pt="16px"
    >
      <Text $fontWeight={600} $fontSize={17} $lineHeight={24}>
        {title}
      </Text>
      <Box display="flex" alignItems="center" gap="8px">
        <Box display="flex" alignItems="center" gap="2px">
          <Direction sx={{ width: 20, height: 20 }} />
          <Text $fontSize={13} $fontWeight={500} $color="#3C3C43CC">
            {fullDuration}
          </Text>
        </Box>
        <EllipsisSmall sx={{ width: 32, height: 32 }} />
      </Box>
    </Box>
  );
};
