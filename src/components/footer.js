/* Footer layout component. */

import React from 'react';
import styled from 'styled-components';

import { mainWidthRem, mediumMarginRem } from '../utilities/sizes';

const StyledFooter = styled.footer`
  background: #222222;
  color: #ffffff;
  flex-shrink: 0;
  margin-top: ${mediumMarginRem}rem;

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
        Astronomy (AURA), Inc..
      </p>
    </div>
  </StyledFooter>
);

export default Footer;
