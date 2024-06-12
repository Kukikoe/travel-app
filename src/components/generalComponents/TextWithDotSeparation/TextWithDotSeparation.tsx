import React, { Fragment } from 'react';
import { Box } from '@mui/material';

import { Text } from '../Text';
import { TextWithDotSeparationProps } from './types';

export const TextWithDotSeparation: React.FC<TextWithDotSeparationProps> = (props) => {
  const { data } = props;

  return (
    <>
      {data.map((item, index) => (
        <Fragment key={index}>
          <Text $fontSize={15} $color="#3C3C43CC">
            {item}
          </Text>
          {index !== data.length - 1 ? (
            <Box fontSize={15} color="#3C3C43CC">
              ·
            </Box>
          ) : null}
        </Fragment>
      ))}
    </>
  );
};
