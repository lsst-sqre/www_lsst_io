/* Header layout component. */

import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import { regularMarginRem } from '../design/spacing';
import rubinLogoDark from '../images/rubin-logo-dark.svg';
import Cluster from './cluster';
import PageContentContainer from './pageContentContainer';

const StyledHeader = styled.header`
  background: var(--c-reversed-background);
  color: var(--c-reversed-text);
  padding-top: ${regularMarginRem}rem;
  padding-bottom: ${regularMarginRem}rem;

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

/* eslint-disable */
class CustomThemeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          // Don't render anything at compile time. Deferring rendering until we
          // know which theme to use on the client avoids incorrect initial
          // state being displayed.
          if (theme == null) {
            return null;
          }
          return (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
          );
        }}
      </ThemeToggler>
    );
  }
}
/* eslint-enable */

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
          <CustomThemeToggle />
        </div>
      </Cluster>
    </PageContentContainer>
  </StyledHeader>
);

export default Header;
