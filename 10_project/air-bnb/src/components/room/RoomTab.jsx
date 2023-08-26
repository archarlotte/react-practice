import React, { memo, useState } from 'react';
import ScrollView from '../scroll-view/ScrollView';
import classNames from 'classnames';
import styled from 'styled-components';

const RoomTabWrapper = styled.div`
  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    border: 1px solid #767676;
    text-align: center;
    padding: 14px 16px;
    margin: 4px;

    &.active {
      color: white;
      background-color: #008489;
    }
  }
`;
const RoomTab = memo((props) => {
  const { cityList, selectedCity } = props;
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);

  const selectItem = (index, name) => {
    setSelectedCityIndex(index);
    selectedCity(name);
  };

  return (
    <RoomTabWrapper>
      <ScrollView>
        {cityList.map((item, index) => {
          return (
            <div
              className={classNames('item', { active: index === selectedCityIndex })}
              key={index}
              onClick={() => selectItem(index, item)}>
              {item}
            </div>
          );
        })}
      </ScrollView>
    </RoomTabWrapper>
  );
});

export default RoomTab;
