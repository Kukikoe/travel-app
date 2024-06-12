import styled from 'styled-components';
import { Box } from '@mui/material';

export const PhotoWrapper = styled(Box)`
  & > :nth-child(2) {
    border-top-right-radius: 16px;
  }

  & > :last-child {
    border-bottom-right-radius: 16px;
  }
`;
