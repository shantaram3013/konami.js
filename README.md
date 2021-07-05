# konami.js

A small library for implementing the Konami Code into your website.

### Usage

Include it in your project with:
```html
    <script src='konami.js'>
```

(Consider renaming it to something less conspicuous.)

In JavaScript, simply listen for the `konami` event:
```js
window.addEventListener('konami', function() {
    console.log('God mode active.')
});
```

Copyright © 2021 Siddharth Singh