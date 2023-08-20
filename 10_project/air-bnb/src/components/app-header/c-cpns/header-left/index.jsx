import IconLogo from '@/assets/svg/icon-logo'
import React, { memo } from 'react'
import { styled } from 'styled-components'

const LeftWrapper = styled.div`
  flex: 1;
  color: ${props => props.theme.color.primaryColor};

  .logo {
    cursor: pointer;
  }
`

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper><div className='logo'><IconLogo /></div></LeftWrapper>
  )
})

export default HeaderLeft