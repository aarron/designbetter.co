# InVision - Design Better

## Based on Fuzzcode starter kit

## Quick start

### Requirements

Install NodeJS on your local system. You can get a copy from the NodeJS website linked below.

[NodeJS](http://nodejs.org/)

### Setup

Install project dependencies.

From your terminal, `cd` into the directory where this project lives and type the following command:
```
$ npm install
```

### File structure

* Source: contains all project source files
* Build: contains all compiled code and is rewritten

* HTML: source/htdocs -> build/
* CSS: source/scss -> build/css/style.min.css
* JavaScript: source/js -> build/js/bundle.js
* Images (png,jpg,gif,svg): source/img -> build/img


### Development

```
$ npm run watch
```

When it finishes, a new browser window will open pointing to a local BrowserSync server.

###Production

```
$ npm run build
```

Minifies and builds site for production.

### Dependencies

Search for available dependencies on [https://npmjs.com](https://www.npmjs.com/) or by using `$ npm search`.

#### CSS

CSS dependencies are managed using NPM and imported via source/scss/style.scss.

Add dependency using:

```
$ npm install --save DEPENDENCY_NAME
```

For example:

```
$ npm install --save foundation-sites
```

Within /source/scss/style.scss link to dependency:

```
@import 'node_modules/DEPENDENCY_NAME';
```

For example:

```
@import 'node_modules/foundation-sites/scss/foundation';
```

#### JavaScript

JavaScript dependencies are managed using NPM and imported using [Browserfy](http://browserify.org/) via /source/js/app.js.

Add dependency using:

```
$ npm install --save DEPENDENCY_NAME
```

For example:

```
$ npm install --save fastclick
```

Within /source/js/app.js add:

```
var dependencyName = require('DEPENDENCYNAME');
```

For example:

```
var fastclick = require('fastclick');
```

## Code style guides

* [JavaScript style guide](https://bitbucket.org/fuzzco/fuzzcode/wiki/JavaScript%20Style%20Guide)
* [CSS style guide](https://bitbucket.org/fuzzco/fuzzcode/wiki/CSS%20Style%20Guide)
* [HTML style guide](https://bitbucket.org/fuzzco/fuzzcode/wiki/HTML%20Style%20Guide)

## Foundation documentation

* http://foundation.zurb.com/sites/docs/sass-mixins.html

## Git commit guidelines

* https://github.com/erlang/otp/wiki/Writing-good-commit-messages
* http://chris.beams.io/posts/git-commit/

## Tools

Fuzzcode utilizes EditorConfig to maintain consistent coding styles accross different editors.

Download the [EditorConfig](http://editorconfig.org/) Plugin for your editor.

## Includes

We're using Twig includes for static site includes. Check out [Twig Includes Documentation](http://twig.sensiolabs.org/doc/tags/include.html).

### Usage

Within an html file add the following

```
{% include 'source/htdocs/_includes/header.html' with {'page': 'home'} %}
```

Update the include path to point to the intented include template. This case we're using *source/htdocs/_includes/header.html*. We're passing the variable *page* that's set to *home*.

Note: all includes must be within an *_includes* directory