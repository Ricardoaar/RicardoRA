//Libraries
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

//Typing
import ChildrenPropType from '@/typing/common/ChildrenProp';


const theme = createTheme({
  palette: {
    primary: {
      main: '#21232Bff',
      light: '#21232Bff',
      dark: '#21232Bff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F2CC8F',
      light: '#F2CC8F',
      dark: '#F2CC8F',
      contrastText: '#fff',
    },
    texts: {
      main: '#F4F1DE',
      light: '#F4F1DE',
      dark: '#F4F1DE',
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
  },
  typography: {
    fontFamily: 'Quicksand, sans-serif',
  },
  background: {
    light: 'linear-gradient(180deg, #000000 0%, #141425 51.56%, #000000 100%)',
    dark: 'linear-gradient(180deg, #000000 0%, #141425 51.56%, #000000 100%)',
  },
});


const MaterialThemeProvider = ({ children, ...props }: ChildrenPropType) => {
  return <ThemeProvider theme={theme} {...props}>{children}</ThemeProvider>;
};
export default MaterialThemeProvider;
