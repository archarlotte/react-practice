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
// const fetchCurrentPageAction = createAsyncThunk('fetchData', async (payload, { dispatch }) => {
//   const res = await getEntireRoomList();
//   return dispatch(changefetchCurrentPageAction(res));
// });
// const fetchTotalCountAtction = createAsyncThunk('fetchData', async (payload, { dispatch }) => {
//   const res = await getEntireRoomList();
//   return dispatch(changefetchTotalCountAtction(res));
// });

export { fetchEntireRoomListAction };
