import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import PictureBrowser from './PictureBrowser';

const DetailPicturesWrapper = styled.div`
  display: flex;
  height: 550px;
  position: relative;

  &:hover {
    .cover {
      opacity: 1 !important;
    }

    .item:hover {
      .cover {
        opacity: 0 !important;
      }
    }
  }

  .left,
  .right {
    width: 50%;
    height: 100%;

    .item {
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: transform 0.3s ease-in;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2);
        opacity: 0;
        transition: opacity 200ms ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
    }
  }

  .view-all {
    position: absolute;
    right: 15px;
    bottom: 10px;
    background-color: #fff;
    cursor: pointer;
  }
`;

const DetailPictures = memo((props) => {
  const { pictureUrls } = props;
  const [showBrowser, setShowBrowser] = useState(false);

  return (
    <DetailPicturesWrapper>
      <div className="left">
        <div className="item">
          <img src={pictureUrls[0]} alt="" />
          <div className="cover"></div>
        </div>
      </div>
      <div className="right">
        {pictureUrls.slice(1, 5).map((item) => {
          return (
            <div className="item" key={item}>
              <img src={item} alt="" />
              <div className="cover"></div>
            </div>
          );
        })}
      </div>
      <div className="view-all" onClick={() => setShowBrowser(true)}>
        查看全部
      </div>
      {showBrowser && <PictureBrowser closeBroswer={() => setShowBrowser(false)} pictureUrls={pictureUrls} />}
    </DetailPicturesWrapper>
  );
});

DetailPictures.propTypes = {};

export default DetailPictures;
