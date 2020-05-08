/*
 * Styled version of the Algolia InstantSearch HierarchicalMenu component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/hierarchical-menu/react/
 */

import styled from 'styled-components';
import theme from 'styled-theming';
import { HierarchicalMenu as BaseHierarchicalMenu } from 'react-instantsearch-dom';

import {
  linkColor,
  countTagTextColor,
  countTagBackgroundColor,
} from '../../design/theme';
import { neutral } from '../../design/color';

/*
 * NOTE: styled-theming/components can't successfully replace the background
 * image here. We'll have to find another way to insert/style the disclosue
 * icon.
 */
const themedCaretImage = theme('scheme', {
  light: `url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7.3 24l-2.8-2.8 9.3-9.2-9.3-9.2 2.8-2.8 12.2 12z%27 fill%3D%22%${neutral[
    '900'
  ].replace(/^#/, '')}%22 /%3E%3C/svg%3E')`,
  dark: `url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7.3 24l-2.8-2.8 9.3-9.2-9.3-9.2 2.8-2.8 12.2 12z%27 fill%3D%22%${neutral[
    '100'
  ].replace(/^#/, '')}%22 /%3E%3C/svg%3E')`,
});

const HierarchicalMenu = styled(BaseHierarchicalMenu)`
  .ais-HierarchicalMenu-label {
    color: ${linkColor};
  }

  .ais-HierarchicalMenu-count {
    background: ${countTagBackgroundColor};
    color: ${countTagTextColor};
  }

  .ais-HierarchicalMenu-link::after {
    background-image: ${themedCaretImage};
  }
`;

export default HierarchicalMenu;
