import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { Text } from '../generalComponents';
import { HighlightIcons } from './HighlightIcons';
import {
  renderCaptions,
  renderDailyPlan,
  renderDailyPlansButton,
  renderDescription,
  renderSpots,
} from './renderUtils';
import { HighlightProps, Highlight as HighlightInterface, DailyPlan } from './types';

export const Highlight: React.FC<HighlightProps> = (props) => {
  const { highlight, dailyPlan, firstLetterIcon, index } = props;

  const [isDailyPlan, setIsDailyPlan] = useState(false);
  const [data, setData] = useState<HighlightInterface | DailyPlan>(highlight);

  const handleVisibility = (): void => {
    setIsDailyPlan((prevState) => !prevState);
  };

  useEffect(() => {
    setData(isDailyPlan ? dailyPlan : highlight);
  }, [isDailyPlan, dailyPlan, highlight]);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        pt="16px"
        gap="16px"
        position="inherit"
        zIndex={1}
      >
        <HighlightIcons firstLetterIcon={firstLetterIcon} isDailyPlan={isDailyPlan} index={index} />
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <Text $fontWeight={600} $fontSize={17} $lineHeight={24}>
            {data.label}
          </Text>
          {renderDailyPlansButton(data.withShowDailyPlansButton, handleVisibility)}
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        {renderCaptions((data as HighlightInterface)?.captions)}
        {renderDescription((data as HighlightInterface)?.description)}
        {renderSpots((data as HighlightInterface)?.spots)}
        {renderDailyPlan((data as DailyPlan)?.plan)}
      </Box>
    </>
  );
};
