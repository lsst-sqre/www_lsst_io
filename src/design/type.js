/*
 * Type-related design tokens.
 */

import { css } from 'styled-components';

/*
 * font-family choices using system font stacks.
 * https://css-tricks.com/snippets/css/system-font-stack/
 */
export const fontFamily = {
  sans: css`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  `,

  mono: css`
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  `,
};
