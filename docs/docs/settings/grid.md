---
layout: page
title: "Grid System Variables"
link:
  text: "Grid"
order: 4
---

All grid variables are defined within the <code>$grid</code> and <code>$mini-grid</code> maps and are used as the default settings for all grid system mixins and functions. You can modify these settings directly to effect all grid systems, or pass in a custom map to specific mixins.

<table class="table table-docs">
  <tr>
    <th>Variable</th>
    <th>Default</th>
    <th>Description</th>
  </tr>

  <tr>
    <th colspan="3">Global Grid Settings</th>
  </tr>
  <tr>
    <td><code>$grid('type')</code></td>
    <td><code>normal</code></td>
    <td>Set the grid type to <code>normal</code> or <code>mobile</code> to output their respective grid styles.</td>
  </tr>
  <tr>
    <td><code>$grid('total-width')</code></td>
    <td><code>100%</code></td>
    <td>Use same unit type as <code>$grid('gutter-width')</code>.</td>
  </tr>
  <tr>
    <td><code>$grid('gutter-width')</code></td>
    <td><code>0</code></td>
    <td>Use same unit type as <code>$grid('total-width')</code>. Used to set left and right margin of columns.</td>
  </tr>
  <tr>
    <td><code>$grid('inner-gutter-width')</code></td>
    <td><code>20px</code></td>
    <td>Used to set using left and right padding of columns.</td>
  </tr>
  <tr>
    <td><code>$grid('columns')</code></td>
    <td colspan="2"><code>12</code></td>
  </tr>
  <tr>
    <td><code>$grid('column-float')</code></td>
    <td colspan="2"><code>left</code></td>
  </tr>

  <tr>
    <th colspan="3">Container Settings</th>
  </tr>
  <tr>
    <td><code>$grid('container-margin')</code></td>
    <td colspan="2"><code>auto</code></td>
  </tr>
  <tr>
    <td><code>$grid('container-padding')</code></td>
    <td colspan="2"><code>20px</code></td>
  </tr>
  <tr>
    <td><code>$grid('container-min-width')</code></td>
    <td colspan="2"><code>none</code></td>
  </tr>
  <tr>
    <td><code>$grid('container-max-width')</code></td>
    <td colspan="2"><code>1000px</code></td>
  </tr>

  <tr>
    <th colspan="3">Grid Class Names</th>
  </tr>
  <tr>
    <td><code>$grid('class-container')</code></td>
    <td colspan="2"><code>container</code></td>
  </tr>
  <tr>
    <td><code>$grid('class-row')</code></td>
    <td colspan="2"><code>row</code></td>
  </tr>
  <tr>
    <td><code>$grid('class-column')</code></td>
    <td colspan="2"><code>col</code></td>
  </tr>
  <tr>
    <td><code>$grid('class-column-left')</code></td>
    <td colspan="2"><code>col-left</code></td>
  </tr>
  <tr>
    <td><code>$grid('class-column-right')</code></td>
    <td colspan="2"><code>col-right</code></td>
  </tr>
  <tr>
    <td><code>$grid('class-prefix')</code></td>
    <td><code>prefix</code></td>
    <td>Set to <code>none</code> to disable output.</td>
  </tr>
  <tr>
    <td><code>$grid('class-suffix')</code></td>
    <td><code>suffix</code></td>
    <td>Set to <code>none</code> to disable output.</td>
  </tr>

  <tr>
    <th colspan="3">Mini Grid System</th>
  </tr>
  <tr>
    <td><code>$mini-grid('fractions')</code></td>
    <td><code>12</code></td>
    <td>Used to determine the number of fraction classes to output.</td>
  </tr>
  <tr>
    <td><code>$mini-grid('class-has')</code></td>
    <td><code>has</code></td>
    <td>Class name for mini-grid parent classes.</td>
  </tr>
  <tr>
    <td><code>$mini-grid('class-is')</code></td>
    <td><code>is</code></td>
    <td>Class name for mini-grid children classes.</td>
  </tr>
</table>