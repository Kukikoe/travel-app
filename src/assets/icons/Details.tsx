import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export const Details: React.FC<{ color?: string }> = (props) => {
  const { color = 'black' } = props;

  return (
    <SvgIcon>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="9.75"
          y="9.75"
          width="2.5"
          height="2.5"
          rx="1.25"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.75"
          y="14.75"
          width="2.5"
          height="2.5"
          rx="1.25"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.75"
          y="19.75"
          width="2.5"
          height="2.5"
          rx="1.25"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <rect x="15" y="10" width="7" height="2" fill={color} />
        <rect x="15" y="15" width="7" height="2" fill={color} />
        <rect x="15" y="20" width="7" height="2" fill={color} />
      </svg>
    </SvgIcon>
  );
};
