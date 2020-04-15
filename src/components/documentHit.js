/**
 * Component for an Algolia search hit for a document.
 *
 * See https://www.algolia.com/doc/api-reference/widgets/hits/react/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Highlight } from 'react-instantsearch-dom';

const DocumentHitContainer = styled.div`
  h2 {
    line-height: 1.1;
    margin: 0;
    margin-bottom: 1rem;
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

const StyledHighlight = styled(Highlight)`
  ${({ tagName }) => tagName} {
    background: yellow;
  }
`;

const DocumentHit = ({ hit }) => (
  <DocumentHitContainer>
    <ContentTypeBanner>
      <span>{hit.handle}</span>
    </ContentTypeBanner>
    <a href={hit.url}>
      <h2>{hit.h1}</h2>
    </a>
    <StyledHighlight
      hit={hit}
      attribute="content"
      tagName="mark"
      nonHighlightedTagName="span"
    />
  </DocumentHitContainer>
);

DocumentHit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default DocumentHit;
