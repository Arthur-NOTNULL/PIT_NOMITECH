import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Container, Wrapper } from './styles';

import LoginIMG from '../../assets/FogueteDecolante.svg';

import GlobalStyles from '../../styles/GlobalStyles';

function LoginPage() {
  return (
      <>
        <GlobalStyles/>
        <Container>
            <img src={LoginIMG} alt="LoginIMG"/>
            <Wrapper>

            </Wrapper>
        </Container>
      </>
  );
}

export default LoginPage;