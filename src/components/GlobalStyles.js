import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the 'main' element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on 'h1' elements within 'section' and
 * 'article' contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent 'sub' and 'sup' elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from 'fieldset' elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    'fieldset' elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to 'inherit' in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}


/* CSS Custom Properties Definitions */

:root {
  --maxWidth-none: "none";
  --maxWidth-xs: 20rem;
  --maxWidth-sm: 24rem;
  --maxWidth-md: 28rem;
  --maxWidth-lg: 32rem;
  --maxWidth-xl: 36rem;
  --maxWidth-2xl: 42rem;
  --maxWidth-3xl: 48rem;
  --maxWidth-4xl: 56rem;
  --maxWidth-full: "100%";
  --maxWidth-wrapper: var(--maxWidth-2xl);
  --spacing-px: "1px";
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-32: 8rem;
  --fontFamily-sans: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --fontFamily-serif: "Georgia", Cambria, "Times New Roman",
    Times, serif;
  --font-body: var(--fontFamily-sans);
  --font-heading: var(--fontFamily-sans);
  --fontWeight-normal: 400;
  --fontWeight-medium: 500;
  --fontWeight-semibold: 600;
  --fontWeight-bold: 700;
  --fontWeight-extrabold: 800;
  --fontWeight-black: 900;
  --fontSize-root: 16px;
  --lineHeight-none: 1;
  --lineHeight-tight: 1.1;
  --lineHeight-normal: 1.5;
  --lineHeight-relaxed: 1.625;
  /* 1.200 Minor Third Type Scale */
  --fontSize-0: 0.833rem;
  --fontSize-1: 1rem;
  --fontSize-2: 1.2rem;
  --fontSize-3: 1.44rem;
  --fontSize-4: 1.728rem;
  --fontSize-5: 2.074rem;
  --fontSize-6: 2.488rem;
  --fontSize-7: 2.986rem;
  --color-primary: #005b99;
  --color-text: #2e353f;
  --color-text-light: #4f5969;
  --color-heading: #1a202c;
  --color-heading-black: black;
  --color-accent: #d1dce5;

  --pink-light: #f687b3;
  --pink: #d53f8c;
  --pink-dark: #97266d;
  --purple-light: #b794f4;
  --purple: #805ad5;
  --purple-dark: #553c9a;
  --indigo-light: #7f9cf5;
  --indigo: #5a67d8;
  --indigo-dark: #434190;
  --blue-light: #63b3ed;
  --blue: #3182ce;
  --blue-dark: #2c5282;
  --teal-light: #4fd1c5;
  --teal: #319795;
  --teal-dark: #285e61;
  --green-light: #68d391;
  --green: #38a169;
  --green-dark: #276749;
  --yellow-light: #fefcbf;
  --yellow: #f6e05e;
  --yellow-dark: #d69e2e;
  --red-light: #fc8181;
  --red: #e53e3e;
  --red-dark: #9b2c2c;
  --orange-light: #fbd38d;
  --orange: #ed8936;
  --orange-dark: #c05621;
  --gray-100: #f7fafc;
  --gray-200: #edf2f7;
  --gray-300: #e2e8f0;
  --gray-400: #cbd5e0;
  --gray-500: #a0aec0;
  --gray-600: #718096;
  --gray-700: #4a5568;
  --gray-800: #2d3748;
  --gray-900: #1a202c;
  --text-light: #718096;

  --media-sm: 572px;
  --media-md: 768px;
  --media-lg: 992px;
  --media-xl: 1200px;
}

/* HTML elements */

*,
:after,
:before {
  box-sizing: border-box;
}

html {
  line-height: var(--lineHeight-normal);
  font-size: var(--fontSize-root);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-size: 18px;
  color: var(--color-text);
}

footer {
  padding: var(--spacing-6) var(--spacing-0);
}

hr {
  background: var(--color-accent);
  height: 1px;
  border: 0;
}

/* Heading */

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-6);
  line-height: var(--lineHeight-tight);
  letter-spacing: -0.025em;
}

h2,
h3,
h4,
h5,
h6 {
  font-weight: var(--fontWeight-bold);
  color: var(--color-heading);
}

h1 {
  font-weight: var(--fontWeight-black);
  font-size: var(--fontSize-6);
  color: var(--color-heading-black);
}

h2 {
  font-size: var(--fontSize-5);
}

h3 {
  font-size: var(--fontSize-4);
}

h4 {
  font-size: var(--fontSize-3);
}

h5 {
  font-size: var(--fontSize-2);
}

h6 {
  font-size: var(--fontSize-1);
}

h1 > a {
  color: inherit;
  text-decoration: none;
}

h2 > a,
h3 > a,
h4 > a,
h5 > a,
h6 > a {
  text-decoration: none;
  color: inherit;
}

/* Prose */

p {
  line-height: var(--lineHeight-relaxed);
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-8) var(--spacing-0);
  padding: var(--spacing-0);
}

ul,
ol {
  margin-left: var(--spacing-0);
  margin-right: var(--spacing-0);
  padding: var(--spacing-0);
  margin-bottom: var(--spacing-8);
  list-style-position: outside;
  list-style-image: none;
}

ul li,
ol li {
  padding-left: var(--spacing-0);
  margin-bottom: calc(var(--spacing-8) / 2);
}

li > p {
  margin-bottom: calc(var(--spacing-8) / 2);
}

li *:last-child {
  margin-bottom: var(--spacing-0);
}

li > ul {
  margin-left: var(--spacing-8);
  margin-top: calc(var(--spacing-8) / 2);
}

blockquote {
  color: var(--color-text-light);
  margin-left: calc(-1 * var(--spacing-6));
  margin-right: var(--spacing-8);
  padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-6);
  border-left: var(--spacing-1) solid var(--color-primary);
  font-size: var(--fontSize-2);
  font-style: italic;
  margin-bottom: var(--spacing-8);
}

blockquote > :last-child {
  margin-bottom: var(--spacing-0);
}

blockquote > ul,
blockquote > ol {
  list-style-position: inside;
}

table {
  width: 100%;
  margin-bottom: var(--spacing-8);
  border-collapse: collapse;
  border-spacing: 0.25rem;
}

table thead tr th {
  border-bottom: 1px solid var(--color-accent);
}

/* Link */

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: none;
}

/* Custom classes */

.global-wrapper {
  margin: var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  padding: var(--spacing-10) var(--spacing-5);
}

.global-wrapper[data-is-root-path="true"] .bio {
  margin-bottom: var(--spacing-20);
}

.global-header {
  margin-bottom: var(--spacing-12);
}

.main-heading {
  font-size: var(--fontSize-7);
  margin: 0;
}

.post-list-item {
  margin-bottom: var(--spacing-8);
  margin-top: var(--spacing-8);
}

.post-list-item p {
  margin-bottom: var(--spacing-0);
}

.post-list-item h2 {
  font-size: var(--fontSize-4);
  color: var(--color-primary);
  margin-bottom: var(--spacing-2);
  margin-top: var(--spacing-0);
}

.post-list-item header {
  margin-bottom: var(--spacing-4);
}

.header-link-home {
  font-weight: var(--fontWeight-bold);
  font-family: var(--font-heading);
  text-decoration: none;
  font-size: var(--fontSize-2);
}

.bio {
  display: flex;
  margin-bottom: var(--spacing-16);
}

.bio p {
  margin-bottom: var(--spacing-0);
}

.bio-avatar {
  margin-right: var(--spacing-4);
  margin-bottom: var(--spacing-0);
  min-width: 50px;
  border-radius: 100%;
}

.blog-post header h1 {
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
}

.blog-post header p {
  font-size: var(--fontSize-2);
  font-family: var(--font-heading);
}

.blog-post-nav ul {
  margin: var(--spacing-0);
}

.gatsby-highlight {
  margin-bottom: var(--spacing-8);
}

/* Media queries */

@media (max-width: 42rem) {
  blockquote {
    padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-4);
    margin-left: var(--spacing-0);
  }
  ul,
  ol {
    list-style-position: inside;
  }
}


/*Custom*/

.text-pink {
  color: var(--pink);
}

.text-purple {
  color: var(--purple);
}

.text-indigo {
  color: var(--indigo);
}

.text-blue {
  color: var(--blue);
}

.text-teal {
  color: var(--teal);
}

.text-green {
  color: var(--green);
}

.accent-font {
  font-family: var(--fontFamily-sans);
  /* font-family: 'Lexend Deca', sans-serif; */
}



`
