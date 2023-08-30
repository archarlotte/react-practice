import IconLogo from '@/assets/svg/icon-logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const LeftWrapper = styled.div`
  flex: 1;
  color: ${props => props.theme.color.primaryColor};

  .logo {
    cursor: pointer;
  }
`

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/home')
  }
  return (
    <LeftWrapper><div className='logo' onClick={navigateToHome}><IconLogo /></div></LeftWrapper>
  )
})

export default HeaderLeft