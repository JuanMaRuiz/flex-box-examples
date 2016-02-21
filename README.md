#Playing with CSS Flexbox

*Resources*

* [Using CSS flexible boxes - MDN ](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
* [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Project structure

Sass structure is based on [10up Engineering-Best-Practices](https://10up.github.io/Engineering-Best-Practices/structure/)

```
|- assets/scss/
|  |- global/ ____________________________ # Functions, mixins, placeholders, and variables
|  |- base/
|    |- reset, normalize, or sanitize
|    |- typography
|    |- icons
|  |- components/
|    |- buttons
|    |- info-boxes
|    |- callouts _________________________ # Not by the moment
|    |- toggles
|    |- all other modular reusable UI components
|  |- layout/
|    |- footer
|    |- header
|    |- sidebar
|  |- templates/
|    |- blog
|    |- portfolio
|    |- all page, post, and custom post type specific styles
```