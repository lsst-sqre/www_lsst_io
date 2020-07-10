# css-icons/

These icons are intended to be embedded in CSS (as `background-image` or `mask-image` properties), unlike `icons/` which are integrated with `gatsby-plugin-react-svg` and intended to be used as `<svg>` elements on the page.

These icons come from [Refactoring UI](https://refactoringui.com/book/).

## background-image usage

This is the pattern for using these icons:

```
import chevronDown from '../css-icons/icon-cheveron-down.svg';
```

In the styled component:

```
background-image: url('${chevronDown}');
```

## mask-image usage

To make icons that change colour depending on the theme, try the mask image technique where the colour is by the `background-color` property, which the icon only sets the shape:

```
background-color: var(--c-text);
mask-size: contain;
mask-repeat: no-repeat;
mask-position: center;
mask-size: 1.1em;
mask-image: url('${chevronDown}');
```

This tip comes from [Marcin Wichary](https://medium.com/@mwichary/dark-theme-in-a-day-3518dde2955a).
