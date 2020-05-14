/*
 * Button for toggling the theme's color scheme between light and dark.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import themeFunc from 'styled-theming';

import { useTheme } from '../context/themeContext';

import { yellow, neutral } from '../design/color';
import Button from './buttons';
import LightIcon from '../icons/light.svg';

const variations = themeFunc('scheme', {
  light: yellow['900'],
  dark: yellow['200'],
});

const StyledLightIcon = styled(LightIcon)`
  // Technique comes from Every Layout
  width: 0.75em;
  width: 1cap;
  height: 0.75em;
  height: 1cap;

  .primary {
    fill: ${variations};
  }

  .secondary {
    fill: ${neutral['300']};
  }
`;

const ThemeToggleButton = ({ theme }) => {
  const { toggleColorScheme } = useTheme();

  return (
    <Button dir="ltr" type="button" onClick={() => toggleColorScheme()}>
      <StyledLightIcon /> {theme.scheme === 'dark' ? 'Lighten' : 'Darken'}
    </Button>
  );
};

ThemeToggleButton.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(ThemeToggleButton);
