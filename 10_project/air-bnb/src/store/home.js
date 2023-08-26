import { getHomeGoodPriceData, getHomeHighScoreData } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const fetchHomeDataAction = createAsyncThunk('fetchData', () => {
//   getHomeGoodPriceData().then((res) => {
//     console.log(res);
//   });
// });

const fetchHomeDataAction = createAsyncThunk('fetchData', async (payload, { dispatch }) => {
  const res = await getHomeGoodPriceData();
  return dispatch(changeGoodPriceInforAction(res));
});
const fetchHighScoreAction = createAsyncThunk('fetchData', async (payload, { dispatch }) => {
  const res = await getHomeHighScoreData();
  return dispatch(changeHighScoreInfoAction(res));
});

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longForInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInforAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
});

export const {
  changeGoodPriceInforAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction,
} = homeSlice.actions;

export { fetchHomeDataAction, fetchHighScoreAction };

export default homeSlice.reducer;
