/**
 * Component for an Algolia search hit for a document.
 *
 * See https://www.algolia.com/doc/api-reference/widgets/hits/react/
 */

import React from 'react';
import PropTypes from 'prop-types';

const DocumentHit = ({ hit }) => (
  <>
    <a href={hit.url}>
      <h2>{hit.h1}</h2>
      <span>{hit.handle}</span>
    </a>
    <p>{hit.content}</p>
  </>
);

DocumentHit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default DocumentHit;
