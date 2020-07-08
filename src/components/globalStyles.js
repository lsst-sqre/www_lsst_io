import { createGlobalStyle } from 'styled-components';

import { normalize } from 'polished';

import { backgroundColor, textColor, linkColor } from '../design/theme';
import { fontFamily } from '../design/type';

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

  /*
   * Disable artifical scaling, but let user zoom if needed.
   * Flexible Typesetting, Tim Brown, ch 2.
   */
  @viewport {
    width: device-width;
  }

  :root {
    /*
     * Reinforce that we're respecting the user's ability to set a default
     * font size. The rem unit now becomes relative to this.
     * Flexible Typesetting, Tim Brown, ch 2 and 4
     */
    font-size: 1.1rem;
  }

  body {
    /*
     * System font stacks (for now).
     * https://css-tricks.com/snippets/css/system-font-stack/
     */
    ${fontFamily.sans}
    line-height: 1.45;
    color: ${textColor};
    background-color: ${backgroundColor};
  }

  a {
    color: ${linkColor}
  }
`;

export default GlobalStyle;
