/* Layout for the Algolia search UI. */

import styled from 'styled-components';

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
`;

export const SearchRefinementsArea = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;

export const SearchResultsArea = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;
