import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';

import {
  Container,
  ScrollView,
  SearchForm,
  LabelText,
  TextInput,
  InputGroup,
  InputBlock,
  HeaderButton,
  SubmitButton,
  SubmitButtonText
} from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const updatedFavorites = JSON.parse(response).map((favorite: ITeacher) => (favorite.id))
        setFavorites(updatedFavorites);
      }
    });
  }

  function handleFiltersSubmit() {
    loadFavorites();

    api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    }).then(response => {
      setIsFiltersVisible(false);
      setTeachers(response.data);
    })
  }

  function handleToggleFilterVisible(){
    setIsFiltersVisible(!isFiltersVisible);
  }

  useFocusEffect(() => {
    loadFavorites();
  })

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerButton={
          <HeaderButton onPress={handleToggleFilterVisible} >
            <Feather name="filter" size={20} color="#fff"/>
          </HeaderButton>
        }
      >

        { isFiltersVisible &&(
        <SearchForm>
          <LabelText>Matéria</LabelText>
          <TextInput
            onChangeText={text => setSubject(text)}
            placeholder="Qual é a matéria?"
            placeholderTextColor="#c1bccc"
          />

          <InputGroup>
            <InputBlock>
              <LabelText>Dia da semana</LabelText>
              <TextInput
                onChangeText={text => setWeekDay(text)}
                placeholder="Qual o dia?"
                placeholderTextColor="#c1bccc"
              />

            </InputBlock>
            <InputBlock>
              <LabelText>Horário</LabelText>
              <TextInput
                onChangeText={text => setTime(text)}
                placeholder="Qual é?"
                placeholderTextColor="#c1bccc"
              />

            </InputBlock>
          </InputGroup>

          <SubmitButton onPress={handleFiltersSubmit}>
            <SubmitButtonText>Filtrar</SubmitButtonText>
          </SubmitButton>
        </SearchForm>
        )}

      </PageHeader>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {teachers.map((teacher: ITeacher) => {
          return <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        })}
      </ScrollView>
    </Container>
  );
}

export default TeacherList;
