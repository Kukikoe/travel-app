import React, { useMemo } from 'react';
import { Text } from 'components/generalComponents';
import { Box } from '@mui/material';
import { BedSmall, Details, SparkleSmall } from 'assets/icons';

import { HighlightIconsProps } from './types';

export const HighlightIcons: React.FC<HighlightIconsProps> = (props) => {
  const { firstLetterIcon, isDailyPlan, index } = props;

  const icons: React.ReactElement[] = useMemo(
    () => [
      <Text $fontSize={12} $fontWeight={500} $color="#fff" $lineHeight={16}>
        {firstLetterIcon}
      </Text>,
      isDailyPlan ? (
        <Details color="#fff" />
      ) : (
        <SparkleSmall sx={{ width: '20px', height: '20px' }} />
      ),
      <BedSmall sx={{ width: '20px', height: '20px' }} />,
    ],
    [isDailyPlan],
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minWidth="24px"
      height="24px"
      borderRadius="20px"
      border="2px solid #fff"
      sx={{ backgroundColor: index === 0 ? '#714EFF' : '#9D9DA1' }}
    >
      {icons[index]}
    </Box>
  );
};
