import React from 'react';

import { Container, Wrapper } from './styles';
import Logo from '../../../assets/logo.svg';

const DesktopHeader = () => {
    return (
        <Container>
            <Wrapper>
                <div className="left">
                    <img src={Logo} alt="logo"/>
                    <span>HOME</span>
                </div>
                <div className="right">
                    <button type="button">ENTRAR</button>
                </div>
            </Wrapper>
        </Container>
    );
}

export default DesktopHeader;