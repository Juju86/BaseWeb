---
layout: page
title: "Breadcrumbs"
order: 3
---

Breadcrumbs are a type of navigation that let a user both understand the hierarchal depth they are currently in as well as the ability to "move up" in page hierarchy from their current location. With this in mind, BaseWeb's markup and styles for breadcrumbs reflect its use application by semantically and visually giving them hierarchal meaning.

The most basic implementation of a breadcrumb looks like this:

```html
<nav class="breadcrumb">
  <ol>
    <li><a>Home</a></li>
    <li><a>Some Page</a></li>
    <li><a>Some Category</a></li>
    <li><span class="current">Current Page</span></li>
  </ol>
</nav>
```

<div class="demo">
  <nav class="breadcrumb">
    <ol>
      <li><a>Home</a></li>
      <li><a>Some Page</a></li>
      <li><a>Some Category</a></li>
      <li><span class="current">Current Page</span></li>
    </ol>
  </nav>
</div>

The first thing to not is that the list of links is wrapped with the `<nav>` element and is given the `.breadcrumb` class. Secondly, the list items of a breadcrumb are marked up as an ordered list `<ol>`. This is because the order that the links appear is important in representing their meaning.

Sometimes, you want to omit the current page link all together, but still represent the current page with text. In this case, you just wrap the breadcrumb item with a `<span>` and can give it the `.current` class for more subtle text styling.

You also have the `.wrapped` class to add simple wrapper styles to your breadcrumbs.

```html
<nav class="breadcrumb wrapped">
  <ol>
    <li><a>Home</a></li>
    ...
  </ol>
</nav>
```

<div class="demo">
  <nav class="breadcrumb wrapped">
    <ol>
      <li><a>Home</a></li>
      <li><a>Some Page</a></li>
      <li><a>Some Category</a></li>
      <li><span class="current">Current Page</span></li>
    </ol>
  </nav>
</div>

## Fancy Breadcrumbs

If you have your `$breadcrumbs('classes-fancy')` set to `true`, then you'll have the fancy class and fancy modifiers available for styling breadcrumbs. Fancy classes are used to create more complex breadcrumb styling.

```html
<nav class="breadcrumb fancy">
  <ol>
    <li><a>Home</a></li>
    ...
  </ol>
</nav>
```

<div class="demo">
  <nav class="breadcrumb fancy">
    <ol>
      <li><a><span>Home</span></a></li>
      <li><a><span>Some Page</span></a></li>
      <li><a><span>Some Category</span></a></li>
      <li><span class="active item"><span>Current Page</span></span></li>
    </ol>
  </nav>
</div>

<section class="subsection subsection-variables" markdown="1">

# Breadcrumb Variables

Breadcrumb variables are encompassed within the `$breadcrumbs` map and are used throughout all breadcrumb mixins to set default values.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$breadcrumbs('classes')</code></td>
    <td><code>true</code> <a href="#var-note-1">*</a></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('class-item')</code></td>
    <td><code>'item'</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('class-active')</code></td>
    <td><code>'active'</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('class-current')</code></td>
    <td><code>'current'</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('margin')</code></td>
    <td><code>1em 0</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('padding')</code></td>
    <td><code>0.5em 1em</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('font-size')</code></td>
    <td><code>1em</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('color')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('color-hover')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('color-current')</code></td>
    <td><code>$color-light</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('text-shadow')</code></td>
    <td><code>null</code></td>
  </tr>

  <tr>
    <td><code>$breadcrumbs('background')</code></td>
    <td><code>mix($blue, $white, 10%)</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('border')</code></td>
    <td><code>1px solid</code> <code>rgba($black, 0.1)</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('border-radius')</code></td>
    <td><code>$border-radius</code></td>
  </tr>

  <tr>
    <th colspan="2">Delimiter</th>
  </tr>
  <tr>
    <td><code>$breadcrumbs('delimiter')</code></td>
    <td><code>'/'</code> <a href="#var-note-2">**</a></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('delimiter-padding')</code></td>
    <td><code>0 0.75em</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('delimiter-color')</code></td>
    <td><code>rgba($black, 0.25)</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('delimiter-end')</code></td>
    <td><code>false</code></td>
  </tr>

  <tr>
    <th colspan="2">Fancy Breadcrumbs</th>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'margin')</code></td>
    <td><code>1em 0</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'padding')</code></td>
    <td><code>0.5em 0.5em 0.5em 2em</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'padding-first')</code></td>
    <td><code>0.5em 0.5em 0.5em 1em</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'padding-last')</code></td>
    <td><code>0.5em 1em 0.5em 2em</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'font-size')</code></td>
    <td><code>1em</code></td>
  </tr>

  <tr>
    <td><code>$breadcrumbs('fancy' 'color')</code></td>
    <td><code>$color-dark</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'color-hover')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'color-active')</code></td>
    <td><code>null</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'text-shadow')</code></td>
    <td><code>null</code></td>
  </tr>

  <tr>
    <td><code>$breadcrumbs('fancy' 'background')</code></td>
    <td><code>mix($blue, $white, 10%)</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'background-hover')</code></td>
    <td><code>darken(mix($blue, $white, 10%), 5%)</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'background-active')</code></td>
    <td><code>mix($blue, $white, 2%)</code></td>
  </tr>

  <tr>
    <td><code>$breadcrumbs('fancy' 'border')</code></td>
    <td><code>1px solid</code> <code>rgba($black, 0.1)</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'border-radius')</code></td>
    <td><code>$border-radius</code></td>
  </tr>

  <tr>
    <td><code>$breadcrumbs('fancy' 'delimiter-border')</code></td>
    <td><code>1px solid</code> <code>rgba($black, 0.15)</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'delimiter-radius')</code></td>
    <td><code>0 5px 0 100%</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'delimiter-rotate')</code></td>
    <td><code>45deg</code></td>
  </tr>
  <tr>
    <td><code>$breadcrumbs('fancy' 'delimiter-skew')</code></td>
    <td><code>(10deg, 10deg)</code></td>
  </tr>

  <tr>
    <td><code>$breadcrumbs('fancy' 'transition')</code></td>
    <td><code>background 0.25s linear</code></td>
  </tr>
</table>

<div class="notice yellow" id="var-note-1" markdown="1">
\* Whether or not we should output breadcrumb classes. Set to `false` if you want to use breadcrumb mixins semantically and/or reduce CSS output.
</div>

<div class="notice yellow" id="var-note-2" markdown="1">
** Delimiter element content used to separate breadcrumb items (e.g: `/`, `—`, `→`, `»`).
</div>

</section>

<section class="subsection subsection-mixins" markdown="1">

# Breadcrumb Mixins

Breadcrumb mixins are used to create the class output for breadcrumbs. This includes basic breadcrumb styles and wrapper modifier as well as the fancy breadcrumb class.

<ul class="list list-docs">

<li markdown="1">

## make-breadcrumb

Creates the basic breadcrumb styles.

```scss
@include make-breadcrumb( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$breadcrumbs()</code></td>
  </tr>
</table>

### Example Usage

In this example, we'll use the `make-breadcrumb()` mixin to create a custom breadcrumb style.

```scss
.custom-breadcrumb {
  @include make-breadcrumb((
    'color' : $green,
    'color-hover' : $red,
    'delimiter' : '»'
  ));
}
```

```html
<nav class="custom-breadcrumb">...</nav>
```

<div class="demo">
  <nav class="custom-breadcrumb">
    <ol>
      <li><a><span>Home</span></a></li>
      <li><a><span>Some Page</span></a></li>
      <li><a><span>Some Category</span></a></li>
      <li><span class="active item"><span>Current Page</span></span></li>
    </ol>
  </nav>
</div>

</li>

<li markdown="1">

## add-breadcrumb-wrapped

Applies custom styles to breadcrumb wrapper.

```scss
@include add-breadcrumb-wrapped( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$breadcrumbs()</code></td>
  </tr>
</table>

### Example Usage

For this example, we'll use the default `.breadcrumb` class but use the `add-breadcrumb-wrapped()` modifier mixin to create custom wrapper styles.

```scss
.breadcrumb.custom-wrapped {
  @include add-breadcrumb-wrapped((
    'background' : rgba($violet-darker, 0.1),
    'border' : 3px solid rgba($black, 0.05),
    'border-radius' : 0,
  ));
}
```

```html
<nav class="breadcrumb custom-wrapped">...</nav>
```

<div class="demo">
  <nav class="breadcrumb custom-wrapped">
    <ol>
      <li><a><span>Home</span></a></li>
      <li><a><span>Some Page</span></a></li>
      <li><a><span>Some Category</span></a></li>
      <li><span class="active item"><span>Current Page</span></span></li>
    </ol>
  </nav>
</div>

</li>

<li markdown="1">

## add-breadcrumb-fancy

Creates fancy breadcrumb styles.

```scss
@include add-breadcrumb-fancy( $options: () );
```

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>$options</code></td>
    <td>Map</td>
    <td><code>$breadcrumbs()</code></td>
  </tr>
</table>

### Example Usage

```scss
.breadcrumb.custom-fancy {
  @include add-breadcrumb-fancy((
    'fancy' : (
      'color' : $white,
      'text-shadow' : 0 1px 1px rgba($black, 0.25),
      'border' : 1px solid $green-darker,
      'background' : $green,
      'background-hover' : $green-dark,
      'background-active' : $green-darker,
      'delimiter-border' : 1px solid $green-darker,
      'delimiter-skew' : (0),
    )
  ));
}
```

```html
<nav class="breadcrumb custom-fancy">...</nav>
```

<div class="demo">
  <nav class="breadcrumb custom-fancy">
    <ol>
      <li><a><span>Home</span></a></li>
      <li><a><span>Some Page</span></a></li>
      <li><a><span>Some Category</span></a></li>
      <li><span class="active item"><span>Current Page</span></span></li>
    </ol>
  </nav>
</div>

</li>

</ul>

</section>