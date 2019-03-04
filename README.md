sop-sass
========

[![Build Status](https://travis-ci.org/SomeoddpilotInc/sop-sass.svg?branch=master)](https://travis-ci.org/SomeoddpilotInc/sop-sass)
[![Dependency Status](https://david-dm.org/SomeoddpilotInc/sop-sass.svg)](https://david-dm.org/SomeoddpilotInc/sop-sass)
[![devDependency Status](https://david-dm.org/SomeoddpilotInc/sop-sass/dev-status.svg)](https://david-dm.org/SomeoddpilotInc/sop-sass#info=devDependencies)

Someoddpilot's base Sass framework

Borrowed liberally from [Bootstrap](http://getbootstrap.com) and [Nib](https://github.com/tj/nib)

## Responsive Embeds

A convenient way to make embeds responsive. Supports `16by9` and `4by3`.

```sass
.embed-container {
  embed-responsive(16, 9);
}

.embed-item {
  embed-responsive-item();
}
```

or

```sass
.embed-container {
  @extends $embed-responsive-4by3;
}

.embed-item {
  @extends $embed-responsive-item;
}
```

## Font Specs

A convenient way to set font size, line-height, letter-spacing, and smoothing. Assumes a base font-size of 14. This can be reconfigured by setting the `$base-font-size` variable.

```sass
.foo {
  font-specs(16, 1.4, 100, true);
}
```

## Vendor Prefix Mixins

Convenient vendor prefixes have been added for:

* backface-visibility
* appearance
* transition
* transform
* animation
* animation-timing-function
* animation-delay
* animation-duration

## Responsive

A convenient way to make images responsive.

```sass
img {
  img-responsive();
}
```

## Screen Reader

Makes an element only available to screen-readers, aiding in accessibility.

```sass
.help-text {
  sop-sr-only();
}
```

## Font Face

Sets up font face.

Params:

1. font-family name
2. file root (optional, defaults to `/fonts/`)
3. file name (optional, defaults to font-family name)

```sass
setup-font-face('fontello', '/assets/font/', 'fontello-alt')
```

## Fontello

Includes base fontello icon styling

Has an optional boolean parameter for whether to include animation offset.

```sass
.icon:before
  fontello-icon()
  content '\e200'
```

## Viewport Filled and Fitted

```sass
.img
  viewport-filled(16, 9)

.img--fit
  viewport-fitted(16, 9)
```

# TODO

* Touch detection
* Viewport filled and centered content
* Responsive show and hide
