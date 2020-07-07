/*
 * "Auto" version of the SortBy component that toggles to a relevance-based
 * search whenever the user enters a query string.
 *
 * This component uses the StateResults instantsearch widget
 * (https://www.algolia.com/doc/api-reference/widgets/state-results/react/)
 * StateResults gives us access to the query string. If the user sets a
 * value for the query string we change the defaultRefinement attribute of
 * the underlying SortBy component. When no query string is present we use
 * "defaultRefinement", which is the name of a sorted index. If a query string
 * is present, we switch to the relevance-based index so that results are
 * orderd most naturally.
 *
 * Note that so long as the user doesn't interact with the AutoSortBy widget,
 * the selection will revert back to the sorted index if the user deletes
 * the query text.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connectStateResults } from 'react-instantsearch-dom';
import SortBy from './sortBy';

const AutoSortByCore = ({
  searchState,
  items,
  defaultRefinement,
  relevanceRefinement,
}) => {
  const currentRefinement = searchState.query
    ? relevanceRefinement
    : defaultRefinement;

  return <SortBy defaultRefinement={currentRefinement} items={items} />;
};

AutoSortByCore.propTypes = {
  searchState: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultRefinement: PropTypes.string,
  relevanceRefinement: PropTypes.string,
};

const AutoSortBy = connectStateResults(AutoSortByCore);

export default AutoSortBy;
