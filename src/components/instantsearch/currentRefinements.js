/*
 * Styled version of the Algolia InstantSearch CurrentRefinements component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/current-refinements/react/
 */

import styled from 'styled-components';
import { CurrentRefinements as CurrentRefinementsCore } from 'react-instantsearch-dom';

const CurrentRefinements = styled(CurrentRefinementsCore)`
  margin-top: var(--space-xxs);

  .ais-CurrentRefinements-item {
    border-radius: var(--border-radius-1);
    padding: var(--space-xxxs-fixed) var(--space-xs-fixed);
    background-color: var(--c-tag-background);
  }

  .ais-CurrentRefinements-label,
  .ais-CurrentRefinements-categoryLabel,
  .ais-CurrentRefinements-delete {
    color: var(--c-text);
    font-size: 0.8rem;
    transition: 0.3s ease color;
  }

  .ais-CurrentRefinements-delete:hover {
    color: var(--c-delete);
  }
`;

export default CurrentRefinements;
