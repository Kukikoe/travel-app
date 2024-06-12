import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export const PlusSmall: React.FC = () => {
  return (
    <SvgIcon>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5.5V18.5M5.5 12L18.5 12"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    </SvgIcon>
  );
};
