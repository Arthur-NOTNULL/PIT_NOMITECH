import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import {Button} from './styles';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const variantsUl = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

export const MenuItem = () => {
  return (
      <motion.ul variants={variantsUl}>
          <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
          <Link to="/login">
            <Button>ENTRAR</Button>
          </Link>
        </motion.li>
      </motion.ul>
  );
};