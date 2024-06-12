import React from 'react';
import { Box } from '@mui/material';
import { DragAndDropSmall, EllipsisSmall } from 'assets/icons';

import { TransparentButton, Text, TextWithDotSeparation } from '../generalComponents';
import { ActivityProps } from './types';

export const Activity: React.FC<ActivityProps> = (props) => {
  const { img, alt, title, button, duration, occupation, traffic } = props;

  return (
    <Box position="relative" pl="45px">
      <Box
        position="absolute"
        top="50%"
        left="10px"
        width="4px"
        height="4px"
        borderRadius="20px"
        border="2px solid #fff"
        sx={{ transform: 'translateY(-50%)', backgroundColor: '#9D9DA1' }}
        zIndex={0}
      />
      <Box display="flex" alignItems="center" justifyContent="space-between" py="12px">
        <Box display="flex" alignItems="center" gap="24px">
          <img
            src={img}
            alt={alt}
            loading="lazy"
            style={{ width: 96, height: 132, borderRadius: '12px', objectFit: 'cover' }}
          />
          <Box display="flex" flexDirection="column" gap="8px" alignItems="flex-start">
            <Text $fontWeight={600} $fontSize={17} $lineHeight={24}>
              {title}
            </Text>
            {button ? (
              <TransparentButton variant="outlined" $backgroundColor="#F2F2F7">
                {button.label}
              </TransparentButton>
            ) : null}
            <Box display="flex" gap="4px">
              <TextWithDotSeparation data={[duration, occupation, traffic]} />
            </Box>
          </Box>
        </Box>
        <Box display="flex" gap="8px">
          <DragAndDropSmall sx={{ width: 32, height: 32 }} />
          <EllipsisSmall sx={{ width: 32, height: 32 }} />
        </Box>
      </Box>
    </Box>
  );
};
