import React from 'react';
import { Box, IconButton } from '@mui/material';
import { BookmarkSmall } from 'assets/icons';

import { renderTransparentButton } from './renderUtils';
import { SpotImageProps } from './types';

export const SpotImage: React.FC<SpotImageProps> = (props) => {
  const { src, alt, button } = props;

  return (
    <Box position="relative" height="292px">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: 216, height: 292, borderRadius: '16px', objectFit: 'cover' }}
      />
      {renderTransparentButton(button)}
      <IconButton sx={{ position: 'absolute', top: 16, right: 16, padding: 0 }}>
        <BookmarkSmall sx={{ width: 32, height: 32 }} />
      </IconButton>
    </Box>
  );
};
