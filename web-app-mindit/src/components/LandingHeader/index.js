import React from 'react';

import { Container, Wrapper } from './styles';
import Logo from '../../assets/logo.svg';

function LandingHeader() {
  return (
      <Container>
          <Wrapper>
            <div className="left">
                <img src={Logo} alt="logo"/>
                <a href="#">HOME</a>
            </div>
            <div className="right">
                <button type="button">ENTRAR</button>
            </div>
          </Wrapper>
      </Container>
  );
}

export default LandingHeader;