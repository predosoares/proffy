import React from 'react';
import { useNavigation } from '@react-navigation/native';

import backgroundImg from '../../assets/images/give-classes-background.png';

import { Container, BackgroundBanner, Title, Description, Button, TextButton } from './styles';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <BackgroundBanner resizeMode="contain" source={backgroundImg}>
        <Title>Quer ser um Proffy</Title>
        <Description>Para começar, você precisa se cadastrar na nossa plataforma web.</Description>
      </BackgroundBanner>

      <Button onPress={handleGoBack}>
        <TextButton>Tudo bem</TextButton>
      </Button>
    </Container>
  );
}

export default GiveClasses;
