import IconMenu from '@/assets/svg/icon-menu'
import IconGlobal from '@/assets/svg/icon-global'
import React, { memo } from 'react'
import { styled } from 'styled-components'
import IconAvatar from '@/assets/svg/icon-avatar'

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .btns {
    display: flex;
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className='btns'>
        <span>登录</span>
        <span>注册</span>
        <span><IconGlobal /></span>
      </div>
      <div className='profile'>
        <IconMenu />
        <IconAvatar />
      </div>
    </RightWrapper>
  )
})

export default HeaderRight