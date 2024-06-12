import styled from 'styled-components';
import { ChevronDownSmall } from 'assets/icons';

export const StyledArrowIcon = styled(ChevronDownSmall)<{ open: boolean }>`
  transition: transform 0.3s;
  transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0)')};
`;
