/*
 * Styled version of the Algolia InstantSearch PoweredBy component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/powered-by/react/
 */

import styled from 'styled-components';
import { PoweredBy as BasePoweredBy } from 'react-instantsearch-dom';

/* PoweredBy Algolia InstantSearch widget that's styled.
 *
 * https://www.algolia.com/doc/api-reference/widgets/powered-by/react/
 */
const PoweredBy = styled(BasePoweredBy)`
  margin-left: var(--space-unit);

  .ais-PoweredBy-text {
    color: var(--c-text);
  }

  .ais-PoweredBy-logo path:last-of-type {
    fill: var(--c-algolia-text);
  }
`;

export default PoweredBy;
