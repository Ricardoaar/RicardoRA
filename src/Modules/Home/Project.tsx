import React from 'react';
import styled from '@emotion/styled';
import GlobalTypography from '@/Modules/Common/components/GlobalTypography';


const ProjectsContainer = styled.div`
  display: flex;
  gap: 1rem;
  //flex-wrap: wrap;
  width: 60%;
  overflow: auto;
  min-height: 400px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
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


const Projects = () => {
  return (
    <ProjectsContainer>
      <Card header={'Captain Avocados'} />
      <Card header={'Captain Launches'} />
      <Card header={'Super Store'} />

      <Card header={'Get Hired'} />

      <Card header={'PHP Store'} />
      <Card header={'Pokedex'} footer={'Card description'} />
    </ProjectsContainer>
  );
};

export default Projects;
