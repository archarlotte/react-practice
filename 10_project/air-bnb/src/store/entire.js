import { createSlice } from '@reduxjs/toolkit';

const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
    isLoading: true,
  },
  reducers: {
    changeEntireRoomListAction(state, { payload }) {
      console.log(payload);
      state.roomList = payload.res.list;
      state.totalCount = payload.res.totalCount;
      state.currentPage = payload.page;
    },
    changeLoadingAction(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const { changeEntireRoomListAction, changeLoadingAction } = entireSlice.actions;

export default entireSlice.reducer;
