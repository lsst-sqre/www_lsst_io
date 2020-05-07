/* Footer layout component. */

import React from 'react';
import styled from 'styled-components';

import {
  reversedBackgroundColor,
  reversedTextColor,
  reversedLinkColor,
} from '../design/theme';
import { mediumMarginRem } from '../design/spacing';
import PageContentContainer from './pageContentContainer';

const StyledFooter = styled.footer`
  background: ${reversedBackgroundColor};
  color: ${reversedTextColor};
  flex-shrink: 0;
  margin-top: ${mediumMarginRem}rem;

  a {
    color: ${reversedLinkColor};
  }
`;

const Footer = () => (
  <StyledFooter>
    <PageContentContainer>
      <p>
        © {new Date().getFullYear()} Association of Universities for Research in
        Astronomy (AURA), Inc.
      </p>
    </PageContentContainer>
  </StyledFooter>
);

export default Footer;
