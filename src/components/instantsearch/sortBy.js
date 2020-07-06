/*
 * Styled version of the SortBy Algolia InstantSearch component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/sort-by/react/
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import theme from 'styled-theming';
import { connectSortBy } from 'react-instantsearch-dom';

const SortByCore = ({ items, currentRefinement, refine }) => (
  <>
    <label htmlFor="search-sortby">
      <span>Sort by</span>
      <select
        id="search-sortby"
        onChange={e => {
          refine(e.target.value);
        }}
        value={currentRefinement}
      >
        {items.map(item => (
          <option
            value={item.value}
            selected={currentRefinement === item.value}
          >
            {item.label}
          </option>
        ))}
      </select>
    </label>
  </>
);

SortByCore.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentRefinement: PropTypes.string,
  refine: PropTypes.func,
  // createURL: PropTypes.func,
};

const SortBy = connectSortBy(SortByCore);

export default SortBy;
