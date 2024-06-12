import { RefObject } from 'react';

export interface DropDownProps {
  anchorRef: RefObject<HTMLDivElement>;
  buttonWidth: number;
  selectedIndex: number;
  open: boolean;
  setSelectedIndex: (index: number) => void;
  setOpen: (open: boolean) => void;
}
