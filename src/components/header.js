/* Header layout component. */

import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import {
  reversedBackgroundColor,
  reversedTextColor,
  reversedLinkColor,
} from '../design/theme';
import { regularMarginRem } from '../design/spacing';
import rubinLogoDark from '../images/rubin-logo-dark.svg';
import Cluster from './cluster';
import PageContentContainer from './pageContentContainer';
import ThemeToggleButton from './themeToggle';

const StyledHeader = styled.header`
  background: ${reversedBackgroundColor};
  color: ${reversedTextColor};
  padding-top: ${regularMarginRem}rem;
  padding-bottom: ${regularMarginRem}rem;

  a {
    color: ${reversedLinkColor};
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
    <PageContentContainer>
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
    </PageContentContainer>
  </StyledHeader>
);

export default Header;
