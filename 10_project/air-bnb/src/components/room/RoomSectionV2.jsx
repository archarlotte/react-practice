import styled from '@emotion/styled';
import React, { memo } from 'react';
import ScrollView from '../scroll-view/ScrollView';
import RoomFooter from './RoomFooter';
import RoomItem from './RoomItem';
import SectionHeader from './RoomSectionHeader';

const RoomSectionV2Wrapper = styled.div`
  .content {
    display: flex;
    justify-content: space-between;
    margin: -8px;
  }
`;

const RoomSectionV2 = memo((props) => {
  const { infoData } = props;

  return (
    <RoomSectionV2Wrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
      <div className="content">
        <ScrollView>
          {infoData?.list?.map((item) => {
            return <RoomItem itemData={item} width="20%" />;
          })}
        </ScrollView>
      </div>
    </RoomSectionV2Wrapper>
  );
});

export default RoomSectionV2;
