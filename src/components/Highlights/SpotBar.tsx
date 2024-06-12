import React from 'react';
import { Box } from '@mui/material';
import { Rate } from 'assets/icons';

import { Text, TextWithDotSeparation } from '../generalComponents';
import { SpotBarProps } from './types';

export const SpotBar: React.FC<SpotBarProps> = (props) => {
  const { title, rate, subtitle, description } = props;

  return (
    <Box display="flex" flexDirection="column" gap="4px" p="8px" pb={0}>
      <Text $fontSize={16} $fontWeight={600} $lineHeight={24}>
        {title}
      </Text>
      {rate ? (
        <Box>
          <Box display="flex" gap="5px" pt="4px" pb="2px" alignItems="center">
            <Rate sx={{ width: 16, height: 16 }} />
            <Text $fontSize={13} $fontWeight={600}>{`${rate}/10`}</Text>
          </Box>
        </Box>
      ) : null}
      <Box display="flex" gap="4px">
        <TextWithDotSeparation data={[subtitle, description]} />
      </Box>
    </Box>
  );
};
