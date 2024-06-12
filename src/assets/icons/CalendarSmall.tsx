import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const CalendarSmall: React.FC<SvgIconProps> = (props) => {
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
          d="M12.875 8H10.625V9.5H10.25C9.00736 9.5 8 10.5074 8 11.75V22V24H10H22.5H24.5V22V11.75C24.5 10.5074 23.4926 9.5 22.25 9.5H21.875V8H19.625V9.5H12.875V8ZM10.25 11.5H22.25C22.3881 11.5 22.5 11.6119 22.5 11.75V22H10V11.75C10 11.6119 10.1119 11.5 10.25 11.5ZM11.375 13.625H13.625V15.875H11.375V13.625ZM11.375 17.375H13.625V19.625H11.375V17.375ZM17.375 13.625H15.125V15.875H17.375V13.625ZM15.125 17.375H17.375V19.625H15.125V17.375ZM21.125 13.625H18.875V15.875H21.125V13.625Z"
          fill="black"
        />
      </svg>
    </SvgIcon>
  );
};