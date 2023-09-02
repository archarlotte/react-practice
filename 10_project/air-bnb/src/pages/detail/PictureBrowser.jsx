import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/components/Indicator';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import classnames from 'classnames';

const BrowserWrapper = styled.div`
  position: fixed;
  background-color: #333;
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  .closeBtn {
    margin-top: 12px;
    color: #fff;
    cursor: pointer;
    height: 100px;
  }

  .slider {
    flex: 1;
    position: relative;
    .pic {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;

      img {
        width: 105vh;
        height: 100%;
      }
      .picture-enter {
        transform: ${(props) => (props.isNext ? `translateX(100%)` : `translateX(-100%)`)};
        opacity: 0;
      }
      .picture-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 100ms ease;
      }
      .picture-exit {
        opacity: 1;
      }
      .picture-exit-active {
        opacity: 0;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: flex;
      bottom: 0;
      color: #fff;
      justify-content: space-between;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 63px;
        height: 100%;
        cursor: pointer;
      }
    }
  }
  .preview {
    padding-top: 50px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: end;
    .desc {
      display: flex;
      justify-content: space-between;
      color: #fff;
    }

    .info {
      width: 50vw;

      .list {
        overflow: hidden;
        height: ${(props) => (props.showList ? `67px` : 0)};
        transition: height 300ms ease;
      }
      .item {
        padding: 5px;
        width: 50px;
        img {
          opacity: 0.5;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        &.active {
          img {
            opacity: 1;
          }
        }
      }
    }
  }
`;

const PictureBrowser = memo((props) => {
  const { closeBroswer, pictureUrls } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = 'auto');
  }, []);

  const handleClick = (isRight) => {
    console.log(isRight);
    let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1;
    if (newIndex < 0) {
      newIndex = pictureUrls.length - 1;
    }
    if (newIndex > pictureUrls.length - 1) {
      newIndex = 0;
    }
    setSelectedIndex(newIndex);
    setIsNext(isRight);
  };

  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
      <div className="closeBtn" onClick={closeBroswer}>
        <IconArrowLeft width={'2rem'} height={'2rem'} />
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={() => handleClick(false)}>
            <IconArrowLeft />
          </div>
          <div className="btn right" onClick={() => handleClick(true)}>
            <IconArrowRight />
          </div>
        </div>
        <div className="pic">
          {/* <SwitchTransition mode="in-out">
            <CSSTransition key={pictureUrls[selectedIndex]} classNames="picture" timeout={100}> */}
          <img src={pictureUrls[selectedIndex]} alt="" />
          {/* </CSSTransition>
          </SwitchTransition> */}
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {selectedIndex + 1}/{pictureUrls.length}
              </span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              <span>{showList ? `隐藏` : `显示`}照片列表</span>
            </div>
          </div>
          {pictureUrls && (
            <div className="list">
              <Indicator index={selectedIndex}>
                {pictureUrls.map((item, index) => {
                  return (
                    <div
                      key={item}
                      className={classnames('item', { active: selectedIndex === index })}
                      onClick={(e) => setSelectedIndex(index)}>
                      <img src={item} />
                    </div>
                  );
                })}
              </Indicator>
            </div>
          )}
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  closeBroswer: PropTypes.func,
};

export default PictureBrowser;
