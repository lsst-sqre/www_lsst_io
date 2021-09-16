/*
 * Customized version of the RangeInput widget that allows a user to select
 * a range of dates.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connectRange } from 'react-instantsearch-dom';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import useDebounce from '../../hooks/useDebounce';

/**
 * Min/max date range selector component.
 */
const DateRangeInputCore = ({ currentRefinement, refine, min, max }) => {
  // Debouncing the current refinement ensures that the search results
  // don't jump while trying to select dates.
  const debouncedCurrentRefinement = useDebounce(currentRefinement, 1000);

  const onChangeDateRange = (newRange) => {
    refine({
      min: newRange[0].getTime() / 1000,
      max: newRange[1].getTime() / 1000,
    });
  };

  return (
    <DateRangePicker
      disableCalendar
      rangeDivider=" to "
      onChange={onChangeDateRange}
      value={[
        new Date(debouncedCurrentRefinement.min * 1000),
        new Date(debouncedCurrentRefinement.max * 1000),
      ]}
      minDate={new Date(min * 1000)}
      maxDate={new Date(max * 1000)}
    />
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
