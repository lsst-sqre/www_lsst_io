/*
 * PageLayer is a section-like component that provides a full-width background
 * but contains content to the appropriate width.
 */

import styled, { css } from 'styled-components';

const PageLayer = styled.section`
  // Full-width in a contrained parent
  // https://css-tricks.com/full-width-containers-limited-width-parents/
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 0;
  margin-bottom: 0;
  padding: var(--space-lg) 0;

  h1,
  h2,
  h3,
  h4,
  h4,
  h5,
  h6 {
    margin-top: 0;
  }

  ${props =>
    props.brand &&
    css`
      background-color: var(--c-brand-layer-background);
      color: var(--c-brand-layer-text);
      a {
        color: var(--c-brand-layer-link);
      }
    `}

  ${props =>
    props.alternate &&
    css`
      background-color: var(--c-alternate-layer-background);
      color: var(--c-alternate-layer-text);
      a {
        color: var(--c-alternate-layer-link);
      }
    `}
`;

export default PageLayer;
