import { ReactElement } from 'react';

export interface SelectProps {
  options: string[];
  selectedOption: string;
  icon?: ReactElement;
}
