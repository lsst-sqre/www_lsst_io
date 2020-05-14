/*
 * Visually hidden span, for accessibility.
 *
 * https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html#hiding-content-visually
 */

import styled from 'styled-components';

const VisuallyHidden = styled.span`
  &:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export default VisuallyHidden;
