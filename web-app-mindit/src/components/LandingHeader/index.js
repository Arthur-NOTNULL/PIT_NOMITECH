import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

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
              <Link className="btn-Entrar" to="/login">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                  ENTRAR
                </motion.button>
              </Link>
            </div>
          </Wrapper>
      </Container>
  );
}

export default LandingHeader;