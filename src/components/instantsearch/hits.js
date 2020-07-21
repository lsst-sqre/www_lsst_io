/**
 * Extension to the Algolia Hits widget that passes props through to individual
 * Hit components.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connectHits } from 'react-instantsearch-dom';

/**
 * Custom Hits component that passes props to individual Hit components.
 */
const Hits = ({
  hits,
  hitComponent,
  hitCardsExpanded = false,
  className = '',
}) => {
  const HitComponent = hitComponent;

  return (
    <ol className={className}>
      {hits.map(hit => (
        <li key={hit.objectID} className="hits-item">
          <HitComponent hit={hit} expanded={hitCardsExpanded} />
        </li>
      ))}
    </ol>
  );
};

const HitPropTypes = PropTypes.shape({
  objectID: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
});

Hits.propTypes = {
  hits: PropTypes.arrayOf(HitPropTypes.isRequired).isRequired,
  hitComponent: PropTypes.func.isRequired,
  hitCardsExpanded: PropTypes.bool,
  className: PropTypes.string,
};

/**
 * The Hits component, connected to Algolia instantsearch.
 */
const ConnectedHits = connectHits(Hits);

/**
 * Styled compents wrapper for ConnectedHits.
 */
export const StyledHits = styled(ConnectedHits)`
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;

  .hits-item {
    width: 100%;
    margin-bottom: var(--space-unit);
    padding: var(--space-unit);
    box-shadow: var(--elevation-lg);
    background-color: var(--c-hit-card-background);
    border: 1px solid var(--c-hit-card-border);
    border-radius: var(--border-radius-1);
  }
`;
