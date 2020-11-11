import React from 'react';

import { Button } from './styles';

import Logo from '../../assets/logo.svg';

function ServerButton({
    selected,
    isHome,
    mentions,
}) {
  return (
    <Button
      isHome={isHome}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  );
}

export default ServerButton;