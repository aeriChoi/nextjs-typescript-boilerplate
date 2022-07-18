import { createGlobalStyle } from 'styled-components';
import { resetCss } from './resetCss';

const GlobalStyle = createGlobalStyle`
  ${resetCss};
  html {
    min-height: 100%;
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
  }
  html,
  body {
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: transparent;
    width: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
