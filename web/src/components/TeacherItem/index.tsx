import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import { Container, TeacherItemHeader, TeacherItemFooter } from './styles';
import api from '../../services/api';

export interface TeacherItemProps {
  id: string;
  name: string;
  avatar: string;
  subject: string;
  bio: string;
  whatsapp: string;
  cost: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ id, name, avatar, subject, bio, cost, whatsapp }) => {

  function createConnection(){
    api.post('/connection', {
      user_id: id,
    })
  }

  return (
    <Container>
      <TeacherItemHeader>
        <img src={avatar} alt={name}/>
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </TeacherItemHeader>

      <p>{bio}</p>

      <TeacherItemFooter>
        <p>Preço/hora <strong>R$ {cost}</strong></p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={createConnection}
          href={`https://wa.me/${whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </TeacherItemFooter>
    </Container>
  );
}

export default TeacherItem;
