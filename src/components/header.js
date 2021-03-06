/* Header layout component. */

import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import rubinLogoDark from '../images/rubin-logo-dark.svg';
import Cluster from './basics/cluster';
import PageContentContainer from './pageContentContainer';
import ThemeToggle from './themeToggle';

const StyledHeader = styled.header`
  background: var(--c-reversed-background);
  color: var(--c-reversed-text);
  padding: var(--space-unit) 0;

  a {
    color: var(--c-reversed-link);
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
                  <Link to="/about/">About</Link>
                </li>
                {/* Add links for more categories/pages */}
              </NavList>
            </Cluster>
          </nav>
          {/* Settings / non-navigation items */}
          <ThemeToggle />
        </div>
      </Cluster>
    </PageContentContainer>
  </StyledHeader>
);

export default Header;
