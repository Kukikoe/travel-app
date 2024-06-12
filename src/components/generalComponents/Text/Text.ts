import styled from 'styled-components';

import { TextProps } from './types';

export const Text = styled.span<TextProps>`
  color: ${(props) => props.$color || '#000000'};
  font-weight: ${(props) => props.$fontWeight || 400};
  font-size: ${(props) => props.$fontSize || 14}px;
  line-height: ${(props) => props.$lineHeight || 21}px;
  cursor: ${(props) => props.$cursor || 'auto'};
  text-wrap: ${(props) => props.$textWrap || 'initial'};
`;
