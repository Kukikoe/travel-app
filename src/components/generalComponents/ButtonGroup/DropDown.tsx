import React, { MouseEvent } from 'react';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

import { options } from './utils';
import { DropDownProps } from './types';

export const DropDown: React.FC<DropDownProps> = (props) => {
  const { anchorRef, buttonWidth, open, selectedIndex, setSelectedIndex, setOpen } = props;

  const handleMenuItemClick = (
    event: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLLIElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Popper
      sx={{
        zIndex: 1,
        minWidth: buttonWidth,
      }}
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
      placement="bottom-end"
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: 'top',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList id="split-button-menu" autoFocusItem>
                {options.map((option, index) => (
                  <MenuItem
                    key={option}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};
