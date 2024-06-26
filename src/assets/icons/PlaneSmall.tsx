import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const PlaneSmall: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.625 14.125L14.125 8.125L12.25 8.125L14.5 14.5L10.75 14.875L9.625 12.25H8.125V19.75H9.625L10.75 17.125L14.5 17.5L12.25 23.875H14.125L18.625 17.875C19.75 17.875 20.875 17.875 22 17.875C23.0355 17.875 23.875 17.0355 23.875 16C23.875 14.9645 23.0355 14.125 22 14.125C20.875 14.125 19.75 14.125 18.625 14.125Z"
          fill="black"
        />
      </svg>
    </SvgIcon>
  );
};
