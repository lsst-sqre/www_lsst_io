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
import Cluster from './cluster';
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
`;

const LogoContainer = styled.div`
  width: 16rem;

  img {
    width: 100%;
  }
`;

const NavList = styled.ul`
  padding: 0;
  list-style: None;
`;

const Header = () => (
  <StyledHeader>
    <div className="header-container">
      <Cluster justifyContent="space-between">
        <div>
          {/* Logo */}
          <LogoContainer>
            <Link to="/">
              <img src={rubinLogoDark} alt="Rubin Observatory logo" />
            </Link>
          </LogoContainer>
          {/* Navigation items */}
          <nav>
            <Cluster>
              <NavList>
                <li>
                  <Link to="/search/">Advanced search</Link>
                </li>
                <li>
                  <Link to="/search/">Documents</Link>
                </li>
              </NavList>
            </Cluster>
          </nav>
          {/* Settings / non-navigation items */}
          <div>
            <ThemeToggleButton />
          </div>
        </div>
      </Cluster>
    </div>
  </StyledHeader>
);

export default Header;
