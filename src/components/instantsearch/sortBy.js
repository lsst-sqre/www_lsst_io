/*
 * Styled version of the SortBy Algolia InstantSearch component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/sort-by/react/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connectSortBy } from 'react-instantsearch-dom';

import { primary, neutral } from '../../design/color';
import elevations from '../../design/elevations';

const Label = styled.span`
  margin-right: 0.5em;
`;

/*
 * See https://www.filamentgroup.com/lab/select-css.html for background
 * on styling select elements.
 */
const Select = styled.select`
  display: inline-block;
  width: auto;
  max-width: 100%;
  color: ${neutral['100']};
  background-color: ${primary['900']};
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%${neutral[
    '100'
  ].replace(
    /^#/,
    ''
  )}%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, ${primary['800']} 100%, ${primary['800']} 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  appearance: none;
  padding: 5px 20px;
  padding-right: 2em;
  border-radius: 4px;
  font-size: 1em;
  border: none;
  ${elevations[1]};
`;

/* eslint-disable */
/* For jsx-a11y/label-has-for doesn't recognize the custom Select */
const SortByCore = ({ items, currentRefinement, refine }) => (
  <>
    <label htmlFor="search-sortby">
      <Label>Sort by</Label>
      <Select
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
      </Select>
    </label>
  </>
);
/* eslint-enable */

SortByCore.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentRefinement: PropTypes.string,
  refine: PropTypes.func,
  // createURL: PropTypes.func,
};

const SortBy = connectSortBy(SortByCore);

export default SortBy;
