yaml-front-matter-brunch
======

***Verison 0.2.6***

This Brunch plugin compiles markdown files with YAML front matter into javascript objects.

Installation
------

```
npm install yaml-front-matter-brunch --save
```

Usage
------

This Brunch plugin takes a markdown file like this this...

```markdown
---
title: I like Bacon
description: Bacon is great - let me tell you why I like it.
published: 2014-04-15
author: Dave
categories:
 - food
 - breakfast
---

Bacon
======

Bacon is great! We all like [Bacon](//en.wikipedia.org/wiki/Bacon).
```

... And compiles it into an object like this...

```js
module.exports = {"title":"I like Bacon","description":"Bacon is great - let me tell you why I like it.","published":"2014-04-15T00:00:00.000Z","author":"Dave","categories":["food","breakfast"],"__content":"<h1>Bacon</h1><p>Bacon is great! We all like <a href=\"//en.wikipedia.org/wiki/Bacon\">Bacon</a>"}
```

- Markdown is parsed using [marked](https://github.com/chjj/marked).
- Code is highlighted using [highlight.js](http://highlightjs.org/).


The module is made acessible to the rest of the app based on its filename.

For example, if you are watching a bunch of `.md` files in a `posts` directory, you can compile all the objects in your node app like this:

```js
var listOfPosts = [];

window.require.list().filter(function(module) {
  return new RegExp('^posts/').test(module);
}).forEach(function(module) {
  var post = require(module);
  listOfPosts.push(post);
});
```

Questions and Comments
------

Open an [issue](https://github.com/sir-dunxalot/yaml-front-matter-brunch/issues/new), fork and PR, or tweet @Sir_Dunxalot
