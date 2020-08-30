import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  ButtonPrimary,
  ButtonSecundary,
  ButtonIcon,
  ButtonText,
  TotalConnections
} from './styles';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connection').then(response => setTotalConnections(response.data.total));
  }, [])

  const navigation = useNavigation();

  function handleNavigationToGiveClassesPage() {
    navigation.navigate('GiveClasses');
  }

  function handleNavigationToStudyPages() {
    navigation.navigate('Study');
  }

  return (
    <Container>
      <Banner resizeMode="contain" source={landingImg} />

      <Title>Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <ButtonPrimary onPress={handleNavigationToStudyPages}>
          <ButtonIcon source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>

        <ButtonSecundary onPress={handleNavigationToGiveClassesPage} >
          <ButtonIcon source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </ButtonSecundary>
      </ButtonsContainer>


      <TotalConnections>
        Total de {totalConnections} conexões já realizadas {' '}
        <ButtonIcon source={heartIcon} />
      </TotalConnections>
    </Container>
  );
}

export default Landing;
