/*
 * Styled version of the Algolia InstantSearch CurrentRefinements component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/current-refinements/react/
 */

import React from 'react';
import styled from 'styled-components';
import { CurrentRefinements as CurrentRefinementsCore } from 'react-instantsearch-dom';

/**
 * Custom prefixes for item labels.
 *
 * First items in the individual arrays are the prefixes of labels, not
 * including the ":". The second items are replacement values for those
 * prefixes.
 */
const labelPrefixes = [
  ['authorNames', 'Contributors'],
  ['contentCategories.lvl0', 'Content type'],
];
const labelPrefixMap = new Map(labelPrefixes);

/**
 * Transforms the label attribute of a refinement items to use a customized
 * label from labelPrefixes.
 *
 * This function identifies refinements based on the prefix for the label,
 * which is the text before the ":".
 */
export const itemTransformer = items =>
  items.map(item => {
    const labelParts = item.label.split(':', 2);
    const suggestedPrefix = labelPrefixMap.get(labelParts[0]);
    if (suggestedPrefix) {
      item.label = `${suggestedPrefix}: ${labelParts[1]}`;
    }
    return item;
  });

const StyledCurrentRefinements = styled(CurrentRefinementsCore)`
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

/**
 * All-inclusive version of the CurrentRefinements instant search widget
 * that includes custom styling and label transformations.
 */
const CurrentRefinements = () => (
  <>
    <StyledCurrentRefinements transformItems={itemTransformer} />
  </>
);

export default CurrentRefinements;
