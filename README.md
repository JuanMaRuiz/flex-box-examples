#Playing with CSS Flexbox

*Resources*

* [Using CSS flexible boxes - MDN ](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
* [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Project structure

Sass structure is based on [10up Engineering-Best-Practices](https://10up.github.io/Engineering-Best-Practices/structure/)

```
|- assets/css/scss/
|  |- global/ ____________________________ # Functions, mixins, placeholders, and variables
|  |- base/
|    |- reset, normalize, or sanitize
|    |- typography
|    |- icons
|    |- wordpress ________________________ # Partial for WordPress default classes
|  |- components/
|    |- buttons
|    |- callouts
|    |- toggles
|    |- all other modular reusable UI components
|  |- layout/
|    |- header
|    |- footer
|    |- sidebar
|  |- templates/
|    |- home page
|    |- single
|    |- archives
|    |- blog
|    |- all page, post, and custom post type specific styles
|  |- admin/ _____________________________ # Admin specific partials
|  |- editor/ ____________________________ # Editor specific partials (leverage placeholders to use in front-end and admin area)
|  |- admin.scss
|  |- project.scss
|  |- editor-styles.scss
```