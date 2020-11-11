import React from 'react';

import ServerButton  from '../ServerButton';

import { Container, Separator } from './styles';

function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton mentions={3}/>
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={343}/>
      <ServerButton />
      <ServerButton mentions={72}/>
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={2}/>
      <ServerButton mentions={80}/>
      <ServerButton />
      <ServerButton mentions={1000}/>
      <ServerButton />
    </Container>
  );
}

export default ServerList;