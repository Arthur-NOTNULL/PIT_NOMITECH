import React from 'react';

import { Main, Section } from './styles';

import LandingHeader from '../../components/LandingHeader';
import LandingMobileHeader from '../../components/LandingMobileHeader';
import HeroeSection from '../../components/HeroeSection';

import GlobalStyles from '../../styles/GlobalStyles';

function LandingPage() {
  return (
      <>
        <GlobalStyles/>

        <LandingHeader/>
        <LandingMobileHeader/>
        <Main>
          <Section className="horoe">
            <HeroeSection 
              title="O futuro é feito de" 
              strongTitle="ideias"
              text="Ligamos o empreendor e o investidor de maneira rápida e simples" 
            />
          </Section>
        </Main>
      </>
  );
}

export default LandingPage;