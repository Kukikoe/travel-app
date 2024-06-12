import React from 'react';
import { Box } from '@mui/material';

import { HighlightsProps } from './types';
import { Highlight } from './Highlight';

export const Highlights: React.FC<HighlightsProps> = (props) => {
  const { highlights, dailyPlan, firstLetterIcon } = props;

  return (
    <Box id="scrollto" pt="16px">
      {highlights.map((highlight, index) => (
        <Box key={index} position="relative">
          {index !== highlights.length - 1 ? (
            <Box
              position="absolute"
              top="16px"
              left="13px"
              width="2px"
              height="100%"
              sx={{ backgroundColor: '#3C3C432E' }}
              zIndex={0}
            />
          ) : null}
          <Highlight
            firstLetterIcon={firstLetterIcon}
            highlight={highlight}
            dailyPlan={dailyPlan}
            index={index}
          />
        </Box>
      ))}
    </Box>
  );
};
