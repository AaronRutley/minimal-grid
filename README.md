# Minimal Grid
> This is a work in progress & pull requests welcome !


## Why another grid system ?
* Percentage based (50% instead of span_6)
* Breakpoint based ('medium' instead of 'tablet')
* Sass based (no more ugly classs in your html)
* Easy to extend or customise per project

### Example
[Check out an example](http://htmlpreview.github.io/?https://github.com/AaronRutley/minimal-grid/blob/master/index.html)

## How to
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
That's it - this is very much a work in progress & pull requests welcome !

## To Do
- [x] Finalise breakpoint naming conventions
- [x] Switch to EMs for breakpoints
- [x] Setup defaults for breakpoints
- [ ] Optimise percentage mixin
- [ ] Find alternative solution to section selector within grid container


