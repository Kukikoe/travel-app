import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const BookmarkSimple: React.FC<SvgIconProps> = (props) => {
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
          d="M16.5013 19.6588L16 19.3685L15.4987 19.6588L11 22.265V12.77C11 11.9279 11.0008 11.3554 11.0363 10.9126C11.071 10.4812 11.1339 10.2602 11.2109 10.106C11.4045 9.71862 11.7186 9.4045 12.106 9.21091C12.2602 9.13386 12.4812 9.071 12.9126 9.03633C13.3554 9.00075 13.9279 9 14.77 9H17.23C18.0721 9 18.6446 9.00075 19.0874 9.03633C19.5188 9.071 19.7398 9.13386 19.894 9.21091C20.2814 9.4045 20.5955 9.71862 20.7891 10.106C20.8661 10.2602 20.929 10.4812 20.9637 10.9126C20.9992 11.3554 21 11.9279 21 12.77V22.265L16.5013 19.6588Z"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </SvgIcon>
  );
};
