## Selenium Javascript

### Tech Stack

Selenium + Mocha + Chai + Javascript

### Mocha

We can watch the files using : "test": "mocha --config .mocharc.json --watch src/\*_/_.spec.js"

### Javascript

By default Java Script ES6 features are not available in Node js.

- The import, export keywords, Arrow functions will not work.
- Add `type:module` in package.json file to support ES6 features
- Do not add `require` & use `import` type of statements instead. The require will not be supported and throw error.
