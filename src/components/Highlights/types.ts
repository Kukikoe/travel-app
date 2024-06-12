import { DailyPlanProps, Plan } from '../DailyPan/types';

export interface IconButtonProps {
  $left?: string;
  $right?: string;
}

export interface TransparentButtonProps {
  label: string;
  onClick: () => void;
}

export interface SpotImageProps {
  src: string;
  alt: string;
  button?: TransparentButtonProps;
}

export interface SpotBarProps {
  title: string;
  rate?: number;
  subtitle: string;
  description: string;
}

export interface Spot {
  id: number;
  img: SpotImageProps;
  bar: SpotBarProps;
}

export interface SpotsProps {
  spots: Spot[];
}

export interface HighlightIconsProps {
  firstLetterIcon: string;
  index: number;
  isDailyPlan: boolean;
}

export interface Highlight {
  label: string;
  captions?: string[];
  withShowDailyPlansButton: boolean;
  description?: string;
  spots?: Spot[];
}

export interface DailyPlan extends DailyPlanProps {
  label: string;
  withShowDailyPlansButton: boolean;
}

export interface HighlightsProps {
  highlights: Highlight[];
  firstLetterIcon: string;
  dailyPlan: DailyPlan;
}

export interface HighlightProps {
  highlight: Highlight;
  dailyPlan: DailyPlan;
  firstLetterIcon: string;
  index: number;
}
