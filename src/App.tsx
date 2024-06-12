import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
  TripInfo,
  PhotoGallery,
  Header,
  HighlightsDescription,
  Route,
  Highlights,
} from 'components/index';

import {
  highlightsForGoldenCircleRegion,
  highlightsForSouthAndHighlands,
  dailyPlanForGoldenCircleRegion,
} from './utils';

import { GlobalStyle } from './globalStyle';
import { theme } from './theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <PhotoGallery />
      <TripInfo />
      <HighlightsDescription />
      <Route />
      <Highlights
        highlights={highlightsForGoldenCircleRegion}
        firstLetterIcon="A"
        dailyPlan={dailyPlanForGoldenCircleRegion}
      />
      <Highlights
        highlights={highlightsForSouthAndHighlands}
        firstLetterIcon="B"
        dailyPlan={dailyPlanForGoldenCircleRegion}
      />
    </ThemeProvider>
  );
};
