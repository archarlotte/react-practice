import { fetchEntireRoomListAction } from '@/store/entireAction';
import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import EntireFilter from './EntireFilter';
import EntirePagnation from './EntirePagnation';
import EntireRoom from './EntireRoom';

const EntireWrapper = styled.div`
  margin-top: 128px;
`;
const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntireRoomListAction());
  }, []);
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRoom />
      <EntirePagnation />
    </EntireWrapper>
  );
});

export default Entire;
