/*
 * Styled version of the Algolia InstantSearch PoweredBy component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/powered-by/react/
 */

import styled from 'styled-components';
import theme from 'styled-theming';
import { PoweredBy as BasePoweredBy } from 'react-instantsearch-dom';

import { textColor } from '../../design/theme';
import { neutral } from '../../design/color';

const algoliaLogoFill = theme('scheme', {
  light: '#182359', // regular Algolia logo colour
  dark: neutral['100'],
});

/* PoweredBy Algolia InstantSearch widget that's styled.
 *
 * https://www.algolia.com/doc/api-reference/widgets/powered-by/react/
 */
const PoweredBy = styled(BasePoweredBy)`
  margin-left: 1rem;

  .ais-PoweredBy-text {
    color: ${textColor};
  }

  .ais-PoweredBy-logo path:last-of-type {
    fill: ${algoliaLogoFill};
  }
`;

export default PoweredBy;
