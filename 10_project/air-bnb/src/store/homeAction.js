import { getHomeDiscountData, getHomeLongForData, getHomePlusData, getHomeRecommendData } from '@/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeDiscountInfoAction, changeRecommendInfoAction, changeLongForInfoAction, changePlusInfoAction } from './home';

const fetchDiscountAction = createAsyncThunk('fetchData', async (payload, { dispatch }) => {
  const res = await getHomeDiscountData();
  return dispatch(changeDiscountInfoAction(res));
});

const fetchRecommendAction = createAsyncThunk('fetchData', async (payload, { dispatch }) => {
  const res = await getHomeRecommendData();
  return dispatch(changeRecommendInfoAction(res));
});

const fetchLongForAction = createAsyncThunk('fetchData', async (payload, { dispatch }) => {
  const res = await getHomeLongForData();
  return dispatch(changeLongForInfoAction(res));
});

const fetchPlusAction = createAsyncThunk('fetchData', async (payload, { dispatch }) => {
  const res = await getHomePlusData();
  return dispatch(changePlusInfoAction(res));
});

export { fetchDiscountAction, fetchRecommendAction, fetchLongForAction, fetchPlusAction };
