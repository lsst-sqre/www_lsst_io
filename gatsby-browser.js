/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { AppThemeProvider } from './src/context/themeContext';

/*
 * Wraps the root element with the AppThemeProvider that contains the
 * ThemeSettingsContext.
 *
 * Now a "theme" prop is available to all styled components. Other components
 * can also access the theme prop using styled-components's withTheme higher-
 * order component. You can also access the functions to modify the theme
 * settings with "useTheme" from themeContext.
 */
export const wrapRootElement = ({ element }) => (
  <AppThemeProvider>{element}</AppThemeProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
