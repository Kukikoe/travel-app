import React from 'react';
import { Box } from '@mui/material';
import { SpotBar } from 'components/Highlights/SpotBar';
import { SpotImage } from 'components/Highlights/SpotImage';

import { withHorizontalScroll } from './withHorizontalScroll';
import { SpotsProps } from './types';

const SpotsComponent: React.FC<SpotsProps> = ({ spots }) => {
  return (
    <>
      {spots.map((spot) => (
        <Box key={spot.id}>
          <SpotImage {...spot.img} />
          <SpotBar {...spot.bar} />
        </Box>
      ))}
    </>
  );
};

export const Spots = withHorizontalScroll(SpotsComponent);
