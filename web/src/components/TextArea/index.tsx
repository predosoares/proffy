import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, ...rest }) => {

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest}/>
    </Container>
  );
}

export default TextArea;