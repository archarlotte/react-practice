import React, { memo } from 'react';
import styled from 'styled-components';
import coverImg from '@/assets/cover_01.jpeg';

const HomeBannerWrapper = styled.div`
  height: 529px;
  background: url(${coverImg}) center/cover;
`;

const HomeBanner = memo(() => {
  return (
    <HomeBannerWrapper>
      HomeBanner
      <div>
        ddd<div></div>
      </div>
    </HomeBannerWrapper>
  );
});

export default HomeBanner;
