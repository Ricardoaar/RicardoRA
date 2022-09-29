export default interface MuiThemeProps {
  palette: {
    texts: {
      main: string;
      light: string;
      dark: string;
    };
    secondaryText: {
      main: string;
      light: string;
      dark: string;
    },
    aux: {
      main: string;
      light: string;
      dark: string;
    },
    primary: {
      main: string;
      light: string;
      dark: string;
    }
    mode: 'light' | 'dark';
  };
  background: {
    light: string;
    dark: string;
  };
}
