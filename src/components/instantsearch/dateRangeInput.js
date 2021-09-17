/*
 * Customized version of the RangeInput widget that allows a user to select
 * a range of dates.
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connectRange } from 'react-instantsearch-dom';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import useDebounce from '../../hooks/useDebounce';

const StyledDateRangePicker = styled(DateRangePicker)`
  .react-daterange-picker__wrapper {
    border: 0px;
    justify-content: space-between;
  }
  .react-daterange-picker__range-divider {
    padding: 0 0.2rem;
  }
  .react-daterange-picker__inputGroup {
    min-width: auto;
  }
  .react-daterange-picker__inputGroup input {
    color: var(--c-text);
  }
  .react-daterange-picker__clear-button {
    color: var(--c-text);
  }
`;

/**
 * Min/max date range selector component.
 */
const DateRangeInputCore = ({ currentRefinement, refine, min, max }) => {
  // Debouncing the current refinement ensures that the search results
  // don't jump while trying to select dates.
  const debouncedCurrentRefinement = useDebounce(currentRefinement, 1000);

  const onChangeDateRange = (newRange) => {
    if (newRange) {
      refine({
        min: newRange[0].getTime() / 1000,
        max: newRange[1].getTime() / 1000,
      });
    } else {
      // Reset to defaults when newRange is null
      refine({
        min,
        max,
      });
    }
  };

  return (
    <StyledDateRangePicker
      disableCalendar
      rangeDivider="to"
      clearIcon={null}
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
