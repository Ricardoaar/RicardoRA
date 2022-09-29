import React from 'react';
import PageTitle from '@/Modules/Common/components/PageTItle';
import { FormattedMessage } from 'react-intl';
import GlobalTypography from '@/Modules/Common/components/GlobalTypography';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;


const StyledIntroContainer = styled.div`
  text-align: center;
  padding: 1rem;
  background: ${({ theme }) => {
    return theme.palette.primary[theme.palette.mode];
  }};
`;

const StyledMainContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 100px auto;
  justify-content: center;
  gap: 20rem;
`;

const StyledContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;


const Introduction = () => {
  return <StyledContainer maxWidth='sm'>
    <StyledIntroContainer>
      <GlobalTypography>
        <FormattedMessage id={'home.intro'} defaultMessage={'Intro'} />
      </GlobalTypography>
    </StyledIntroContainer>
  </StyledContainer>;
};


const Contact = () => {
  return (

    <StyledContactContainer>
      <GlobalTypography>
        <FormattedMessage id={'home.contact'} defaultMessage={'contact'} />
      </GlobalTypography>
      <div>cats
        <FontAwesomeIcon icon={'twitter'} />
      </div>
      <GlobalTypography>
        <a href='' target={'_blank'}>@Ricrdra</a>
      </GlobalTypography>
    </StyledContactContainer>
  );
};

const Skills = () => {
  return (<GlobalTypography>
    <FormattedMessage id={'home.contact'} defaultMessage={'contact'} />
  </GlobalTypography>);
};

const Main = () => {
  return <StyledMainContainer>
    <Contact />
    <Skills />
  </StyledMainContainer>;
};


const Home = () => {

  return (
    <>
      <PageTitle title={'Ricardo RA'} />
      <Introduction />
      <Main />
    </>

  );
};

export default Home;
