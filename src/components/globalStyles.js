import { createGlobalStyle } from 'styled-components';

import { normalize } from 'polished';

import { fontFamily } from '../design/type';
import { primary, neutral, blue, red, yellow, teal } from '../design/color';

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
    --c-neutral-050: ${neutral['050']};
    --c-neutral-100: ${neutral['100']};
    --c-neutral-200: ${neutral['200']};
    --c-neutral-300: ${neutral['300']};
    --c-neutral-400: ${neutral['400']};
    --c-neutral-500: ${neutral['500']};
    --c-neutral-600: ${neutral['600']};
    --c-neutral-700: ${neutral['700']};
    --c-neutral-800: ${neutral['800']};
    --c-neutral-900: ${neutral['900']};

    /* Primary cyan */
    --c-cyan-050: ${primary['050']};
    --c-cyan-100: ${primary['100']};
    --c-cyan-200: ${primary['200']};
    --c-cyan-300: ${primary['300']};
    --c-cyan-400: ${primary['400']};
    --c-cyan-500: ${primary['500']};
    --c-cyan-600: ${primary['600']};
    --c-cyan-700: ${primary['700']};
    --c-cyan-800: ${primary['800']};
    --c-cyan-900: ${primary['900']};

    /* Blue */
    --c-blue-050: ${blue['050']};
    --c-blue-100: ${blue['100']};
    --c-blue-200: ${blue['200']};
    --c-blue-300: ${blue['300']};
    --c-blue-400: ${blue['400']};
    --c-blue-500: ${blue['500']};
    --c-blue-600: ${blue['600']};
    --c-blue-700: ${blue['700']};
    --c-blue-800: ${blue['800']};
    --c-blue-900: ${blue['900']};

    /* Red */
    --c-red-050: ${red['050']};
    --c-red-100: ${red['100']};
    --c-red-200: ${red['200']};
    --c-red-300: ${red['300']};
    --c-red-400: ${red['400']};
    --c-red-500: ${red['500']};
    --c-red-600: ${red['600']};
    --c-red-700: ${red['700']};
    --c-red-800: ${red['800']};
    --c-red-900: ${red['900']};

    /* Yellow */
    --c-yellow-050: ${yellow['050']};
    --c-yellow-100: ${yellow['100']};
    --c-yellow-200: ${yellow['200']};
    --c-yellow-300: ${yellow['300']};
    --c-yellow-400: ${yellow['400']};
    --c-yellow-500: ${yellow['500']};
    --c-yellow-600: ${yellow['600']};
    --c-yellow-700: ${yellow['700']};
    --c-yellow-800: ${yellow['800']};
    --c-yellow-900: ${yellow['900']};

    /* Teal */
    --c-teal-050: ${teal['050']};
    --c-teal-100: ${teal['100']};
    --c-teal-200: ${teal['200']};
    --c-teal-300: ${teal['300']};
    --c-teal-400: ${teal['400']};
    --c-teal-500: ${teal['500']};
    --c-teal-600: ${teal['600']};
    --c-teal-700: ${teal['700']};
    --c-teal-800: ${teal['800']};
    --c-teal-900: ${teal['900']};

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
    --c-snippet-border: var(--c-primary);
    --c-icon-primary: var(--c-neutral-200);
    --c-icon-secondary: var(--c-primary);
    --c-hit-card-background: inherit;
    --c-algolia-text: #182359;

    /*
     * Elevations
     *
     * Are box-shadow properties.
     *
     * We're using the Tailwind CSS box shadows here:
     * https://tailwindcss.com/docs/box-shadow/
     */
    --elevation-0: none;
    --elevation-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);
    --elevation-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --elevation-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --elevation-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --elevation-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --elevation-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --elevation-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --elevation-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    --elevation-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);

    /*
     * Border radius
     */
    --border-radius-0: 0px;
    --border-radius-1: 4px;
    --border-radius-2: 7px;

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
    --c-hit-card-background: var(--c-neutral-900);
    --c-hit-card-border: var(--c-neutral-700);
    --c-icon-primary: var(--c-primary);
    --c-icon-secondary: var(--c-neutral-100);
    --c-algolia-text: var(--c-text);
  }

  a {
    color: var(--c-link);
  }
`;

export default GlobalStyle;
