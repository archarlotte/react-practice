import React, { memo } from 'react';
import styled from 'styled-components';

const RoomFooterWrapper = styled.div``;
const RoomFooter = memo((props) => {
  const { name } = props;

  console.log(name);
  return (
    <RoomFooterWrapper>
      <div className="info">{name ? <span>显示更多{name}</span> : <span>显示全部</span>}</div>
    </RoomFooterWrapper>
  );
});

export default RoomFooter;
