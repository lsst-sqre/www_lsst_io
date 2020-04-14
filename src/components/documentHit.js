/**
 * Component for an Algolia search hit for a document.
 *
 * See https://www.algolia.com/doc/api-reference/widgets/hits/react/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DocumentHitContainer = styled.div`
  margin-bottom: -1rem;

  h2 {
    line-height: 1.1;
    margin: 0;
  }

  a {
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }
`;

const ContentTypeBanner = styled.div`
  background: #222222;
  color: #ffffff;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: 0.5rem;
  margin-top: -1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const DocumentHit = ({ hit }) => (
  <DocumentHitContainer>
    <ContentTypeBanner>
      <span>{hit.handle}</span>
    </ContentTypeBanner>
    <a href={hit.url}>
      <h2>{hit.h1}</h2>
    </a>
    <p>{hit.content}</p>
  </DocumentHitContainer>
);

DocumentHit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default DocumentHit;
