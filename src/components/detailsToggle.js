/**
 * Component for toggling the expand all / collapse all functionality for
 * search result cards.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Button from './buttons';

const DetailsToggleButton = ({ hitCardsExpanded, setHitCardsExpanded }) => {
  const toggle = () => setHitCardsExpanded(expanded => !expanded);

  return (
    <Button type="button" onClick={toggle}>
      {hitCardsExpanded ? 'Hide details' : 'Show details'}
    </Button>
  );
};

DetailsToggleButton.propTypes = {
  hitCardsExpanded: PropTypes.bool.isRequired,
  setHitCardsExpanded: PropTypes.func.isRequired,
};

export default DetailsToggleButton;
