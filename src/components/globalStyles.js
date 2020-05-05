import { createGlobalStyle } from 'styled-components';

import { normalize } from 'polished';

/*
 * Global styles for the entire application via createGlobalStyle.
 */
const GlobalStyle = createGlobalStyle`
  /*
  * CSS reset via normalize.
  */
  ${normalize()}

  html {
    box-sizing: border-box;
  }

  /*
  * Inherit border-box sizing from html
  * https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
  */
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Disable artifical scaling, but let user zoom if needed.
  * Flexible Typesetting, Tim Brown, ch 2.
  */
  @viewport {
    width: device-width;
  }

  /* Reinforce that we're respecting the user's ability to set a default
  * font size. Nominally this is 16 px; but we'll be doing everything in ems
  * anyways.
  * Flexible Typesetting, Tim Brown, ch 2.
  */
  :root {
    font-size: 100%;
  }

  /* System font stacks (for now).
  * https://css-tricks.com/snippets/css/system-font-stack/
  */
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.5;
  }
`;

export default GlobalStyle;
