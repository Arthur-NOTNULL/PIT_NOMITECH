import React from 'react';

import { Container, ArrowIcon } from './styles';

function ChannelButton({ channelName, selected }) {
  return (
    <Container className={selected ? 'active' : ''}>
        <div>
            <span>{channelName}</span>
        </div>

        <div>
            <ArrowIcon className="arrow-icon"/>
        </div>
    </Container>
  );
}

export default ChannelButton;