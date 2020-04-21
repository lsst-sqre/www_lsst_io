/**
 * Component for toggling the expand all / collapse all functionality for
 * search result cards.
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DetailsToggleButton = ({
  hitCardsExpanded,
  setHitCardsExpanded,
  className = '',
}) => {
  const toggle = () => setHitCardsExpanded(expanded => !expanded);

  return (
    <button type="button" className={className} onClick={toggle}>
      {hitCardsExpanded ? 'Hide details' : 'Show details'}
    </button>
  );
};

DetailsToggleButton.propTypes = {
  hitCardsExpanded: PropTypes.bool.isRequired,
  setHitCardsExpanded: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export const StyledDetailsToggleButton = styled(DetailsToggleButton)`
  border: 1px solid #c4c8d8;
  border-radius: 4px;
  background: #ffffff;
  margin-bottom: 1rem;
`;
