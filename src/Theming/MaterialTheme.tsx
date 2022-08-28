import * as React from 'react';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IHasChildrenProp from '@/interfaces/IHasChildrenProp';


declare module '@mui/material/styles' {
  interface Theme {
    primary: {
      main: string;
      light: string;
      dark: string;
    },
    secondary: {
      main: string;
      light: string;
      dark: string;
    },
    texts: {
      main: string;
      light: string;
      dark: string;
    };
  }

  interface ThemeOptions {
    primary: {
      main: string;
      light: string;
      dark: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
    };
    texts: {
      main: string;
      light: string;
      dark: string;
    };
    secondaryText: {
      main: string;
      light: string;
      dark: string;
    };
    aux: {
      main: string;
      light: string;
      dark: string;
    };
  }
}


const theme = createTheme({
  primary: {
    main: '#21232Bff',
    light: '#21232Bff',
    dark: '#21232Bff',
  },
  secondary: {
    main: '#F2CC8F',
    light: '#F2CC8F',
    dark: '#F2CC8F',
  },
  texts: {
    main: '#F2CC8F',
    light: '#F2CC8F',
    dark: '#F2CC8F',
  },
  secondaryText: {
    main: '#B2D3F3',
    light: '#B2D3F3',
    dark: '#B2D3F3',
  },
  aux: {
    main: '#D4D4D4',
    light: '#D4D4D4',
    dark: '#D4D4D4',
  },
  typography: {
    fontFamily: 'Quicksand, sans-serif',
  },
});


const MaterialThemeProvider = ({ children, ...props }: IHasChildrenProp) => {
  return <ThemeProvider theme={theme} {...props}>{children}</ThemeProvider>;
};
export default MaterialThemeProvider;
