/* Header layout component. */

import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import rubinLogoDark from '../images/rubin-logo-dark.svg';
import { mainWidthRem, regularMarginRem } from '../utilities/sizes';

const StyledHeader = styled.header`
  background: #222222;
  color: #ffffff;
  padding-top: ${regularMarginRem}rem;
  padding-bottom: ${regularMarginRem}rem;

  .header-container {
    margin: 0 auto;
    max-width: ${mainWidthRem}rem;
  }

  .header-logo {
    max-width: 16rem;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="header-container">
      <Link to="/">
        <img
          className="header-logo"
          src={rubinLogoDark}
          alt="Rubin Observatory logo"
        />
      </Link>
    </div>
  </StyledHeader>
);

export default Header;
