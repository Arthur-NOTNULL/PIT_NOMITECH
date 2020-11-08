import React from 'react';
import { motion, useCycle } from 'framer-motion';

import { Container, Wrapper} from './styles';
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from "./MenuItem";

import Logo from '../../assets/logo.svg';

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 100px 71px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 1000px 71px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
};

function LandingMobileHeader() {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <Container>
          <Wrapper>
            <img src={Logo} alt="logo"/>
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <MenuItem/>
              <MenuToggle toggle={() => toggleOpen()} />
              <motion.div className="background" variants={sidebar} />
            </motion.nav>
          </Wrapper>
        </Container>       
    );
}

export default LandingMobileHeader;