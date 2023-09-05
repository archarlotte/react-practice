import classNames from 'classnames';
import React, { memo } from 'react';
import styled from 'styled-components';
import HeaderCenter from './c-cpns/header-center';
import HeaderLeft from './c-cpns/header-left';
import HeaderRight from './c-cpns/header-right';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  /* height: 80px; */
  border-bottom: 1px solid #eee;
  padding: 0 40px;
  background-color: #fff;

  &.fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9;
  }
`;
const AppHeader = memo((props) => {
  const { isFixed } = props;
  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default AppHeader;
