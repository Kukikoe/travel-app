import styled from 'styled-components';
import MuiButtonGroup from '@mui/material/ButtonGroup';

export const StyledButtonGroup = styled(MuiButtonGroup)`
  .MuiButton-root {
    padding: 0 16px;

    & .MuiSvgIcon-root {
      margin-left: 4px;
    }
  }
`;
