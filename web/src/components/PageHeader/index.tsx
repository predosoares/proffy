import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import backIcon from '../../assets/icons/back.svg';

import { Header, TopBar, HeaderContent } from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title , description, children }) => {
  return (
    <Header>
      <TopBar>
        <Link to="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>

        <img src={logoImg} alt="Prof"/>

      </TopBar>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </HeaderContent>
    </Header>
  );
}

export default PageHeader;
