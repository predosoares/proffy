import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { TeacherItemProps } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, Form, Main } from './styles';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState<TeacherItemProps[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function searchTeachers(event: FormEvent) {
    event.preventDefault();

    api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    }).then(response => {
      setTeachers(response.data);
    })
  }

  return (
    <Container className="container">
        <PageHeader title="Estes são os proffys disponíveis.">
          <Form onSubmit={searchTeachers}>

            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={[
                { value: 'Artes', label: 'Artes'},
                { value: 'Biologia', label: 'Biologia'},
                { value: 'Ciências', label: 'Ciências'},
                { value: 'Educação Física', label: 'Educação Física'},
                { value: 'Física', label: 'Física'},
                { value: 'Geografia', label: 'Geografia'},
                { value: 'História', label: 'História'},
                { value: 'Matemática', label: 'Matemática'},
                { value: 'Português', label: 'Português'},
                { value: 'Química', label: 'Química'},
              ]}
            />

            <Select
              name="week-day"
              label="Dia da semana"
              value={week_day}
              onChange={e => setWeekDay(e.target.value)}
              options={[
                { value: '0', label: 'Domingo'},
                { value: '1', label: 'Segunda-feira'},
                { value: '2', label: 'Terça-feira'},
                { value: '3', label: 'Quarta-feira'},
                { value: '4', label: 'Quinta-feira'},
                { value: '5', label: 'Sexta-feira'},
                { value: '6', label: 'Sábado'},
              ]}
            />

            <Input
              type="time"
              name="time"
              label="Hora"
              value={time}
              onChange={e => setTime(e.target.value)}
            />

            <button type="submit">Buscar</button>

          </Form>
        </PageHeader>

        <Main>
          {teachers.map(teacher =>
            <TeacherItem
              key={teacher.id}
              id={teacher.id}
              name={teacher.name}
              avatar={teacher.avatar}
              subject={teacher.subject}
              bio={teacher.bio}
              whatsapp={teacher.whatsapp}
              cost={teacher.cost}
            />
          )}
        </Main>
    </Container>
  );
}

export default TeacherList;
