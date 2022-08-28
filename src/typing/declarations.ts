import MuiThemeProps from '@/typing/common/ThemeProps';

declare module '@emotion/react' {
  interface Theme extends MuiThemeProps {
  }
}

declare module '@mui/material/styles' {
  interface Theme extends MuiThemeProps {
  }

  interface Palette {
    texts: Palette['primary'];
    secondaryText: Palette['primary'];
    aux: Palette['primary'];
  }

  interface PaletteOptions {
    texts: PaletteOptions['primary'];
    secondaryText: PaletteOptions['primary'];
    aux: PaletteOptions['primary'];
  }

  interface ThemeOptions {
    background: {
      light: string;
      dark: string;
    };
  }

}
