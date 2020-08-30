import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 0.8rem;

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content:'';
    background: var(--color-primary-light);
    
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0.8rem;
  }

  & + div {
    margin-top: 2.4rem;
  }

  & > label {
    font-size: 1.4rem;
    color: var(--color-text-in-primary);
  }

  & > textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;
  }

  @media(min-width: 700px){
    /* & + div {
      margin-top: 0;
    } */
  }
`;