import React, { useRef, useState, useEffect, ComponentType } from 'react';
import { Box } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

import { IconButton } from './IconButton';

export const withHorizontalScroll = <P extends object>(
  WrappedComponent: ComponentType<P>,
): ComponentType<P> => {
  return (props: P) => {
    const ref = useRef<HTMLDivElement>(null!);
    const [isArrowDisabled, setIsArrowDisabled] = useState(true);
    const [shouldShowButtons, setShouldShowButtons] = useState(true);

    useEffect(() => {
      if (ref.current) {
        const containerWidth = ref.current.offsetWidth;
        const contentWidth = Array.from(ref.current.children).reduce((acc, child) => {
          return acc + (child as HTMLElement).offsetWidth;
        }, 0);

        if (contentWidth <= containerWidth) {
          setShouldShowButtons(false);
        } else {
          setShouldShowButtons(true);
        }
      }
    }, [props]);

    const handleHorizontalScroll = (step: number, speed: number = 25, distance: number = 100) => {
      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
        if (ref.current) {
          ref.current.scrollLeft += step;
          scrollAmount += Math.abs(step);
          if (scrollAmount >= distance) {
            clearInterval(slideTimer);
          }
          if (ref.current.scrollLeft === 0) {
            setIsArrowDisabled(true);
          } else {
            setIsArrowDisabled(false);
          }
        }
      }, speed);
    };

    return (
      <Box position="relative" ml="45px">
        <Box ref={ref} gap="16px" display="flex" mt="24px" flexWrap="nowrap" overflow="hidden">
          <WrappedComponent {...props} />
        </Box>
        {shouldShowButtons && (
          <>
            <IconButton
              $left="12px"
              disabled={isArrowDisabled}
              onClick={() => handleHorizontalScroll(-10)}
            >
              <ArrowBack />
            </IconButton>
            <IconButton $right="12px" onClick={() => handleHorizontalScroll(10)}>
              <ArrowForward />
            </IconButton>
          </>
        )}
      </Box>
    );
  };
};
