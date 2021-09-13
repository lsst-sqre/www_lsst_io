/*
 * Customized version of the RangeInput widget that allows a user to select
 * a range of dates.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connectRange } from 'react-instantsearch-dom';

/**
 * Min/max date range selector component.
 */
const DateRangeInputCore = ({ currentRefinement, min, max, refine }) => {
  console.log(currentRefinement);
  console.log(min);
  console.log(max);
  console.log(refine);
  return (
    <div>
      {currentRefinement.min} to {currentRefinement.max}
    </div>
  );
};

DateRangeInputCore.propTypes = {
  currentRefinement: PropTypes.object.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  refine: PropTypes.func.isRequired,
};

const DateRangeInput = connectRange(DateRangeInputCore);

export default DateRangeInput;
