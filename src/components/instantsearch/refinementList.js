/*
 * Styled version of the Algolia InstantSearch RefinementList component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/
 */

import styled from 'styled-components';
import theme from 'styled-theming';
import { RefinementList as BaseRefinementList } from 'react-instantsearch-dom';

import { textColor } from '../../design/theme';
import { neutral } from '../../design/color';

const RefinementList = styled(BaseRefinementList)`
  .ais-RefinementList-labelText {
    margin-left: 0.25rem;
    color: ${textColor};
  }

  .ais-RefinementList-count {
    background: ${theme('scheme', {
      light: neutral['100'],
      dark: neutral['700'],
    })};
    color: ${theme('scheme', { light: neutral['700'], dark: neutral['100'] })};
  }
`;

export default RefinementList;
