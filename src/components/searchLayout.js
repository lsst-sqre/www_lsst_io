/* Layout for the Algolia search UI. */

import styled from 'styled-components';

import bp from '../design/breakpoints';

export const SearchLayout = styled.div`
  grid-template-columns: 16rem 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: var(--space-md);
  grid-row-gap: var(--space-md);
  margin-top: var(--space-lg);

  /*
   * Create a linear search layout on mobile, but inject grid layout on
   * bigger screens.
   */
  @media only screen and (min-width: ${bp.phone}) {
    display: grid;
  }
`;

export const SearchBoxArea = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

export const SearchRefinementsArea = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  margin-top: var(--space-unit);
  @media only screen and (min-width: ${bp.phone}) {
    margin-top: 0;
  }
`;

/* Styled component div around a refinement widget.
 *
 * This styling controls spacing and the heading styling
 */
export const SearchRefinementSection = styled.div`
  margin-bottom: var(--space-lg);

  h2 {
    margin-top: 0;
    font-size: 1.2rem;
  }
`;

export const SearchResultsArea = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;
