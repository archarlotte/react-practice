import LongFor from '@/components/LongFor';
import RoomSection from '@/components/room/RoomSection';
import RoomSectionV2 from '@/components/room/RoomSectionV2';
import RoomSectionWithTab from '@/components/room/RoomSectionWithTab';
import { fetchHomeDataAction, fetchHighScoreAction } from '@/store/home';
import { fetchDiscountAction, fetchLongForAction, fetchPlusAction, fetchRecommendAction } from '@/store/homeAction';
import { isEmptyObject } from '@/utils';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const HomeContentWrapper = styled.div`
  width: 1032px;
  margin: 0 auto;
`;

const HomeContent = memo(() => {
  const dispatch = useDispatch();

  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longForInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longForInfo: state.home.longForInfo,
    plusInfo: state.home.plusInfo,
  }));

  useEffect(() => {
    dispatch(fetchDiscountAction());
  }, []);

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, []);

  useEffect(() => {
    dispatch(fetchHighScoreAction());
  }, []);

  useEffect(() => {
    dispatch(fetchRecommendAction());
  }, []);

  useEffect(() => {
    dispatch(fetchLongForAction());
  }, []);
  useEffect(() => {
    dispatch(fetchPlusAction());
  }, []);

  console.log(plusInfo);

  return (
    <HomeContentWrapper>
      {isEmptyObject(discountInfo) && <RoomSectionWithTab roomData={discountInfo} />}
      {isEmptyObject(goodPriceInfo) && <RoomSection roomData={goodPriceInfo} />}
      {isEmptyObject(highScoreInfo) && <RoomSection roomData={highScoreInfo} />}
      {isEmptyObject(recommendInfo) && <RoomSectionWithTab roomData={recommendInfo} />}
      {isEmptyObject(longForInfo) && <LongFor infoData={longForInfo} />}
      {isEmptyObject(plusInfo) && <RoomSectionV2 infoData={plusInfo} />}
    </HomeContentWrapper>
  );
});

export default HomeContent;
