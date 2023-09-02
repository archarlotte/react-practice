import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DetailInfo from './DetailInfo';
import DetailPictures from './DetailPictures';

const DetailWrapper = styled.div``;
const Detail = memo(() => {
  const { content } = useSelector((state) => ({
    content: state.detail.content,
  }));
  console.log(content);
  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={content.picture_urls} />
      <DetailInfo />
    </DetailWrapper>
  );
});

export default Detail;
