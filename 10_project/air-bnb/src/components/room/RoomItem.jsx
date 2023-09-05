import { Rating } from '@mui/material';
import React, { memo, useRef, useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import Slider from 'react-slick';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '../Indicator';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeDetailContent } from '@/store/detailAction';

const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.itemwidth};
  padding: 8px;
  margin: 8px 0;
  flex-shrink: 0;

  .inner {
    width: 100%;
  }
  .slider {
    position: relative;
    cursor: pointer;

    .indicator {
      position: absolute;
      z-index: 9;
      bottom: 10px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 30%;
      overflow: hidden;

      .dot-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }

    &:hover {
      .control {
        display: flex;
        justify-content: space-between;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: none;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 63px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }
  }

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

  > .title {
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
  const carouselRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (isRight, e) => {
    let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1;
    if (newIndex < 0) {
      newIndex = itemData?.picture_urls.length - 1;
    }
    if (newIndex > itemData?.picture_urls.length - 1) {
      newIndex = 0;
    }
    setSelectedIndex(newIndex);
    isRight ? carouselRef?.current?.next() : carouselRef?.current?.prev();
    e.stopPropagation();
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toDetail = (details) => {
    dispatch(changeDetailContent(details));
    navigate('/detail');
  };
  return (
    <RoomItemWrapper itemwidth={width}>
      <div className="inner">
        {itemData?.picture_urls ? (
          <div className="slider" onClick={(e) => toDetail(itemData)}>
            <div className="indicator">
              <Indicator index={selectedIndex}>
                {itemData?.picture_urls?.map((item, index) => {
                  return (
                    <div className="dot-item">
                      <span className={classnames('dot', { active: selectedIndex === index })}></span>
                    </div>
                  );
                })}
              </Indicator>
            </div>
            <div className="control">
              <div className="btn left" onClick={(e) => handleClick(false, e)}>
                <IconArrowLeft />
              </div>
              <div className="btn right" onClick={(e) => handleClick(true, e)}>
                <IconArrowRight />
              </div>
            </div>
            <Carousel dots={false} ref={carouselRef}>
              {itemData?.picture_urls?.map((item) => {
                return (
                  <div className="cover">
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        ) : (
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        )}

        <div className="title">{itemData.verify_info.messages.join(' . ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}/night</div>
        <div className="rating">
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
      </div>
    </RoomItemWrapper>
  );
});

export default RoomItem;
