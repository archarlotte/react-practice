import { Rating } from '@mui/material';
import React, { memo } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.itemwidth};
  padding: 8px;
  margin: 8px 0;
  flex-shrink: 0;

  .cover {
    box-sizing: border-box;
    position: relative;
    padding: 100% 0 0;
    overflow: hidden;
    border-radius: 10px;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slick-slide img {
    /* position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 99; */
  }
  .slick-next {
  }
  */ > .title {
    padding-top: 4px;
  }

  .name {
    font-weight: 600;
    padding-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    padding-top: 4px;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 1px;
  }
`;

const RoomItem = memo((props) => {
  const { itemData, width = '25%' } = props;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <RoomItemWrapper itemwidth={width}>
      <div className="cover">
        <img src={itemData.picture_url} alt="" />
      </div>
      <div className="title">{itemData.verify_info.messages.join(' . ')}</div>
      <div className="name">{itemData.name}</div>
      <div className="price">{itemData.price_format}/night</div>
      <div className="rating">
        {' '}
        <Rating
          name="read-only"
          value={itemData.star_rating}
          readOnly
          sx={{
            color: '#008489',
            fontSize: 14,
          }}
        />
        {itemData.star_rating} {itemData.bottom_info?.content}
      </div>
    </RoomItemWrapper>
  );
});

export default RoomItem;
