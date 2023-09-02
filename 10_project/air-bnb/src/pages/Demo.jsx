import Indicator from '@/components/Indicator';
import React, { memo, useState } from 'react';
import styled from 'styled-components';
const DemoWrapper = styled.div`
  .list {
    width: 100px;
    overflow: hidden;
    .color-div {
      border: 1px solid black;
      width: 100%;
      height: 10px;
    }
  }
`;

const Demo = memo(() => {
  const name = ['abc', 'bbb', 'aaa', 'ccc', 'ddd', 'fff', 'eee', 'ggg', 'kkk'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (isRight) => {
    let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1;
    if (newIndex < 0) {
      newIndex = name.length - 1;
    }
    if (newIndex > name.length - 1) {
      newIndex = 0;
    }
    setSelectedIndex(newIndex);
  };
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={() => handleClick(false)}>prev</button>
        <button onClick={() => handleClick(true)}>next</button>
      </div>
      <div className="list">
        <div className="color-div"></div>

        <Indicator index={selectedIndex}>
          {name.map((item) => {
            return <button>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
