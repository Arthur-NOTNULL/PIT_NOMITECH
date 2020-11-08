import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Container, Wrapper } from './styles';
import LandImg from '../../assets/LandingIMG.svg';

const HeroeSection = ({title, strongTitle, text}) => {
  return (
    <Container>
      <Wrapper>
        <div className="action-area">
          <h2>{title} <strong>{strongTitle}</strong></h2>
          <p>{text}</p>
          <Link to="/login" className="btn-Entrar">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ENTRAR 
              <motion.div>
                  <FiArrowRight color="rbg(0,0,0)" size={28}/>
              </motion.div>
            </motion.button>
          </Link>
        </div>
        <div className="image-area">
          <img src={LandImg} alt="LandIMG"/>
        </div>
      </Wrapper>
    </Container>
  );
};

export default HeroeSection;
