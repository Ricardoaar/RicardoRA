import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global styles={({ background, palette: { mode } }) => {
      return css`* {
        margin: 0;
        padding: 0;
        background: ${background[mode]} no-repeat center center fixed;
      }`;
    }} />
  );
};

export default GlobalStyles;
