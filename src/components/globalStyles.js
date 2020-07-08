import { createGlobalStyle } from 'styled-components';

import { normalize } from 'polished';

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
     * Named colours
     * These colours come from the Refactoring UI book, Palette 7.
     * https://refactoringui.com/book/
     *
     * Colours are arranged from light to dark.
     */

    /* Neutrals */
    --c-neutral-050: #FAF9F7;
    --c-neutral-100: #E8E6E1;
    --c-neutral-200: #D3CEC4;
    --c-neutral-300: #B8B2A7;
    --c-neutral-400: #A39E93;
    --c-neutral-500: #857F72;
    --c-neutral-600: #625D52;
    --c-neutral-700: #504A40;
    --c-neutral-800: #423D33;
    --c-neutral-900: #27241D;

    /* Primary cyan */
    --c-cyan-050: #E0FCFF;
    --c-cyan-100: #BEF8FD;
    --c-cyan-200: #87EAF2;
    --c-cyan-300: #54D1DB;
    --c-cyan-400: #38BEC9;
    --c-cyan-500: #2CB1BC;
    --c-cyan-600: #14919B;
    --c-cyan-700: #0E7C86;
    --c-cyan-800: #0A6C74;
    --c-cyan-900: #044E54;

    /* Blue */
    --c-blue-050: #DCEEFB;
    --c-blue-100: #B6E0FE;
    --c-blue-200: #84C5F4;
    --c-blue-300: #62B0E8;
    --c-blue-400: #4098D7;
    --c-blue-500: #2680C2;
    --c-blue-600: #186FAF;
    --c-blue-700: #0F609B;
    --c-blue-800: #0A558C;
    --c-blue-900: #003E6B;

    /* Red */
    --c-red-050: #FFEEEE;
    --c-red-100: #FACDCD;
    --c-red-200: #F29B9B;
    --c-red-300: #E66A6A;
    --c-red-400: #D64545;
    --c-red-500: #BA2525;
    --c-red-600: #A61B1B;
    --c-red-700: #911111;
    --c-red-800: #780A0A;
    --c-red-900: #610404;

    /* Yellow */
    --c-yellow-050: #FFFAEB;
    --c-yellow-100: #FCEFC7;
    --c-yellow-200: #F8E3A3;
    --c-yellow-300: #F9DA8B;
    --c-yellow-400: #F7D070;
    --c-yellow-500: #E9B949;
    --c-yellow-600: #C99A2E;
    --c-yellow-700: #A27C1A;
    --c-yellow-800: #7C5E10;
    --c-yellow-900: #513C06;

    /* Teal */
    --c-teal-050: #EFFCF6;
    --c-teal-100: #C6F7E2;
    --c-teal-200: #8EEDC7;
    --c-teal-300: #65D6AD;
    --c-teal-400: #3EBD93;
    --c-teal-500: #27AB83;
    --c-teal-600: #199473;
    --c-teal-700: #147D64;
    --c-teal-800: #0C6B58;
    --c-teal-900: #014D40;

    /*
     * Semantic colours in default (light) theme
     */
    --c-primary: var(--c-cyan-800);
    --c-text: var(--c-neutral-900);
    --c-background: var(--c-neutral-050);
    --c-link: var(--c-blue-600);
    --c-highlight-background: var(--c-yellow-300);
    --c-reversed-text: var(--c-neutral-100);
    --c-reversed-background: var(--c-neutral-900);
    --c-reversed-link: var(--c-blue-100);
    --c-tag-text: var(--c-neutral-700);
    --c-tag-background: var(--c-neutral-100);
    --c-button-background: var(--c-primary);
    --c-button-text: var(--c-reversed-text);
    --c-faded-text: var(--c-neutral-600);
    --c-snippet-background: var(--c-neutral-100);
    --c-snippet-border: var(--c-primary-800);
    --c-icon-primary: var(--c-neutral-200);
    --c-icon-secondary: var(--c-primary);
    --c-algolia-text: #182359;

    /*
     * System font stacks (for now).
     * https://css-tricks.com/snippets/css/system-font-stack/
     */
    ${fontFamily.sans}
    line-height: 1.45;
    color: var(--c-text);
    background-color: var(--c-background);
  }

  body.dark {
    --c-text: var(--c-neutral-100);
    --c-background: var(--c-neutral-900);
    --c-link: var(--c-blue-100);
    --c-reversed-text: var(--c-neutral-100);
    --c-reversed-background: #000000;
    --c-reversed-link: var(--c-blue-100);
    --c-tag-text: var(--c-neutral-200);
    --c-tag-background: var(--c-neutral-700);
    --c-faded-text: var(--c-neutral-400);
    --c-snippet-background: var(--c-neutral-700);
    --c-snippet-border: var(--c-primary-700);
    --c-icon-primary: var(--c-primary);
    --c-icon-secondary: var(--c-neutral-100);
    --c-algolia-text: var(--c-text);
  }

  a {
    color: var(--c-link);
  }
`;

export default GlobalStyle;
