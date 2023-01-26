import React from 'react';
import styled from '@emotion/styled';
import GlobalTypography from '@/Modules/Common/components/GlobalTypography';


const ProjectsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 75%;
  overflow: auto;
  min-height: 320px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }

  //Change the scroll bar
  &::-webkit-scrollbar {
    width: 0.5rem;
    background-color: #f5f5f5;
    height: 0.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1410b0;
  }

  &::-webkit-scrollbar-track {
    background-color: rgb(114, 151, 252);
  }

`;

const StyledCard = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  height: 300px;
  background: rgba(42, 61, 102, 0.78);
  border-radius: 10px;
`;


const StyledCardBody = styled.div`
  //min-height: 400px;
  width: 100%;
`;
type CardProps = {
  image: string;
  header: string;
  footer: string;
}

const Card = ({ image, header, footer }: CardProps) => {
  return (
    <StyledCard>
      <GlobalTypography>
        <h2>{header}</h2>
      </GlobalTypography>
      <StyledCardBody>
        <img src={image} alt={header} />
      </StyledCardBody>
      <p>{footer}</p>
    </StyledCard>
  );
};

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <CardContainer>
        <Card header={'Captain Avocados'} />
        <Card header={'Captain Launches'} />
        <Card header={'Super Store'} />

        <Card header={'Get Hired'} />

        <Card header={'PHP Store'} />
        <Card header={'Pokedex'} footer={'Card description'} />
      </CardContainer>

    </ProjectsContainer>
  );
};

export default Projects;
