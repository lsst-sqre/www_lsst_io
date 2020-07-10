/*
 * Styled version of the Algolia InstantSearch HierarchicalMenu component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/hierarchical-menu/react/
 */

import styled from 'styled-components';
import { HierarchicalMenu as BaseHierarchicalMenu } from 'react-instantsearch-dom';

import chevronDown from '../../css-icons/icon-cheveron-down.svg';

const HierarchicalMenu = styled(BaseHierarchicalMenu)`
  .ais-HierarchicalMenu-label {
    color: var(--c-link));
  }

  .ais-HierarchicalMenu-count {
    background: var(--c-tag-background);
    color: var(--c-tag-text);
  }

  /*
   * Mask technique lets us effectively theme an icon embedded in CSS
   * by setting the icon colour through the background-color. See
   * https://medium.com/@mwichary/dark-theme-in-a-day-3518dde2955a
   */
  .ais-HierarchicalMenu-link::after {
    transform: none;  // undo ais default
    background-image: none;  // undo ais default
    background-color: var(--c-text);
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: 1.1em;
    mask-image: url('${chevronDown}');
  }
`;

export default HierarchicalMenu;
