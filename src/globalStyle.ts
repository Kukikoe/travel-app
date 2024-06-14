import '../docs/fonts/font.css';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "SF Pro Text", sans-serif;
    padding-left: 32px;
    padding-right: 32px;
  }
  button {
      font-family: "SF Pro Text", sans-serif;
  }
`;
