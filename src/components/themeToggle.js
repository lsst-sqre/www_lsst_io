/*
 * Toggle the theme's color scheme between light and dark.
 */

import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

/* eslint-disable */
class ThemeToggle extends React.Component {
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

export default ThemeToggle;
