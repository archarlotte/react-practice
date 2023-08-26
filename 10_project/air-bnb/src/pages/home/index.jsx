import React, { memo } from 'react';
import styled from 'styled-components';
import HomeBanner from './HomeBanner';
import HomeContent from './HomeContent';

const HomeWrapper = styled.div``;

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner />
      <HomeContent />
    </HomeWrapper>
  );
});

export default Home;
