import React, { memo } from 'react';
import styled from 'styled-components';

const SectionHeaderWrapper = styled.div`
  margin: 1rem 0;
  .title {
    font-size: 22px;
  }

  .subtitle {
    font-size: 16px;
  }
`;
const SectionHeader = memo((props) => {
  const { title = '', subtitle = '' } = props;

  return (
    <SectionHeaderWrapper>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </SectionHeaderWrapper>
  );
});

export default SectionHeader;
