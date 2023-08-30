import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import styled from 'styled-components';
import filterData from '@/assets/data/filter_data.json';
import classNames from 'classnames';

const EntireFilterWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  top: 80px;

  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;

  .filter {
    display: flex;

    .item {
      margin: 0 4px 0 8px;
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      color: #484848;
      cursor: pointer;

      &.active {
        background: #008489;
        border: 1px solid #008489;
        color: #ffffff;
      }
    }
  }
`;

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);
  const handleSelectItem = (item) => {
    if (selectItems.includes(item)) {
      const newItems = selectItems.filter((word) => word !== item);
      setSelectItems(newItems);
    } else {
      setSelectItems([...selectItems, item]);
    }
  };
  return (
    <EntireFilterWrapper>
      <div className="filter">
        {filterData.map((item) => (
          <div
            className={classNames('item', { active: selectItems.includes(item) })}
            onClick={(e) => handleSelectItem(item)}>
            {item}
          </div>
        ))}
      </div>
    </EntireFilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
