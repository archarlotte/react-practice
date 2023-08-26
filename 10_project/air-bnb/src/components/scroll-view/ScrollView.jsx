import React, { memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const ScrollViewWrapper = styled.div`
  overflow: hidden;
  .scroll-content {
    position: relative;
    display: flex;
  }
`;

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const scrollContentRef = useRef();
  const totalDistanceRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children]);

  const handleTabClick = (isRight) => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const currentEle = scrollContentRef.current.children[newIndex];
    const curOffset = currentEle.offsetLeft;

    scrollContentRef.current.style.transform = isRight ? `translate(-${curOffset}px)` : `translate(${curOffset}px)`;
    setPosIndex(newIndex);

    setShowLeft(curOffset > 0);
    setShowRight(curOffset < totalDistanceRef.current);
  };
  return (
    <ScrollViewWrapper>
      {showLeft && <button onClick={(e) => handleTabClick(false)}>左</button>}
      {showRight && <button onClick={(e) => handleTabClick(true)}>右</button>}
      <div className="scroll-content" ref={scrollContentRef}>
        {props.children}
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
