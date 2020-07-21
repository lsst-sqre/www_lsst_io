/*
 * Styled version of the SortBy Algolia InstantSearch component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/sort-by/react/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connectSortBy } from 'react-instantsearch-dom';

import chevronDownLight from '../../css-icons/icon-cheveron-down-light.svg';

const Label = styled.span`
  margin-right: 0.5em;
`;

/*
 * See https://www.filamentgroup.com/lab/select-css.html for background
 * on styling select elements.
 *
 * Note on background-image icon: the mask-image technique doesn't work here
 * so we're using a specifical down chevron icon with the fill hardcoded.
 * This isn't a huge deal because the icon has a fixed background colour.
 */
const Select = styled.select`
  display: inline-block;
  width: auto;
  max-width: 100%;
  color: var(--c-button-text);
  background-color: var(--c-button-background);
  background-image: url('${chevronDownLight}'), linear-gradient(to bottom, var(--c-button-background) 100%, var(--c-button-background) 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.5em top 50%, 0 0;
  background-size: var(--space-md) auto, 100%;
  appearance: none;
  padding: var(--space-xxxs) var(--space-lg) var(--space-xxxs) var(--space-unit);
  border-radius: var(--border-radius-1);
  border: none;
  box-shadow: var(--elevation-md);

  &:hover {
    box-shadow: var(--elevation-lg);
  }
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
