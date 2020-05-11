/**
 * Component for an Algolia search hit for a document.
 *
 * See https://www.algolia.com/doc/api-reference/widgets/hits/react/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import moment from 'moment';

import { linkColor } from '../design/theme';
import { primary, neutral } from '../design/color';
import { IconDataListTerm, IconDataListContent } from './iconDataList';
import UserCoupleIcon from '../icons/user-couple.svg';
import TimeIcon from '../icons/time.svg';
import CodeIcon from '../icons/code.svg';
import VisuallyHidden from './basics/visuallyHidden';

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

const contentTypeColor = theme('scheme', {
  light: neutral['600'],
  dark: neutral['400'],
});

const ContentTypeSpan = styled.span`
  color: ${contentTypeColor};
  font-size: 0.9rem;
  letter-spacing: 0.01em;
`;

const snippetBackground = theme('scheme', {
  light: neutral['100'],
  dark: neutral['700'],
});

const snippetBorderColor = theme('scheme', {
  light: primary['800'],
  dark: primary['700'],
});

const StyledSnippetBlock = styled.blockquote`
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin-left: 0;
  margin-right: 0;
  border-left: 4px solid ${snippetBorderColor};
  background: ${snippetBackground};

  &::after,
  &::before {
    content: '[…]';
    opacity: 0.5;
  }
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
    color: ${linkColor};
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

const Summary = styled.div`
  margin: 1em 0 1em 0;
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

const secondaryIconFill = theme('scheme', {
  light: primary['800'],
  dark: neutral['100'],
});

const primaryIconFill = theme('scheme', {
  light: neutral['200'],
  dark: primary['800'],
});

const StyledUserCoupleIcon = styled(UserCoupleIcon)`
  width: 0.85em;
  width: 1cap;
  height: 0.85em;
  height: 1cap;

  .primary {
    fill: ${primaryIconFill};
  }

  .secondary {
    fill: ${secondaryIconFill};
  }
`;

const StyledTimeIcon = styled(TimeIcon)`
  width: 0.85em;
  width: 1cap;
  height: 0.85em;
  height: 1cap;

  .primary {
    fill: ${primaryIconFill};
  }

  .secondary {
    fill: ${secondaryIconFill};
  }
`;

const StyledCodeIcon = styled(CodeIcon)`
  width: 0.85em;
  width: 1cap;
  height: 0.85em;
  height: 1cap;

  .primary {
    fill: ${primaryIconFill};
  }

  .secondary {
    fill: ${secondaryIconFill};
  }
`;

const humanizeAge = timestamp => {
  const t = moment(timestamp);
  const age = moment.duration(t.diff(moment()));
  return (
    <time dateTime={timestamp}>{`${age.humanize(true)} (${t.format(
      'YYYY-MM-DD'
    )})`}</time>
  );
};

const DocumentHit = ({ hit, expanded }) => (
  <DocumentHitContainer>
    <ContentTypeSpan>{hit.handle}</ContentTypeSpan>
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
    <StyledDetails open={expanded}>
      <summary>Details</summary>

      <Summary>
        <StyledHighlight
          hit={hit}
          attribute="content"
          tagName="mark"
          nonHighlightedTagName="span"
        />
      </Summary>

      <dl>
        {hit.authorNames && (
          <>
            <IconDataListTerm>
              <StyledUserCoupleIcon />
              <VisuallyHidden>Authored by</VisuallyHidden>
            </IconDataListTerm>
            <IconDataListContent>
              <StyledPersonList names={hit.authorNames} />
            </IconDataListContent>
          </>
        )}

        {hit.githubRepoUrl && (
          <>
            <IconDataListTerm>
              <StyledCodeIcon />
              <VisuallyHidden>Source repository</VisuallyHidden>
            </IconDataListTerm>
            <IconDataListContent>
              <a href={hit.githubRepoUrl}>{hit.githubRepoUrl}</a>
            </IconDataListContent>
          </>
        )}

        {hit.sourceUpdateTime && (
          <>
            <IconDataListTerm>
              <StyledTimeIcon />
              <VisuallyHidden>Updated on</VisuallyHidden>
            </IconDataListTerm>
            <IconDataListContent>
              {humanizeAge(hit.sourceUpdateTime)}
            </IconDataListContent>
          </>
        )}
      </dl>
    </StyledDetails>
  </DocumentHitContainer>
);

DocumentHit.propTypes = {
  hit: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default DocumentHit;
