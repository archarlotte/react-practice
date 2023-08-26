import IconMenu from '@/assets/svg/icon-menu';
import IconGlobal from '@/assets/svg/icon-global';
import React, { memo, useState } from 'react';
import { styled } from 'styled-components';
import IconAvatar from '@/assets/svg/icon-avatar';

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.textColor.primaryColor};

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;

    .btn {
      padding: 12px;
      &:hover {
        cursor: pointer;
        background-color: #f7f7f7;
        border-radius: 25px;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #717171;
    cursor: pointer;
    gap: 0.5rem;
    padding: 5px 5px 5px 12px;
    border: 1px solid #ccc;
    border-radius: 25px;

    transition: box-shadow 1s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }

    .panel {
      position: absolute;
      top: 50px;
      right: 0px;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.18);
      border-radius: 15px;

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          padding: 0 16px;
          height: 40px;
          line-height: 40px;

          &:hover {
            background-color: #f7f7f7;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ccc;
      }
    }
  }
`;

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  const clickProfile = () => {
    setShowPanel(!showPanel);
  };

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">Login</span>
        <span className="btn">Register</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" tabIndex={0} onClick={clickProfile} onBlur={clickProfile}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">Sign Up</div>
              <div className="item">Log In</div>
            </div>
            <div className="bottom">
              <div className="item">Airbnb your home</div>
              <div className="item">Help Center</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
