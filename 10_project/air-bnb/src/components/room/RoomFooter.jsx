import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RoomFooterWrapper = styled.div``;

const RoomFooter = memo((props) => {
  const { name } = props;
  const naviagate = useNavigate();
  const clickShow = () => {
    naviagate('/entire');
  };
  return (
    <RoomFooterWrapper>
      <div className="info" onClick={clickShow}>
        {name ? <span>显示更多{name}</span> : <span>显示全部</span>}
      </div>
    </RoomFooterWrapper>
  );
});

export default RoomFooter;
