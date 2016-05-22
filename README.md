# Minimal Grid v2.0.0
> A minimal (Sass / Scss based) grid system for mobile first responsive design

Version 2.0.0 is a complete overhaul using mixins over extends, see the updated docs below.

#### Features
* Percentage based (`@include grid(50)`  instead of `class="span_6"`)
* Mobile screen first breakpoints (`from-medium` instead of `desktop`)
* Sass / Sccs based (no ugly classs in your html)
* Easy to extend or customise per project

#### Example
[Check out an example](http://htmlpreview.github.io/?https://github.com/AaronRutley/minimal-grid/blob/master/index.html)

#### How to install - As a Sass / Scss partial

```scss
@import "partials/minimal-grid";
```

#### How to use
1. Open `_minimal-grid.scss`
2. Set your breakpoints (pixel values are converted to ems)

	```sass
	$breakpoint-small:  em(400);
	$breakpoint-medium: em(800);
	$breakpoint-large:  em(1200);
	$breakpoint-xlarge: em(1600);
	```
3. Write your HTML

	Let's say you have 6 `items to show on a page, you could write some HTML like this:

	```html
	<div class="feature">
		<div class="feature__item"> a </div>
		<div class="feature__item"> b </div>
		<div class="feature__item"> c </div>
		<div class="feature__item"> d </div>
		<div class="feature__item"> e </div>
		<div class="feature__item"> f </div>
	</div>
	```
4. Write your Sass / Scss

	Lets say you want these items to be 50% on a small screen, 33.33% on a medium screen and then 16.66% on a large screen. You could achive that with minimal-grid and some Scss like this:

	``` scss
	.feature {
		@include grid-container;

		&__item {
			@include grid-item;
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
* 2.0.0 : Major refactoring to use mixins over extends, switch to gulp
* 1.0.1 : Fixed typo in xlarge breakpoint
* 1.0.0 : Inital Commit

#### License
* MIT License
