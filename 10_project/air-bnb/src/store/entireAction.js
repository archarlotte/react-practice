import { getEntireRoomList } from '@/services/modules/entire';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeEntireRoomListAction, changeLoadingAction } from './entire';

const fetchEntireRoomListAction = createAsyncThunk('entire/roomList', async (page = 0, { dispatch }) => {
  console.log(page);
  dispatch(changeLoadingAction(true));
  const res = await getEntireRoomList(page * 20 + 1, page * 20 + 20);
  dispatch(changeLoadingAction(false));
  return dispatch(changeEntireRoomListAction({ res, page }));
});

export { fetchEntireRoomListAction };
