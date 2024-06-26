import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const PersonSmall: React.FC<SvgIconProps> = (props) => {
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
          d="M9 20.092C12.9051 16.3215 19.0949 16.3215 23 20.092V22.6667H9V20.092Z"
          fill="black"
        />
        <path
          d="M19.3333 12.3333C19.3333 14.1743 17.8409 15.6667 16 15.6667C14.159 15.6667 12.6667 14.1743 12.6667 12.3333C12.6667 10.4924 14.159 9 16 9C17.8409 9 19.3333 10.4924 19.3333 12.3333Z"
          fill="black"
        />
      </svg>
    </SvgIcon>
  );
};
