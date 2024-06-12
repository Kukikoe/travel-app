import styled from 'styled-components';
import { Button } from '@mui/material';

export const TransparentButton = styled(Button)<{ $backgroundColor?: string }>`
  background: ${(props) => props.$backgroundColor || '#FFFFFF80'};
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;

  &.MuiButton-outlined {
    border: none;
    color: #3c3c43cc;
  }
`;
