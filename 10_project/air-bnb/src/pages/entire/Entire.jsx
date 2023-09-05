import AppHeader from '@/components/app-header';
import { fetchEntireRoomListAction } from '@/store/entireAction';
import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import EntireFilter from './EntireFilter';
import EntirePagnation from './EntirePagnation';
import EntireRoom from './EntireRoom';

const EntireWrapper = styled.div`
  .entire-content {
    margin-top: 120px;
  }
`;
const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntireRoomListAction());
  }, []);
  return (
    <EntireWrapper>
      <AppHeader isFixed={true} />
      <EntireFilter />
      <div className='entire-content'>
        <EntireRoom />
        <EntirePagnation />
      </div>
    </EntireWrapper>
  );
});

export default Entire;
