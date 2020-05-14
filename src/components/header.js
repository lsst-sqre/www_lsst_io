/* Header layout component. */

import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { neutral, blue } from '../design/color';
import { regularMarginRem } from '../design/spacing';
import rubinLogoDark from '../images/rubin-logo-dark.svg';
import Cluster from './cluster';
import PageContentContainer from './pageContentContainer';
// import ThemeToggleButton from './themeToggle';

const StyledHeader = styled.header`
  background: ${neutral['900']};
  color: ${neutral['100']};
  padding-top: ${regularMarginRem}rem;
  padding-bottom: ${regularMarginRem}rem;

  a {
    color: ${blue['100']};
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
                {/* Add links for more categories/pages */}
              </NavList>
            </Cluster>
          </nav>
          {/* Settings / non-navigation items */}
        </div>
      </Cluster>
    </PageContentContainer>
  </StyledHeader>
);

export default Header;
