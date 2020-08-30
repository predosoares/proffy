import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import { Container, TopBar, Button, ButtonIcon, Logo, Title, Header } from './styles';

interface PageHeaderProps {
  title?: string;
  headerButton?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerButton, children }) => {
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <Button onPress={handleGoBack}>
          <ButtonIcon source={backIcon} resizeMode='contain' />
        </Button>

        <Logo source={logoImg} resizeMode='contain' />
      </TopBar>

      <Header>
        <Title>{title}</Title>
        { headerButton }
      </Header>

      { children }
    </Container>
  );
}

export default PageHeader;
