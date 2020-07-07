/*
 * Custom Hits component that only displays Hits if a query string is provided.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connectStateResults } from 'react-instantsearch-dom';
import { StyledHits } from '../hits';

const NonEmptyHitsCore = ({ searchState, hitComponent, hitCardsExpanded }) => {
  console.log(`NonEmptyHitsCore ${searchState.query}`);

  return searchState && searchState.query ? (
    <StyledHits
      hitComponent={hitComponent}
      hitCardsExpanded={hitCardsExpanded}
    />
  ) : (
    <div>
      <p>Type in a search term&hellip;</p>
    </div>
  );
};

NonEmptyHitsCore.propTypes = {
  searchState: PropTypes.object,
  hitComponent: PropTypes.func.isRequired,
  hitCardsExpanded: PropTypes.bool,
};

const NonEmptyHits = connectStateResults(NonEmptyHitsCore);

export default NonEmptyHits;
