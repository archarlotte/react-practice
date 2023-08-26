import React, { memo } from 'react';
import styled from 'styled-components';
import LongForItem from './app-header/LongForItem';
import SectionHeader from './room/RoomSectionHeader';
import ScrollView from './scroll-view/ScrollView';

const LongForWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: -8px;
`;
const LongFor = memo((props) => {
  const { infoData } = props;
  console.log(infoData);
  return (
    <LongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="content">
        <ScrollView>
          {infoData.list.map((item, index) => {
            return <LongForItem itemData={item} />;
          })}
        </ScrollView>
      </div>
    </LongForWrapper>
  );
});

export default LongFor;
