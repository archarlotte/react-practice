import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';

const IndicatorWrapper = styled.div`
  display: flex;
  transition: transform 200ms ease;

  > * {
    flex-shrink: 0;
  }
`;

const Indicator = memo((props) => {
  const { index, children } = props;
  const indicatorRef = useRef();

  useEffect(() => {
    const indicatorWidth = indicatorRef.current.clientWidth;
    const eleWidth = indicatorRef?.current?.children[index].clientWidth;
    const eleOffsetLeft = indicatorRef?.current?.children[index].offsetLeft;
    let distance = eleOffsetLeft + eleWidth * 0.5 - indicatorWidth * 0.5;

    if (distance < 0) {
      distance = 0;
    }
    const indicatorScroll = indicatorRef.current.scrollWidth;
    const totalDistance = indicatorScroll - indicatorWidth;
    if (distance > totalDistance) distance = totalDistance;

    indicatorRef.current.style.transform = `translate(${-distance}px)`;
    console.log(distance);
  }, [index]);

  return <IndicatorWrapper ref={indicatorRef}>{children}</IndicatorWrapper>;
});

export default Indicator;
