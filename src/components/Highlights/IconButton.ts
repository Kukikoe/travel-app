import styled from 'styled-components';
import { IconButton as MuiIconButton } from '@mui/material';

import { IconButtonProps } from './types';

export const IconButton = styled(MuiIconButton)<IconButtonProps>`
  position: absolute;
  top: 40%;
  left: ${(props) => props.$left || 'unset'};
  right: ${(props) => props.$right || 'unset'};
  color: #000;
  background-color: #fff;
  transform: translateY(-40%);
  &:hover {
    background-color: #ffffffb3;
  }
`;
