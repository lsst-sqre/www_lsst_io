/* Footer layout component. */

import React from 'react';
import styled from 'styled-components';

import { mainWidthRem, mediumMarginRem } from '../utilities/sizes';
import {
  reversedBackgroundColor,
  reversedTextColor,
  reversedLinkColor,
} from '../design/theme';

const StyledFooter = styled.footer`
  background: ${reversedBackgroundColor};
  color: ${reversedTextColor};
  flex-shrink: 0;
  margin-top: ${mediumMarginRem}rem;

  a {
    color: ${reversedLinkColor};
  }

  .footer-container {
    margin: 0 auto;
    max-width: ${mainWidthRem}rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="footer-container">
      <p>
        © {new Date().getFullYear()} Association of Universities for Research in
        Astronomy (AURA), Inc.
      </p>
    </div>
  </StyledFooter>
);

export default Footer;
