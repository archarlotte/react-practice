import React, { memo } from 'react';
import styled from 'styled-components';

const LongForItemWrapper = styled.div`
  box-sizing: border-box;
  width: 20%;
  margin: 8px 0;

  .inner {
    position: relative;
    padding: 8px;
  }

  .cover {
    width: 100%;
  }
`;
const LongForItem = memo((props) => {
  const { itemData } = props;

  return (
    <LongForItemWrapper>
      <div className="inner">
        <img className="cover" src={itemData.picture_url} alt="" />
        <div className="city">{itemData.city}</div>
        <div className="price">{itemData.price}</div>
      </div>
    </LongForItemWrapper>
  );
});

export default LongForItem;
