import React from 'react';
import Box from '@mui/material/Box';

import { Text } from '../generalComponents';
import { InfoBoxProps } from './types';

export const InfoBox: React.FC<InfoBoxProps> = (props) => {
  const { title, description } = props;

  return (
    <Box display="flex" flexDirection="column">
      <Text $fontWeight={400} $fontSize={15} $color="#3C3C43CC">
        {title}
      </Text>
      <Text $fontWeight={600} $fontSize={16} $lineHeight={24}>
        {description}
      </Text>
    </Box>
  );
};
