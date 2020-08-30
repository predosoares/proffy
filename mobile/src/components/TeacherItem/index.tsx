import React, { useState } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  NameText,
  SubjectText,
  BioText,
  Footer,
  CostText,
  PriceValueText,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ButtonIcon,
  ButtonText,
} from './styles';

import api from '../../services/api';

export interface ITeacher {
  id: string;
  name: string;
  avatar: string;
  subject: string;
  bio: string;
  whatsapp: string;
  cost: string;
}

interface TeacherItemsProps {
  teacher: ITeacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemsProps> = ({ teacher, favorited, ...rest }) => {
  const [isFavorited, setIsFavotired] = useState(favorited);

  function handleLinkToWhatsapp(){
    api.post('connection', {
      user_id: teacher.id,
    })

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites){
      favoritesArray = JSON.parse(favorites);
      console.log(favoritesArray);
    }

    if (isFavorited){
      const favoritedIndex = favoritesArray.findIndex(
        (favorited: ITeacher) => favorited.id === teacher.id
      );

      setIsFavotired(false);
      favoritesArray.splice(favoritedIndex, 1);
    } else {
      favoritesArray.push(teacher);

      setIsFavotired(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <Container {...rest} >
      <Profile>
        <Avatar source={{ uri:teacher.avatar }} />

        <ProfileInfo>
          <NameText>{teacher.name}</NameText>
          <SubjectText>{teacher.subject}</SubjectText>
        </ProfileInfo>
      </Profile>

      <BioText>
        {teacher.bio}
      </BioText>

      <Footer>
        <CostText>
          Preço/Hora {'   '}
          <PriceValueText>R$ {teacher.cost}</PriceValueText>
        </CostText>

        <ButtonsContainer>

          <FavoriteButton
            onPress={handleToggleFavorite}
            favorited={isFavorited}
          >
            { isFavorited
              ? <ButtonIcon  source={unfavoriteIcon}/>
              : <ButtonIcon  source={heartOutlineIcon}/>
            }
          </FavoriteButton>

          <ContactButton onPress={handleLinkToWhatsapp}>
            <ButtonIcon source={whatsappIcon}/>
            <ButtonText>Entrar em contato</ButtonText>
          </ContactButton>

        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

export default TeacherItem;
