import styled from '@emotion/styled';
import React, { memo, useCallback, useState } from 'react';
import RoomFooter from './RoomFooter';
import RoomItem from './RoomItem';
import SectionHeader from './RoomSectionHeader';
import RoomTab from './RoomTab';

const RoomSectionWithTabWrapper = styled.div`
  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: -8px;
  }
`;

const RoomSectionWithTab = memo((props) => {
  const { roomData } = props;
  const cityList = Object.keys(roomData.dest_list);
  const [city, setCity] = useState(cityList[0]);

  const selectedCity = useCallback(function (cityName) {
    setCity(cityName);
  }, []);

  return (
    <RoomSectionWithTabWrapper>
      <SectionHeader title={roomData?.title} subtitle={roomData?.subtitle} />
      <RoomTab cityList={cityList} selectedCity={selectedCity} />
      <div className="content">
        {roomData?.dest_list[city].map((item) => {
          return <RoomItem itemData={item} width={'33.33%'} />;
        })}
      </div>
      <RoomFooter name={city} />
    </RoomSectionWithTabWrapper>
  );
});

export default RoomSectionWithTab;
