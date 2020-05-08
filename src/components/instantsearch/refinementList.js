/*
 * Styled version of the Algolia InstantSearch RefinementList component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/
 */

import styled from 'styled-components';
import { RefinementList as BaseRefinementList } from 'react-instantsearch-dom';

import {
  textColor,
  countTagTextColor,
  countTagBackgroundColor,
} from '../../design/theme';

const RefinementList = styled(BaseRefinementList)`
  .ais-RefinementList-labelText {
    margin-left: 0.25rem;
    color: ${textColor};
  }

  .ais-RefinementList-count {
    background: ${countTagBackgroundColor};
    color: ${countTagTextColor};
  }
`;

export default RefinementList;
