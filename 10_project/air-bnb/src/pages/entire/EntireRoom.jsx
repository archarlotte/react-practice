import RoomItem from '@/components/room/RoomItem';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const EntireRoomWrapper = styled.div`
  position: relative;
  >.title {
    font-size: 22px;
    padding: 8px;
  }
  >.content {
    display: flex;
    flex-wrap: wrap;
  }
  .white-cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const EntireRoom = memo((props) => {
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading,
  }));
  return (
    <EntireRoomWrapper>
      <div className="title">{totalCount}</div>
      <div className="content">
        {roomList?.map((item) => {
          return <RoomItem itemData={item} width={'20%'} />;
        })}
      </div>
      {isLoading && <div className="white-cover"></div>}
    </EntireRoomWrapper>
  );
});

EntireRoom.propTypes = {};

export default EntireRoom;
