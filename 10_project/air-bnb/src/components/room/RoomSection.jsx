import styled from '@emotion/styled';
import React, { memo } from 'react';
import RoomFooter from './RoomFooter';
import RoomItem from './RoomItem';
import SectionHeader from './RoomSectionHeader';

const RoomSectionWrapper = styled.div`
  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: -8px;
  }
`;

const RoomSection = memo((props) => {
  const { roomData } = props;

  return (
    <RoomSectionWrapper>
      <SectionHeader title={roomData?.title} subtitle={roomData?.subtitle} />
      <div className="content">
        {roomData?.list?.slice(0, 8).map((item) => {
          return <RoomItem itemData={item} />;
        })}
      </div>
      <RoomFooter />
    </RoomSectionWrapper>
  );
});

export default RoomSection;
