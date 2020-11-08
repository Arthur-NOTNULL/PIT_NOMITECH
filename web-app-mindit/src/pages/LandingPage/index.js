import React from 'react';

import { Container } from './styles';

import LandingHeader from '../../components/LandingHeader';
import LandingMobileHeader from '../../components/LandingMobileHeader';

import GlobalStyles from '../../styles/GlobalStyles';

function LandingPage() {
  return (
      <>
        <GlobalStyles/>
        <Container>
            <LandingHeader/>
            <LandingMobileHeader/>
            
            <h1>Hello Landing Page</h1>
        </Container>
      </>
  );
}

export default LandingPage;