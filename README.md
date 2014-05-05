# Minimal Grid
> A minimal (Sass based) grid system for mobile first responsive design

### Features
* Percentage based (50% instead of span_6)
* Mobile first breakpoints ('from-medium' instead of 'desktop')
* Sass based (no ugly classs in your html)
* Easy to extend or customise per project

### Example
[Check out an example](http://htmlpreview.github.io/?https://github.com/AaronRutley/minimal-grid/blob/master/index.html)

### How to use in your next project
1. Download / clone this repo
2. Import the Minimal Grid (as a partial) eg:
    ```sass
    @import "partials/minimal-grid";
    ```
3. Set your breakpoints (pixel values are converted to ems)
    ```sass
    $breakpoint-small:  em(400);
    $breakpoint-medium: em(800);
    $breakpoint-large:  em(1200);
    $breakpoint-xlarge: em(1600);
    ```
4. Write your HTML
Let's say you have 6 'promos' to show on a page,
you could write some HTML like this:
    ```html
    <section class="promo-container">
        <section class="promo"><p>promo</p></section>
        <section class="promo"><p>promo</p></section>
        <section class="promo"><p>promo</p></section>
        <section class="promo"><p>promo</p></section>
        <section class="promo"><p>promo</p></section>
        <section class="promo"><p>promo</p></section>
    </section>
    ```
5. Write your Sass
Lets say you want these promos to be 50% on a small screen, 33.33% on a medium screen and then 16.66% on a large screen. You could achive that with minimal-grid and some Sass like this:
``` sass
.promo-container {
    @extend %grid-container;
    .promo {
        @include grid(50);
        @include breakpoint(from-medium) {
            @include grid(33);
        }
        @include breakpoint(from-large) {
            @include grid(16);
        }
    }
}
```
6. That's it !
This is very much a work in progress & pull requests welcome !

### To Do
- [x] Finalise breakpoint naming conventions
- [x] Switch to EMs for breakpoints
- [x] Setup defaults for breakpoints
- [x] Optimise percentage mixin
- [ ] Find DRY / better solution for %grid-block
