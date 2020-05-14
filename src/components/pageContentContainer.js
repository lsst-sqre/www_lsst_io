/*
 * Container for page-level content.
 *
 * PageContentContainer sits within the full-width divs that we use to get
 * colored backgrounds for the header, body, and footer. This component centers
 * the content, sets a max-width, and provides padding.
 */

import styled from 'styled-components';

import { mainWidth } from '../design/spacing';

const PageContentContainer = styled.div`
  margin: 0 auto;
  max-width: ${mainWidth};
  padding: 0 10px 0 10px;
`;

export default PageContentContainer;
