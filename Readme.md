
# redux-effects-localstorage

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Redux effects driver for localStorage

## Installation

    $ npm install redux-effects-localstorage

## Usage

Simple [redux-effects](https://github.com/redux-effects/redux-effects) driver for [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).  Add it to your redux middleware stack like this:

```javascript
import localStorage from 'redux-effects-localstorage'

applyMiddleware(localStorage(window.localStorage))(store)
```

And then dispatch it actions, like this:

```javascript
store.dispatch({
  type: 'EFFECT_LOCALSTORAGE',
  payload: {
    type: 'set',
    key: 'todos.0',
    value: 'Clean the kitchen'
  }
})
```

Or, use the action creators that come bundled with it:

```javascript
import localStorage from 'redux-effects-localStorage'

store.dispatch(localStorage.set('todos.0', 'Clean the kitchen'))
```

The API of the action creators is identical to that of the native localStorage object, with the sole exception that the property `length` has been changed to the function `getLength`.

## License

The MIT License

Copyright &copy; 2015, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
