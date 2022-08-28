import React from 'react';
import GlobalTypography from '@/Modules/Common/components/GlobalTypography';

interface IPageTitleProps {
  title: string;
}

const PageTitle = ({ title }: IPageTitleProps) => {
  return (
    <GlobalTypography align={'center'} fontWeight={500} letterSpacing={6} variant={'h2'} mt={4} fontSize={'3rem'}>
      {title}
    </GlobalTypography>
  );
};

export default PageTitle;