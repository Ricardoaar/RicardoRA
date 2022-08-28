import { TypographyProps } from '@mui/material';

export default interface GlobalTypographyProps extends TypographyProps {
  colorVariant?: 'auxiliary' | 'secondary' | 'primary';
}
