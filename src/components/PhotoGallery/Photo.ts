import styled from 'styled-components';
import Box from '@mui/material/Box';

import { PhotoProps } from './types';

export const Photo = styled(Box)<PhotoProps>`
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
`;
