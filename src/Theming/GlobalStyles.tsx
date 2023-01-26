import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global styles={({ background, palette: { mode } }) => {
      return css`* {

        color: white;
        margin: 0;
        padding: 0;

      }

        html {
          background: ${background[mode]} no-repeat center center fixed;
        }
      `;
    }} />
  );
};

export default GlobalStyles;
