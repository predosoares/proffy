import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const LandingContent = styled.div`
  width: 90vw;
  max-width: 700px;

  @media(min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total"
  }
`;

export const Banner = styled.img`
  width: 100%;

  @media(min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  & > img {
    height: 10rem;
  }

  & > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media(min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;

    & > img {
      height: 100%;
    }

    & > h2 {
      font-size: 3.6rem;
      text-align: initial;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 3.2rem 0;

  & > a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font: 700 2.0rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;
  }

  & > a:first-child {
    margin-right: 1.6rem;
    background: var(--color-primary-lighter);

    &:hover {
      background: var(--color-primary-light);
    }
  }

  & > a:last-child {
    margin-right: 1.6rem;
    background: var(--color-secundary);

    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  & > img {
    width: 4rem;
  }

  @media(min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    & > a {
      font-size: 2.4rem;

      & > img {
      margin-right: 2.4rem;
      }
    }
  }
`;

export const TotalConnections = styled.div`
  font-size: 1.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    margin-left: 0.8rem;
  }

  @media(min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`;

