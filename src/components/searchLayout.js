/* Layout for the Algolia search UI. */

import styled from 'styled-components';
import { PoweredBy, SearchBox } from 'react-instantsearch-dom';

export const SearchLayout = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

export const SearchBoxArea = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex; /* Lay out box+powered by in line */
`;

/* SearchBox Algolia InstantSearch widget that's styled.
 * https://www.algolia.com/doc/api-reference/widgets/search-box/react/
 */
export const StyledSearchBox = styled(SearchBox)`
  flex: 1 1 0;
`;

/* PoweredBy Algolia InstantSearch widget that's styled.
 * https://www.algolia.com/doc/api-reference/widgets/powered-by/react/
 */
export const StyledPoweredBy = styled(PoweredBy)`
  margin-left: 1rem;
`;

export const SearchRefinementsArea = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;

/* Styled component div around a refinement widget.
 *
 * This styling controls spacing and the heading styling
 */
export const SearchRefinementSection = styled.div`
  margin-bottom: 2rem;

  h2 {
    margin-top: 0;
    font-size: 1.2rem;
  }
`;

export const SearchResultsArea = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;
