import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, Separator } from './styles';

function ChannelList() {
  return (
    <Container>
        <Category>
            <span>CATEGORIAS</span>
        </Category>

        <ChannelButton channelName="Saúde"/>
        <ChannelButton channelName="Tecnologia"/>
        <ChannelButton channelName="Educação"/>
        <ChannelButton channelName="Inclusão Social"/>
        <ChannelButton channelName="Meio Ambiente"/>

        <Separator/>

        <Category>
            <span>MINHAS EMPRESAS</span>
        </Category>
  
        <ChannelButton channelName="MindIt"/>

    </Container>
  );
}

export default ChannelList;