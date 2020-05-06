/*
 * Button for toggling the theme's color scheme between light and dark.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { useTheme } from '../context/themeContext';

const ThemeToggleButton = ({ theme }) => {
  const { toggleColorScheme } = useTheme();

  return (
    <button type="button" onClick={() => toggleColorScheme()}>
      {theme.scheme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  );
};

ThemeToggleButton.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(ThemeToggleButton);
