/*
 * Component for arranging a list of metadata where the icon is the
 * term (<dt>) and the data is the definition (<dl>).
 */

import styled from 'styled-components';

export const IconDataListTerm = styled.dt`
  clear: left;
  float: left;
  width: var(--space-md);
`;

export const IconDataListContent = styled.dd`
  margin-left: var(--space-md);
`;
