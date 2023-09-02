import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeDetailContentAction } from './detail';

const changeDetailContent = createAsyncThunk('detail', async (payload, { dispatch }) => {
  console.log(payload);
  return dispatch(changeDetailContentAction(payload));
});

export { changeDetailContent };
