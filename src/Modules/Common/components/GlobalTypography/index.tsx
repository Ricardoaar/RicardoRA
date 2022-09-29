import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import MuiThemeProps from '@/typing/common/ThemeProps';
import GlobalTypographyProps from '@/typing/common/GlobalTypographyProps';


const GlobalTypography = ({ children, colorVariant = 'primary', ...props }: GlobalTypographyProps) => {
  const { palette: { texts, mode, aux, secondaryText } }: MuiThemeProps = useTheme();

  const color = useMemo(() => {
    const variantColors = {
      auxiliary: aux,
      secondary: secondaryText,
      primary: texts,
    };
    return variantColors[colorVariant][mode];
  }, [colorVariant, mode]);

  return (
    <Typography sx={{ background: 'transparent' }} color={color} {...props} >
      {children}
    </Typography>
  );
};

export default GlobalTypography;
