import React, { memo } from 'react'
import styled from 'styled-components'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  /* height: 80px; */
  border-bottom: 1px solid #eee;
`
const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader