/*
 * Customized version of the RangeInput widget that allows a user to select
 * a range of dates.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connectRange } from 'react-instantsearch-dom';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

/**
 * Min/max date range selector component.
 */
const DateRangeInputCore = ({ currentRefinement, refine }) => (
  <div>
    <DateRangePicker
      disableCalendar
      rangeDivider=" to  "
      onChange={(newValue) =>
        refine({
          min: newValue[0].getTime() / 1000,
          max: newValue[1].getTime() / 1000,
        })
      }
      value={[
        new Date(currentRefinement.min * 1000),
        new Date(currentRefinement.max * 1000),
      ]}
    />
  </div>
);

DateRangeInputCore.propTypes = {
  currentRefinement: PropTypes.object.isRequired,
  refine: PropTypes.func.isRequired,
};

const DateRangeInput = connectRange(DateRangeInputCore);

export default DateRangeInput;
