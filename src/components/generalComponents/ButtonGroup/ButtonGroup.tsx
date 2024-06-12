import React, { useEffect, useState, useRef } from 'react';
import Button from '@mui/material/Button';

import { StyledButtonGroup } from './StyledButtonGroup';
import { StyledArrowIcon } from './StyledArrowIcon';
import { DropDown } from './DropDown';
import { options } from './utils';

export const ButtonGroup: React.FC = () => {
  const anchorRef = useRef<HTMLDivElement>(null!);
  const lastButtonRef = useRef<HTMLButtonElement>(null!);

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (lastButtonRef?.current) {
      setButtonWidth(lastButtonRef.current.offsetWidth);
    }
  }, [lastButtonRef]);

  return (
    <>
      <StyledButtonGroup
        variant="outlinedRound"
        ref={anchorRef}
        aria-label="Button group with a nested menu"
      >
        <Button>Trips</Button>
        <Button>Iceland</Button>
        <Button
          ref={lastButtonRef}
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          {options[selectedIndex]}
          <StyledArrowIcon open={open} />
        </Button>
      </StyledButtonGroup>
      <DropDown
        anchorRef={anchorRef}
        buttonWidth={buttonWidth}
        open={open}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setOpen={setOpen}
      />
    </>
  );
};
