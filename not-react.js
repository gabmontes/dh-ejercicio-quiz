/**
 * not-react
 *
 * A minimal (re)implementation of ReactDOM for learning and teaching purposes.
 *
 * https://medium.com/@gab_montes/react-in-200-bytes-28156e714165
 */

// eslint-disable-next-line no-extra-semi
;(function (global) {
  global.notReactDOM = {
    render: function (component, element) {
      element.innerHTML = typeof component === 'function'
        ? component()
        : component
    }
  }
})(this)
