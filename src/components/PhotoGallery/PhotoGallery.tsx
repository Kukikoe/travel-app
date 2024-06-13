import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  northernLightImg,
  waterfallImg,
  housesImg,
  iceCaveImg,
  riverImg,
  AllPhotos,
} from 'assets/index';

import { PhotoWrapper } from './PhotoWrapper';
import { Photo } from './Photo';
import { BoxWrapper } from './BoxWrapper';

export const PhotoGallery: React.FC = () => {
  const images = [waterfallImg, riverImg, housesImg, iceCaveImg];

  return (
    <BoxWrapper
      display="flex"
      gap="4px"
      borderRadius={16}
      alignItems="center"
      sx={{ position: 'relative' }}
    >
      <Box display="flex" height="100%" width="50%">
        <Photo width="100%" $backgroundImage={northernLightImg} borderRadius="16px 0 0 16px" />
      </Box>
      <PhotoWrapper
        display="flex"
        height="100%"
        width="50%"
        flexWrap="wrap"
        justifyContent="space-between"
        gap="4px"
      >
        {images.map((image, index) => (
          <Photo key={index} width="calc(50% - 2px)" $backgroundImage={image} />
        ))}
      </PhotoWrapper>
      <Button
        variant="transparent"
        startIcon={<AllPhotos />}
        sx={{ position: 'absolute', bottom: 12, right: 12 }}
      >
        All photos
      </Button>
    </BoxWrapper>
  );
};
