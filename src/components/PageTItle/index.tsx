import React from 'react';
import { Typography } from '@mui/material';

interface IPageTitleProps {
  title: string;
}

const PageTitle = ({ title }: IPageTitleProps) => {
  return (
    <Typography align={'center'} fontWeight={500} letterSpacing={6} variant={'h2'} mt={4}>
      {title}
    </Typography>
  );
};

export default PageTitle;
