import { fetchEntireRoomListAction } from '@/store/entireAction';
import { useSelect } from '@mui/base';
import Pagination from '@mui/material/Pagination';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const EntirePagnationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: #222;
    color: #fff;
  }
`;

const EntirePagnation = memo((props) => {
  const dispatch = useDispatch();
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
  }));
  const firstNumber = currentPage * 20 + 1;
  const lastNumber = currentPage * 20 + 20;
  const pagnationNumber = Math.ceil(totalCount / 20);

  const handleChange = (event, value) => {
    dispatch(fetchEntireRoomListAction(value - 1));
  };
  window.scrollTo(0, 0);

  return (
    <EntirePagnationWrapper>
      {roomList && (
        <div className="content">
          <Pagination count={pagnationNumber} page={currentPage + 1} onChange={handleChange} />
          <div>
            第 {firstNumber} - {lastNumber} 个房源, 共超过{totalCount}个
          </div>
        </div>
      )}
    </EntirePagnationWrapper>
  );
});

export default EntirePagnation;
