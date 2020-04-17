/**
 * Component for an Algolia search hit for a document.
 *
 * See https://www.algolia.com/doc/api-reference/widgets/hits/react/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Highlight, Snippet } from 'react-instantsearch-dom';

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

const StyledSnippetBlock = styled.blockquote`
  padding-left: 2rem;
  padding-right: 1rem;
  margin-left: 0;
  margin-right: 0;
  border-left: 4px solid #aaaaaa;
  background: #eeeeee;
`;

const StyledSnippet = styled(Snippet)`
  span,
  ${({ tagName }) => tagName} {
    // more specific than Algolia theme
    font-size: 1.1rem;
  }

  ${({ tagName }) => tagName} {
    background: yellow;
  }
`;

const StyledDetails = styled.details`
  summary {
    text-transform: uppercase;
    letter-spacing: 0.01em;
    color: #1d00f8; // default link color
    cursor: pointer;
    font-size: 0.9rem;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }
`;

const StyledHighlight = styled(Highlight)`
  ${({ tagName }) => tagName} {
    background: yellow;
  }
`;

const PersonList = ({ className, names }) => (
  <ol className={className}>
    {names.map(name => (
      <li key={name}>{name}</li>
    ))}
  </ol>
);

PersonList.propTypes = {
  className: PropTypes.string.isRequired,
  names: PropTypes.array.isRequired,
};

/**
 * Style the PersonList component.
 *
 * The main goal here is to lay out the list of person names as an inline list
 * and add the Oxford comma.
 */
const StyledPersonList = styled(PersonList)`
  margin-top: 1rem;
  list-style: none;
  padding-left: 0;

  li {
    display: inline;
  }

  li:after {
    content: ', ';
  }

  li:last-child:after {
    content: '';
  }

  li:nth-last-child(2):after {
    content: ' and ';
  }

  li:nth-last-child(3) ~ li:nth-last-child(2):after {
    content: ', and ';
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
    {hit._snippetResult.content.matchLevel !== 'none' && (
      <StyledSnippetBlock>
        <StyledSnippet
          attribute="content"
          hit={hit}
          tagName="mark"
          nonHighlightedTagName="span"
        />{' '}
      </StyledSnippetBlock>
    )}
    <StyledDetails>
      <summary>Details</summary>
      <StyledHighlight
        hit={hit}
        attribute="content"
        tagName="mark"
        nonHighlightedTagName="span"
      />
      <StyledPersonList names={hit.authorNames} />
    </StyledDetails>
  </DocumentHitContainer>
);

DocumentHit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default DocumentHit;
