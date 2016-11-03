---
layout: page
title: "Code"
order: 5
---

The `<code>` and `<pre>` HTML elements are primarily used for displaying computer recognized programs or code. BaseWeb comes with some predefined styles for both inline code markup and blocks of code.

## Inline Code

Inline code primarily appear in small fragments within text blocks. BaseWeb styles them so that they are easy to recognize and parse in that context.

```html
<code>...</code>
```

<div class="demo">
  <p>Here is an example variable: <code>var example = 'This is a test';</code></p>
</div>

## Block Code

Code blocks are larger sections of code that utilize the combination of a `<pre>` element to retain preformatted text, in which structure is represented by typographic conventions rather than by elements.

```html
<pre><code>...</code></pre>
```

```js
var new = BaseWeb;

class BaseWeb() {
  desc: a fresh front-end development framework
}
```