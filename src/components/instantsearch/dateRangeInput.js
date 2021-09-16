/*
 * Customized version of the RangeInput widget that allows a user to select
 * a range of dates.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connectRange } from 'react-instantsearch-dom';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

/**
 * Min/max date range selector component.
 */
const DateRangeInputCore = ({ currentRefinement, refine, min, max }) => {
  const [dateRange, onChangeDateRange] = useState([
    new Date(currentRefinement.min * 1000),
    new Date(currentRefinement.max * 1000),
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    refine({
      min: dateRange[0].getTime() / 1000,
      max: dateRange[1].getTime() / 1000,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <DateRangePicker
        disableCalendar
        rangeDivider=" to "
        onChange={onChangeDateRange}
        value={dateRange}
        minDate={new Date(min * 1000)}
        maxDate={new Date(max * 1000)}
      />
      <button as="input" type="submit" aria-label="Filter">
        Filter
      </button>
    </form>
  );
};

DateRangeInputCore.propTypes = {
  currentRefinement: PropTypes.object.isRequired,
  refine: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

const DateRangeInput = connectRange(DateRangeInputCore);

export default DateRangeInput;
