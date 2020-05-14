/*
 * Themed properties.
 */

import theme from 'styled-theming';

import { black, neutral, blue } from './color';

/* Body text color */
export const textColor = theme('scheme', {
  light: neutral['900'],
  dark: neutral['100'],
});

/* Link (<a> tag) text color */
export const linkColor = theme('scheme', {
  light: blue['600'],
  dark: blue['100'],
});

/* General page background color */
export const backgroundColor = theme('scheme', {
  light: neutral['050'],
  dark: neutral['900'],
});

/*
 * Reversed text color
 *
 * For text on reversedBackgroundColor.
 */
export const reversedTextColor = theme('scheme', {
  light: neutral['100'],
  dark: neutral['100'],
});

/*
 * Reversed link color
 *
 * For text on reversedLinkColor.
 */
export const reversedLinkColor = theme('scheme', {
  light: blue['100'],
  dark: blue['100'],
});

/* Reversed background color */
export const reversedBackgroundColor = theme('scheme', {
  light: neutral['900'],
  dark: black,
});

/* Count tag background color
 *
 * Mostly used in Algolia search widgets.
 */
export const countTagBackgroundColor = theme('scheme', {
  light: neutral['100'],
  dark: neutral['700'],
});

/*
 * Count tag text color
 *
 * Mostly used in Algolia search widgets.
 */
export const countTagTextColor = theme('scheme', {
  light: neutral['700'],
  dark: neutral['100'],
});
