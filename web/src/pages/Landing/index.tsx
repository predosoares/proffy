import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import landingImg from '../../assets/landing.svg';

import classIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';


import { Container, LandingContent, Banner, LogoContainer, ButtonContainer, TotalConnections } from './styles';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connection').then(response => setTotalConnections(response.data.total));
  }, [])

  return (
    <Container>
      <LandingContent>
        <LogoContainer>
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <Banner src={landingImg} alt="Plataforma de estudos"/>

        <ButtonContainer>
          <Link to='/study'>
            <img src={classIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to='/give-classes'>
            <img src={giveClassesIcon} alt="Dê aulas"/>
            Dar aulas
          </Link>

        </ButtonContainer>

        <TotalConnections>
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
        </TotalConnections>

      </LandingContent>
    </Container>
  );
}

export default Landing;
