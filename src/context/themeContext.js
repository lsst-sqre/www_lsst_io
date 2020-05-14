/*
 * Theme context providing state for light/dark color schemes and other
 * UI customizations.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

/*
 * The context value is defined in JSX of <ThemeSettingsContext.Provider>.
 */
const ThemeSettingsContext = React.createContext();

/*
 * Hook for accessing functions that toggle the theme settings.
 *
 * - setColorScheme
 * - toggleColorScheme
 */
export const useTheme = () => React.useContext(ThemeSettingsContext);

export const AppThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = React.useState({ scheme: 'light' });

  const setColorScheme = newScheme => {
    setThemeState({ ...themeState, scheme: newScheme });
  };

  const toggleColorScheme = () => {
    const scheme = themeState.scheme === 'light' ? `dark` : `light`;
    setColorScheme(scheme);
  };

  return (
    <ThemeSettingsContext.Provider
      value={{ setColorScheme, toggleColorScheme }}
    >
      <ThemeProvider theme={{ scheme: themeState.scheme }}>
        {children}
      </ThemeProvider>
    </ThemeSettingsContext.Provider>
  );
};

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeSettingsContext;
