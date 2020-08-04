/*
 * Styled version of the Algolia InstantSearch ClearRefinements component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/clear-refinements/react/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connectCurrentRefinements } from 'react-instantsearch-dom';

import Button from '../basics/buttons';

const ClearRefinementsCore = ({ items, refine }) => {
  if (items.length) {
    return (
      <Button onClick={() => refine(items)} disabled={!items.length}>
        Clear all refinements
      </Button>
    );
  }
  return null;
};

ClearRefinementsCore.propTypes = {
  items: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
};

const ClearRefinements = connectCurrentRefinements(ClearRefinementsCore);

export default ClearRefinements;
