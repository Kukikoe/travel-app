import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Details } from 'assets/icons';

import { TransparentButton } from '../generalComponents';
import { DailyPlan } from '../DailyPan';
import { Plan } from '../DailyPan/types';
import { Spots } from './Spots';
import { Spot, TransparentButtonProps } from './types';

export const renderDailyPlansButton = (
  withShowDailyPlansButton: boolean,
  handleVisibility: () => void,
) => {
  if (!withShowDailyPlansButton) return null;

  return (
    <Button variant="outlined" startIcon={<Details />} onClick={handleVisibility}>
      Show daily plan
    </Button>
  );
};

export const renderCaptions = (captions?: string[]) => {
  if (!captions) return null;

  return (
    <Box pb="16px" pt="4px" pl="45px">
      {captions.map((caption, index) => (
        <Typography
          key={index}
          variant="caption"
          sx={{
            marginRight: '16px',
            color: '#3C3C43',
            opacity: '50%',
            fontSize: '15px',
            marginBottom: '8px',
          }}
        >
          {caption}
        </Typography>
      ))}
    </Box>
  );
};

export const renderDescription = (description?: string) => {
  if (!description) return null;

  return (
    <Typography sx={{ color: '#3C3C43', opacity: '80%', fontSize: '16px', paddingLeft: '45px' }}>
      {description}
    </Typography>
  );
};

export const renderSpots = (spots?: Spot[]) => {
  if (!spots) return null;

  return <Spots spots={spots} />;
};

export const renderDailyPlan = (plan?: Plan[]) => {
  if (!plan) return null;

  return <DailyPlan plan={plan} />;
};

export const renderTransparentButton = (button?: TransparentButtonProps) => {
  if (!button) return null;

  return (
    <Box position="absolute" top="16px" left="16px">
      <TransparentButton variant="outlined">{button.label}</TransparentButton>
    </Box>
  );
};
