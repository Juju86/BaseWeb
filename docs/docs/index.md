---
layout: page
title: Documentation
order: 2
---

BaseWeb documentation is split in five parts, each representing the architecture and explaining what each file does and how it can be used. The most important aspects of BaseWeb is understanding the distinctions of these parts and their roles.

Settings and Core encompass the required BaseWeb files that should be included in all uses of this project. Elements and Blocks represent components of a web project. The custom directory is allocated for writing project specific styles.

```
# SCSS Architecture
scss/
├── settings/
├── core/
├── elements/
├── blocks/
├── custom/
└── _custom.scss

# CSS Output
css/
├── baseweb.css
└── baseweb.min.css
```

All of BaseWeb components are routed through `_baseweb.scss`, where all our `@import` calls are made. The only required files are located in Settings and Core directories. These files, by default, have no CSS output and function simply as a libarary if functions and variables that you can use in your project. To exclude any other optional files, just comment out their `@import` declaration and recompile.

``` scss
/*!
 * BaseWeb
 * A fresh front-end development framework
 *
 * @author Sebastian Nitu
 * @url https://github.com/sebnitu/BaseWeb
 * @url http://sebnitu.com
 *
 * Copyright (c) 2016 Sebastian Nitu (MIT Licensed)
 */

// Settings (Required)
@import "settings/palette";
@import "settings/media";
@import "settings/grid";
@import "settings/typography";
@import "settings/global";

// Core (Required)
@import "core/functions";
@import "core/mixins";
@import "core/media";
@import "core/grid";

// Elements
@import "elements/base";
@import "elements/typography";
@import "elements/lists";
@import "elements/blockquotes";
@import "elements/code";
@import "elements/tables";
@import "elements/images";
@import "elements/rules";
@import "elements/forms";
@import "elements/buttons";
@import "elements/icons";
@import "elements/videos";

// Blocks
@import "blocks/button-groups";
@import "blocks/notices";
@import "blocks/breadcrumbs";
@import "blocks/dropdowns";

// Custom
@import "custom/custom";
```

<div class="notice yellow" markdown="1">
**Notice:** Keep in mind that some components may be dependent on the inclusion of others. For example, the block component `_button-groups.scss` uses the element component `_buttons.scss` as a dependency.
</div>