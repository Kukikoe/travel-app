import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const DragAndDropSmall: React.FC<SvgIconProps> = (props) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 14.5H23V12.5H9V14.5ZM9 19.5H23V17.5H9V19.5Z"
          fill="#3C3C43"
          fillOpacity="0.5"
        />
      </svg>
    </SvgIcon>
  );
};
