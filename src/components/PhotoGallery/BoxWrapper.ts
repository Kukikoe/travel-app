import styled from 'styled-components';
import Box from '@mui/material/Box';

export const BoxWrapper = styled(Box)`
  @media (min-width: 320px) {
    height: 243px;
  }
  @media (min-width: 768px) {
    height: 292px;
  }

  @media (min-width: 1000px) {
    height: 338px;
  }

  @media (min-width: 1200px) {
    height: 367px;
  }

  @media (min-width: 1600px) {
    height: 500px;
  }
`;
