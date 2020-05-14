/* Footer layout component. */

import React from 'react';
import styled from 'styled-components';

import { neutral, blue } from '../design/color';
import { mediumMarginRem } from '../design/spacing';
import PageContentContainer from './pageContentContainer';

const StyledFooter = styled.footer`
  background: ${neutral['900']};
  color: ${neutral['100']};
  flex-shrink: 0;
  margin-top: ${mediumMarginRem}rem;

  a {
    color: ${blue['100']};
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
