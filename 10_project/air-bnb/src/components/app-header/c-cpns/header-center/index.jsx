import IconSearch from '@/assets/svg/icon-search'
import React, { memo } from 'react'
import { styled } from 'styled-components'

const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    padding: 0 8px;
    border: 1px solid #ccc; 
    border-radius: 25px;
    cursor: pointer;

    transition: box-shadow 1s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,.18)
    }

    .text {
      padding: 0 16px;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.theme.color.primaryColor};
      color: #fff;
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }

`

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className='search-bar'>
      <div className='text'>Search</div>
      <div className='icon'>
        <IconSearch />
      </div>
      </div></CenterWrapper>
  )
})

export default HeaderCenter