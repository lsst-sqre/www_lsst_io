/* Header layout component. */

import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import {
  reversedBackgroundColor,
  reversedTextColor,
  reversedLinkColor,
} from '../design/theme';
import rubinLogoDark from '../images/rubin-logo-dark.svg';
import { mainWidthRem, regularMarginRem } from '../utilities/sizes';
import ThemeToggleButton from './themeToggle';

const StyledHeader = styled.header`
  background: ${reversedBackgroundColor};
  color: ${reversedTextColor};
  padding-top: ${regularMarginRem}rem;
  padding-bottom: ${regularMarginRem}rem;

  a {
    color: ${reversedLinkColor};
  }

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

      <ThemeToggleButton />
    </div>
  </StyledHeader>
);

export default Header;
