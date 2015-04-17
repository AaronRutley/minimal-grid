# Minimal Grid v1.0.1
> A minimal (Sass based) grid system for mobile first responsive design

#### Features
* Percentage based (50% instead of span_6)
* Mobile first breakpoints ('from-medium' instead of 'desktop')
* Sass based (no ugly classs in your html)
* Easy to extend or customise per project
* Block Grid options for styling lists

#### Example
[Check out an example](http://htmlpreview.github.io/?https://github.com/AaronRutley/minimal-grid/blob/master/index.html)

#### How to install - Bower

```
bower install minimal-grid
```

#### How to install - As a Sass / SCSS partial

```scss
@import "partials/minimal-grid";
```

#### How to use
1. Open _minimal-grid.scss
2. Set your breakpoints (pixel values are converted to ems)

    ```sass
    $breakpoint-small:  em(400);
    $breakpoint-medium: em(800);
    $breakpoint-large:  em(1200);
    $breakpoint-xlarge: em(1600);
    ```
3. Write your HTML

    Let's say you have 6 'promos' to show on a page, you could write some HTML like this:

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
4. Write your Sass / SCSS

    Lets say you want these promos to be 50% on a small screen, 33.33% on a medium screen and then 16.66% on a large screen. You could achive that with minimal-grid and some Sass like this:

    ``` scss
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

5. That's it!

**This is very much a work in progress & pull requests welcome**

#### Changelog:
* 1.0.1 : Fixed typo in xlarge breakpoint
* 1.0.0 : Inital Commit

#### License
* MIT License
