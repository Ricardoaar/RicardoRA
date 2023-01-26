import React from 'react';
import PageTitle from '@/Modules/Common/components/PageTItle';
import { FormattedMessage } from 'react-intl';
import GlobalTypography from '@/Modules/Common/components/GlobalTypography';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import Icon from '@/Modules/Common/components/Icon/Icon';
import Projects from '@/Modules/Home/Project'; // <-- import styles to be used

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
  flex-direction: column;
  margin: 100px auto;
  justify-content: center;
`;
const StyledMainSkillsAndContact = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const StyledContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

`;

const StyledIconsContainer = styled.div`
  display: grid;
  padding-top: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  place-content: center;
  place-items: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

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

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Contact = () => {
  return (
    <StyledContactContainer>
      <GlobalTypography>
        <FormattedMessage id={'home.contact'} defaultMessage={'contact'} />
      </GlobalTypography>
      <StyledIconsContainer>
        <a href='https://github.com/Ricrdra' target={'_blank'}>
          <Icon names={['brands', 'github-square']} size={2}></Icon>
        </a>
        <a href='https://www.linkedin.com/in/ricrdra/' target={'_blank'}>
          <Icon names={['brands', 'linkedin']} size={2}></Icon>
        </a>
        <a href='https://api.whatsapp.com/send/?phone=5543861758&text&type=phone_number&app_absent=0' target={'_blank'}>
          <Icon names={['brands', 'whatsapp']} size={2}></Icon>
        </a>
      </StyledIconsContainer>
      <GlobalTypography>
        <a href='' target={'_blank'}>@Ricrdra</a>
      </GlobalTypography>
    </StyledContactContainer>
  );
};

const Skills = () => {
  return (
    <StyledContactContainer>
      <GlobalTypography>
        <FormattedMessage id={'home.skills'} defaultMessage={'Skills'} />
      </GlobalTypography>
      <StyledIconsContainer>
        <SkillContainer>
          <GlobalTypography>
            <FormattedMessage id={'skills.react'} defaultMessage={'React'} />
          </GlobalTypography>
          <Icon names={['brands', 'react']} size={2}></Icon>
        </SkillContainer>
        <SkillContainer>
          <GlobalTypography>
            <FormattedMessage id={'skills.js'} defaultMessage={'Javascript'} />
          </GlobalTypography>
          <Icon names={['brands', 'js']} size={2}></Icon>
        </SkillContainer>
        <SkillContainer>
          <GlobalTypography>
            <FormattedMessage id={'skills.python'} defaultMessage={'Python'} />
          </GlobalTypography>
          <Icon names={['brands', 'python']} size={2}></Icon>
        </SkillContainer>
        <SkillContainer>
          <GlobalTypography>
            <FormattedMessage id={'skills.git'} defaultMessage={'Git'} />
          </GlobalTypography>
          <Icon names={['brands', 'git']} size={2}></Icon>
        </SkillContainer>
        <SkillContainer>
          <GlobalTypography>
            <FormattedMessage id={'skills.typescript'} defaultMessage={'typescript'} />
          </GlobalTypography>
          <Icon names={['brands', 'node']} size={2}></Icon>
        </SkillContainer>
        <SkillContainer>
          <GlobalTypography>
            <FormattedMessage id={'skills.sass'} defaultMessage={'Sass'} />
          </GlobalTypography>
          <Icon names={['brands', 'sass']} size={2}></Icon>
        </SkillContainer>
      </StyledIconsContainer>
    </StyledContactContainer>
  );
};

const Main = () => {
  return <StyledMainContainer>
    <Projects />

    <StyledMainSkillsAndContact>
      <Contact />
      <Skills />
    </StyledMainSkillsAndContact>

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
