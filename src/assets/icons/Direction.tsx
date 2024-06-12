import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const Direction: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.71527 7.6798C2.43386 8.9612 2.43386 11.0388 3.71527 12.3202L7.67976 16.2847C8.96117 17.5661 11.0387 17.5661 12.3202 16.2847L16.2846 12.3202C17.5661 11.0388 17.5661 8.9612 16.2847 7.6798L12.3202 3.7153C11.0387 2.43389 8.96117 2.43389 7.67977 3.7153L3.71527 7.6798ZM4.82012 11.2153C4.14891 10.5441 4.14891 9.45586 4.82012 8.78465L8.78462 4.82015C9.45583 4.14894 10.5441 4.14894 11.2153 4.82015L15.1798 8.78465C15.851 9.45586 15.851 10.5441 15.1798 11.2153L11.2153 15.1798C10.5441 15.851 9.45583 15.851 8.78462 15.1798L7.7812 14.1764V12.4999C7.7812 11.5507 8.55071 10.7812 9.49995 10.7812H11.6138L8.95754 13.4375H11.1672L14.6048 9.99994L11.1674 6.5625H8.95766L11.6138 9.21869H9.49995C7.68777 9.21869 6.2187 10.6878 6.2187 12.4999V12.6139L4.82012 11.2153Z"
          fill="#3C3C43"
          fillOpacity="0.8"
        />
      </svg>
    </SvgIcon>
  );
};