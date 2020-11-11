import React from 'react';

import { Grid } from './styles';

import ServerList from '../../../components/ServerList';
import ServerName from '../../../components/ServerName';
import ChannelInfo from '../../../components/ChannelInfo';
import UserInfo from '../../../components/UserInfo';
import ChannelList from '../../../components/ChannelList';
import ChannelData from '../../../components/ChannelData';

import GlobalStyles from '../../../styles/GlobalStyles';

function Home() {
  return (
      <>
        <GlobalStyles/>
        <Grid>
            <ServerList/>
            <ServerName/>
            <ChannelInfo/>
            <UserInfo/>
            <ChannelList/>
            <ChannelData/>
        </Grid>
      </>
  );
}

export default Home;